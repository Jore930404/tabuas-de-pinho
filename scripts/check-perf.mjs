import { readFileSync, statSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const html = readFileSync('dist/index.html', 'utf8');
const canonical = (html.match(/rel="canonical" href="([^"]+)"/) ?? [])[1];
const externalCss = (html.match(/_astro\/[^"']+\.css/g) ?? []).length;
const inlineStyles = (html.match(/<style>/g) ?? []).length;
const fontAsync = html.includes('media="print"');
const heroPreload = html.includes('aparador-1280.webp');
const cssSize = (html.match(/<style>([\s\S]*?)<\/style>/) ?? [])[1]?.length ?? 0;

function dirSize(dir) {
  let total = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) total += dirSize(path);
    else total += statSync(path).size;
  }
  return total;
}

console.log({
  canonical,
  externalCss,
  inlineStyles,
  inlineCssBytes: cssSize,
  fontAsync,
  heroPreload,
  htmlBytes: html.length,
  distMB: +(dirSize('dist') / 1024 / 1024).toFixed(2),
});
