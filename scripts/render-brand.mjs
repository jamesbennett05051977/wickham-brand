// Wickham brand asset renderer (standalone repo).
// Reads the SVG masters in svg/ and renders the full web/email/social PNG set
// (+ favicon.ico). Run from the repo root:  node scripts/render-brand.mjs
import { Resvg } from '@resvg/resvg-js';
import pngToIco from 'png-to-ico';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const ROOT = new URL('../', import.meta.url);
const SVG = new URL('svg/', ROOT);

for (const d of ['web', 'email', 'social']) mkdirSync(new URL(d + '/', ROOT), { recursive: true });

const load = (name) => readFileSync(new URL(name, SVG));

function render(svgName, outRel, width) {
  const resvg = new Resvg(load(svgName), {
    fitTo: { mode: 'width', value: width },
    font: { loadSystemFonts: true },
    background: 'rgba(0,0,0,0)',
  });
  const png = resvg.render().asPng();
  writeFileSync(new URL(outRel, ROOT), png);
  console.log(`${outRel.padEnd(34)} ${String(width).padStart(5)}px  ${png.length} bytes`);
  return png;
}

// ---------- WEB ----------
render('wickham-mark.svg', 'web/favicon-16.png', 16);
render('wickham-mark.svg', 'web/favicon-32.png', 32);
render('wickham-mark.svg', 'web/favicon-48.png', 48);
render('wickham-mark.svg', 'web/apple-touch-icon.png', 180);
render('wickham-mark.svg', 'web/android-chrome-192.png', 192);
render('wickham-mark.svg', 'web/android-chrome-512.png', 512);
render('wickham-mark.svg', 'web/mark-96.png', 96);
render('wickham-mark.svg', 'web/mark-192.png', 192);
render('wickham-lockup-dark.svg', 'web/lockup-dark.png', 600);
render('wickham-lockup-dark.svg', 'web/lockup-dark@2x.png', 1200);
render('wickham-lockup-light.svg', 'web/lockup-light.png', 600);
render('wickham-lockup-light.svg', 'web/lockup-light@2x.png', 1200);
writeFileSync(new URL('web/favicon.svg', ROOT), load('wickham-mark.svg'));
console.log('web/favicon.svg               (vector copy of mark)');

// ---------- EMAIL ----------
render('wickham-signature-card.svg', 'email/signature-card.png', 1240);
render('wickham-mark.svg', 'email/mark-120.png', 120);
render('wickham-mark.svg', 'email/mark-120@2x.png', 240);

// ---------- SOCIAL ----------
render('wickham-mark.svg', 'social/avatar-512.png', 512);
render('wickham-mark.svg', 'social/avatar-400.png', 400);
render('wickham-og.svg', 'social/og-image-1200x630.png', 1200);

// ---------- favicon.ico ----------
const ico = await pngToIco([
  Buffer.from(readFileSync(new URL('web/favicon-16.png', ROOT))),
  Buffer.from(readFileSync(new URL('web/favicon-32.png', ROOT))),
  Buffer.from(readFileSync(new URL('web/favicon-48.png', ROOT))),
]);
writeFileSync(new URL('web/favicon.ico', ROOT), ico);
console.log(`web/favicon.ico               16/32/48  ${ico.length} bytes`);

console.log('\nDone.');
