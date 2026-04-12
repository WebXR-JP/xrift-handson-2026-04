import { chromium } from 'playwright';

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  deviceScaleFactor: 2,
});
const page = await context.newPage();
page.on('pageerror', (e) => console.error('PAGE ERROR:', e.message));
page.on('console', (m) => {
  if (m.type() === 'error') console.error('CONSOLE:', m.text());
});

try {
  await page.goto('http://127.0.0.1:5180/capture.html', { waitUntil: 'networkidle', timeout: 20000 });
  await page.waitForFunction(() => window.__SCENE_READY__ === true, { timeout: 10000 });
  console.log('READY');
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'public/test-capture.png' });
  console.log('Screenshot saved');
} catch (e) {
  console.error('Error:', e.message);
  await page.screenshot({ path: 'public/test-capture-error.png' });
}

await browser.close();
