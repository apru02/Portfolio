import { access, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  SITE_URL,
  routeMetadata,
} from '../src/seo/siteMetadata.mjs';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const distDirectory = join(projectRoot, 'dist');
const failures = [];

const getOutputPath = (path) =>
  path === '/'
    ? join(distDirectory, 'index.html')
    : join(distDirectory, `${path.slice(1)}.html`);

for (const [path, metadata] of Object.entries(routeMetadata)) {
  const outputPath = getOutputPath(path);

  try {
    await access(outputPath);
  } catch {
    failures.push(`${path}: missing prerendered HTML`);
    continue;
  }

  const html = await readFile(outputPath, 'utf8');
  const canonicalUrl = `${SITE_URL}${path === '/' ? '/' : path}`;
  const title = html
    .match(/<title>([\s\S]*?)<\/title>/i)?.[1]
    ?.replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'");
  const canonical = html.match(
    /<link(?=[^>]*rel=["']canonical["'])[^>]*href=["']([^"']+)["'][^>]*>/i,
  )?.[1];
  const description = html.match(
    /<meta(?=[^>]*name=["']description["'])[^>]*content=["']([^"']+)["'][^>]*>/i,
  )?.[1];
  const hasEmptyRoot = /<div id="root">\s*<\/div>/i.test(html);
  const structuredData = html.match(
    /<script type="application\/ld\+json" data-seo-structured-data>([\s\S]*?)<\/script>/i,
  )?.[1];

  if (title !== metadata.title) {
    failures.push(`${path}: title does not match route metadata`);
  }
  if (canonical !== canonicalUrl) {
    failures.push(`${path}: canonical is missing or incorrect`);
  }
  if (!description) {
    failures.push(`${path}: description is missing`);
  }
  if (hasEmptyRoot) {
    failures.push(`${path}: prerendered root is empty`);
  }
  if (!metadata.noIndex && !/<h1[\s>]/i.test(html)) {
    failures.push(`${path}: indexable document has no H1`);
  }

  try {
    JSON.parse(structuredData);
  } catch {
    failures.push(`${path}: structured data is missing or invalid JSON`);
  }
}

for (const requiredFile of ['robots.txt', 'sitemap.xml', 'og.png', '404.html']) {
  try {
    await access(join(distDirectory, requiredFile));
  } catch {
    failures.push(`/${requiredFile}: missing build artifact`);
  }
}

if (failures.length) {
  console.error(`SEO verification failed:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log(
  `SEO verification passed for ${Object.keys(routeMetadata).length} routes.`,
);
