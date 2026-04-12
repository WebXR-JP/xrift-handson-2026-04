// Sample World step capture (XRift edition)
//
// - Boots Vite dev server inside sample-world/ on a fixed port
// - Iterates over each git branch in sample-world/
// - For each branch: checkout, wait for HMR, navigate to /capture.html,
//   wait for window.__SCENE_READY__, then take a Playwright screenshot
// - Writes screenshots to public/step-shots/

import { chromium } from 'playwright';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SAMPLE_DIR = path.join(ROOT, 'sample-world');
const OUT_DIR = path.join(ROOT, 'public', 'step-shots');
const PORT = 5181;
const HOST = '127.0.0.1';
const URL = `http://${HOST}:${PORT}/capture.html`;

const STAGES = [
  { branch: 'main',                slug: 'step-00-empty',        label: 'Empty scene' },
  { branch: 'step-01-box',         slug: 'step-01-box',          label: 'Add box' },
  { branch: 'step-02-shapes',      slug: 'step-02-shapes',       label: 'Add shapes' },
  { branch: 'step-03-texture',     slug: 'step-03-texture',      label: 'Add texture' },
  { branch: 'step-04-model',       slug: 'step-04-model',        label: 'Add 3D model' },
  { branch: 'step-05-interactable', slug: 'step-05-interactable', label: 'Add interactable' },
];

function sh(cmd, cwd) {
  return execSync(cmd, { cwd, stdio: ['ignore', 'pipe', 'pipe'] }).toString();
}

function checkout(branch) {
  sh(`git checkout ${branch}`, SAMPLE_DIR);
}

function killTree(child) {
  if (!child || child.killed) return;
  try {
    if (process.platform === 'win32') {
      execSync(`taskkill /pid ${child.pid} /T /F`, { stdio: 'ignore' });
    } else {
      child.kill('SIGTERM');
    }
  } catch {
    try { child.kill(); } catch {}
  }
}

async function isPortInUse(port, host) {
  try {
    const res = await fetch(`http://${host}:${port}/`);
    return res.ok || res.status >= 200;
  } catch {
    return false;
  }
}

async function startViteDev() {
  const isWin = process.platform === 'win32';
  if (await isPortInUse(PORT, HOST)) {
    throw new Error(
      `Port ${PORT} on ${HOST} is already in use. Stop the running process before re-running this script.`
    );
  }

  const child = spawn(
    isWin ? 'cmd.exe' : 'sh',
    isWin
      ? ['/c', `npx vite --host ${HOST} --port ${PORT} --strictPort`]
      : ['-c', `npx vite --host ${HOST} --port ${PORT} --strictPort`],
    {
      cwd: SAMPLE_DIR,
      stdio: ['ignore', 'pipe', 'pipe'],
      windowsHide: true,
    }
  );

  child.stdout.on('data', (chunk) => process.stdout.write(`[vite] ${chunk}`));
  child.stderr.on('data', (chunk) => process.stderr.write(`[vite!] ${chunk}`));
  child.on('exit', (code) => {
    console.error(`[vite] exited with code ${code}`);
  });

  // Poll the URL until it's reachable
  const deadline = Date.now() + 60000;
  while (Date.now() < deadline) {
    if (child.exitCode !== null) {
      throw new Error(`vite exited early with code ${child.exitCode}`);
    }
    try {
      const res = await fetch(URL);
      if (res.ok) return child;
    } catch {}
    await new Promise((r) => setTimeout(r, 800));
  }
  child.kill();
  throw new Error('vite did not become reachable within timeout');
}

async function main() {
  console.log('Preparing output directory ...');
  fs.mkdirSync(OUT_DIR, { recursive: true });

  console.log('Starting Vite dev server ...');
  // Make sure we are on a known branch first to ensure StageWorld.tsx exists
  checkout('main');
  const viteProc = await startViteDev();
  console.log(`Vite dev server up on ${URL}`);

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  page.on('pageerror', (err) => console.error('Page error:', err.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') console.error('Console error:', msg.text());
  });

  try {
    for (const stage of STAGES) {
      console.log(`Capturing ${stage.slug} (branch=${stage.branch}) ...`);
      checkout(stage.branch);
      // Give Vite a moment to pick up the file change
      await new Promise((r) => setTimeout(r, 1500));
      // Reset the ready flag and reload
      await page.goto(`${URL}?t=${Date.now()}`, { waitUntil: 'domcontentloaded', timeout: 25000 });
      try {
        await page.waitForFunction(() => window.__SCENE_READY__ === true, { timeout: 20000 });
      } catch (e) {
        console.warn(`  (timeout waiting for scene ready for ${stage.slug})`);
      }
      // Extra settle time so textures/models finish drawing
      await page.waitForTimeout(1500);
      const outPath = path.join(OUT_DIR, `${stage.slug}.png`);
      await page.screenshot({ path: outPath });
      console.log(`  -> ${outPath}`);
    }
  } finally {
    checkout('main');
    await browser.close();
    killTree(viteProc);
  }

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
