// Capture XRift docs screenshots in dark mode for slide usage
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'public', 'docs-shots');

const PAGES = [
  { slug: 'docs-home', url: 'https://docs.xrift.net/' },
  { slug: 'docs-getting-started', url: 'https://docs.xrift.net/getting-started/installation' },
  { slug: 'docs-quickstart', url: 'https://docs.xrift.net/getting-started/quick-start' },
  { slug: 'docs-create-first-world', url: 'https://docs.xrift.net/guides/create-first-world' },
  { slug: 'docs-components', url: 'https://docs.xrift.net/world-components/components/' },
  { slug: 'docs-cli', url: 'https://docs.xrift.net/cli/commands' },
];

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  colorScheme: 'dark',
});

const page = await context.newPage();

for (const p of PAGES) {
  console.log(`Capturing ${p.slug} ...`);
  await page.goto(p.url, { waitUntil: 'networkidle' });
  // Force dark mode toggle if it hasn't applied
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  });
  await page.waitForTimeout(500);
  const outPath = path.join(OUT_DIR, `${p.slug}.png`);
  await page.screenshot({ path: outPath, fullPage: false });
  console.log(`  -> ${outPath}`);
}

await browser.close();
console.log('Done.');
