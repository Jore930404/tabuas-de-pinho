import { readFileSync } from 'node:fs';

const pages = ['dist/index.html', 'dist/es/index.html'];
const base = 'http://127.0.0.1:4321';

for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const dupes = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
  const anchors = [...html.matchAll(/href="#([^"]+)"/g)].map((m) => m[1]);
  const missingAnchors = [...new Set(anchors.filter((a) => !ids.includes(a)))];

  const assets = new Set();
  for (const m of html.matchAll(/<img[^>]+src="([^"]+)"/g)) assets.add(m[1]);
  for (const m of html.matchAll(/srcset="([^"]+)"/g)) {
    for (const part of m[1].split(',')) {
      const url = part.trim().split(/\s+/)[0];
      if (url) assets.add(url);
    }
  }
  for (const m of html.matchAll(/<link[^>]+href="(\/[^"]+\.(?:css|svg|png|jpg))"/g)) assets.add(m[1]);

  const broken = [];
  for (const asset of assets) {
    const res = await fetch(base + asset, { method: 'HEAD' });
    if (!res.ok) broken.push(`${res.status} ${asset}`);
  }

  console.log(`\n=== ${page} ===`);
  console.log(`ids=${ids.length} anchors=${anchors.length} assets=${assets.size}`);
  console.log(`duplicate ids: ${dupes.length ? dupes.join(', ') : 'none'}`);
  console.log(`missing anchors: ${missingAnchors.length ? missingAnchors.join(', ') : 'none'}`);
  console.log(`broken assets: ${broken.length ? broken.join(' | ') : 'none'}`);
}
