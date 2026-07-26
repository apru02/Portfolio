import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  DEFAULT_IMAGE,
  SITE_URL,
  buildStructuredData,
  getRouteMetadata,
  routeMetadata,
} from '../src/seo/siteMetadata.mjs';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const distDirectory = join(projectRoot, 'dist');
const ssrDirectory = join(projectRoot, 'dist-ssr');
const template = await readFile(join(distDirectory, 'index.html'), 'utf8');
const { render } = await import(
  `${new URL('../dist-ssr/entry-server.mjs', import.meta.url).href}?v=${Date.now()}`
);

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

const replaceMeta = (html, attribute, value, content) => {
  const expression = new RegExp(
    `<meta(?=[^>]*${attribute}=["']${value}["'])[^>]*>`,
    'i',
  );
  const tag = `<meta ${attribute}="${value}" content="${escapeHtml(content)}">`;

  if (expression.test(html)) {
    return html.replace(expression, tag);
  }

  return html.replace('</head>', `    ${tag}\n  </head>`);
};

const renderDocument = (path, appHtml) => {
  const metadata = getRouteMetadata(path);
  const canonicalUrl = `${SITE_URL}${path === '/' ? '/' : path}`;
  const robots = metadata.noIndex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large';
  let html = template.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${appHtml}</div>`,
  );

  html = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(metadata.title)}</title>`,
  );
  html = html.replace(
    /<link(?=[^>]*rel=["']canonical["'])[^>]*>/i,
    `<link rel="canonical" href="${canonicalUrl}">`,
  );
  html = replaceMeta(html, 'name', 'description', metadata.description);
  html = replaceMeta(html, 'name', 'robots', robots);
  html = replaceMeta(html, 'property', 'og:title', metadata.title);
  html = replaceMeta(
    html,
    'property',
    'og:description',
    metadata.description,
  );
  html = replaceMeta(html, 'property', 'og:url', canonicalUrl);
  html = replaceMeta(html, 'property', 'og:image', DEFAULT_IMAGE);
  html = replaceMeta(html, 'name', 'twitter:title', metadata.title);
  html = replaceMeta(
    html,
    'name',
    'twitter:description',
    metadata.description,
  );
  html = replaceMeta(html, 'name', 'twitter:image', DEFAULT_IMAGE);

  const structuredData = JSON.stringify(buildStructuredData(path)).replaceAll(
    '<',
    '\\u003c',
  );
  html = html.replace(
    '</head>',
    `    <script type="application/ld+json" data-seo-structured-data>${structuredData}</script>\n  </head>`,
  );

  return html;
};

for (const path of Object.keys(routeMetadata)) {
  const appHtml = render(path);
  const outputPath =
    path === '/'
      ? join(distDirectory, 'index.html')
      : join(distDirectory, `${path.slice(1)}.html`);

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, renderDocument(path, appHtml));
}

const notFoundHtml = template
  .replace(
    /<title>[\s\S]*?<\/title>/i,
    '<title>Page not found | Apratim Dutta</title>',
  )
  .replace(
    /<meta(?=[^>]*name=["']robots["'])[^>]*>/i,
    '<meta name="robots" content="noindex, nofollow">',
  )
  .replace(
    /<div id="root"><\/div>/,
    '<div id="root"><main style="max-width:760px;margin:10vh auto;padding:2rem;font-family:system-ui"><h1>Page not found</h1><p>The requested page does not exist.</p><p><a href="/">Return to Apratim Dutta’s portfolio</a></p></main></div>',
  );

await writeFile(join(distDirectory, '404.html'), notFoundHtml);
await rm(ssrDirectory, { recursive: true, force: true });

console.log(
  `Prerendered ${Object.keys(routeMetadata).length} routes with unique metadata and structured data.`,
);
