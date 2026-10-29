import { readFileSync } from 'node:fs';

for (const file of ['dist/index.html', 'dist/es/index.html']) {
  const html = readFileSync(file, 'utf8');
  const h1 = html
    .match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const lang = html.match(/<html lang="([^"]+)"/)[1];
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)[1];
  const alternates = [...html.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)]
    .map((m) => `${m[1]}=${m[2]}`)
    .join(' | ');

  console.log(file, `lang=${lang}`, `canonical=${canonical}`);
  console.log('  h1=' + JSON.stringify(h1));
  console.log('  ' + alternates);
}
