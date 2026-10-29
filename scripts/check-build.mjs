import { readFileSync } from 'node:fs';

const html = readFileSync('dist/index.html', 'utf8');
const es = readFileSync('dist/es/index.html', 'utf8');
const pick = (s, re) => (s.match(re) ?? [])[1] ?? '(none)';

console.log('PT canonical:', pick(html, /rel="canonical" href="([^"]+)"/));
console.log('PT og:image:', pick(html, /property="og:image" content="([^"]+)"/));
console.log('PT hreflang es:', pick(html, /hreflang="es" href="([^"]+)"/));
console.log('ES canonical:', pick(es, /rel="canonical" href="([^"]+)"/));
console.log('gallery pieces PT:', (html.match(/class="piece reveal"/g) ?? []).length);
console.log('gallery pieces ES:', (es.match(/class="piece reveal"/g) ?? []).length);
console.log('\nrobots.txt:\n' + readFileSync('dist/robots.txt', 'utf8'));
console.log('sitemap first loc:', pick(readFileSync('dist/sitemap.xml', 'utf8'), /<loc>([^<]+)<\/loc>/));
