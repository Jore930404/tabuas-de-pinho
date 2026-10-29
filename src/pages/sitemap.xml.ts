import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://tabuas-de-pinho.jlaffitteg.workers.dev');
  const pt = new URL('/', base).href;
  const es = new URL('/es/', base).href;

  const alternate = (href: string, lang: string) =>
    `<xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />`;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${pt}</loc>
    ${alternate(pt, 'pt-BR')}
    ${alternate(es, 'es')}
    ${alternate(pt, 'x-default')}
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${es}</loc>
    ${alternate(pt, 'pt-BR')}
    ${alternate(es, 'es')}
    ${alternate(pt, 'x-default')}
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
