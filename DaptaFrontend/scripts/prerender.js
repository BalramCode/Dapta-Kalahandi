import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const distPath = path.resolve(projectRoot, 'dist');
const templatePath = path.resolve(distPath, 'index.html');
const ssrBundlePath = path.resolve(projectRoot, 'dist-ssr', 'entry-server.js');

if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Run "vite build" first.');
  process.exit(1);
}

if (!fs.existsSync(ssrBundlePath)) {
  console.error('Error: dist-ssr/entry-server.js not found. Run SSR build first.');
  process.exit(1);
}

// Dynamically import SSR bundle and routes
const { render } = await import(`file://${ssrBundlePath}`);
const { ROUTES_SEO, DEFAULT_SEO, normalizePath } = await import(`file://${path.resolve(projectRoot, 'src', 'seo', 'routesSeo.js')}`);

const templateHtml = fs.readFileSync(templatePath, 'utf-8');

// Optional site URL from environment or argument (do not invent if not provided)
const siteUrl = process.env.VITE_SITE_URL || process.env.SITE_URL || '';

const routesToPrerender = Object.keys(ROUTES_SEO);

console.log(`Prerendering ${routesToPrerender.length} public routes...`);

let successCount = 0;

for (const route of routesToPrerender) {
  try {
    const seo = ROUTES_SEO[route] || DEFAULT_SEO;
    const title = seo.title || DEFAULT_SEO.title;
    const description = seo.description || DEFAULT_SEO.description;
    const ogType = seo.ogType || DEFAULT_SEO.ogType;
    const image = seo.image || DEFAULT_SEO.image;

    // Render React tree to static HTML
    const appHtml = render(route);

    let pageHtml = templateHtml;

    // 1. Replace Title
    pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);

    // 2. Replace or update Meta Description
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']description["'][^>]*>/i,
      `<meta name="description" content="${description.replace(/"/g, '&quot;')}" />`
    );

    // 3. Replace or update OG Title and Description
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:title["'][^>]*>/i,
      `<meta property="og:title" content="${title.replace(/"/g, '&quot;')}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:description["'][^>]*>/i,
      `<meta property="og:description" content="${description.replace(/"/g, '&quot;')}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:type["'][^>]*>/i,
      `<meta property="og:type" content="${ogType}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:image["'][^>]*>/i,
      `<meta property="og:image" content="${image}" />`
    );

    // 4. Replace or update Twitter Cards
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']twitter:title["'][^>]*>/i,
      `<meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']twitter:description["'][^>]*>/i,
      `<meta name="twitter:description" content="${description.replace(/"/g, '&quot;')}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']twitter:image["'][^>]*>/i,
      `<meta name="twitter:image" content="${image}" />`
    );

    // 5. Canonical URL & OG URL (only if a valid siteUrl was explicitly provided)
    if (siteUrl && siteUrl.startsWith('http')) {
      const canonicalUrl = `${siteUrl.replace(/\/+$/, '')}${route === '/' ? '' : route}`;
      const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" />\n  <meta property="og:url" content="${canonicalUrl}" />`;
      if (!pageHtml.includes('rel="canonical"')) {
        pageHtml = pageHtml.replace('</head>', `  ${canonicalTag}\n</head>`);
      }
    }

    // 6. Inject prerendered App HTML inside #root
    pageHtml = pageHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // 7. Write to dist/<route>/index.html
    const normalized = normalizePath(route);
    let targetFile;
    if (normalized === '/') {
      targetFile = path.resolve(distPath, 'index.html');
    } else {
      const targetDir = path.resolve(distPath, normalized.replace(/^\/+/, ''));
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      targetFile = path.resolve(targetDir, 'index.html');
    }

    fs.writeFileSync(targetFile, pageHtml, 'utf-8');
    successCount++;
  } catch (err) {
    console.error(`Error prerendering route "${route}":`, err);
  }
}

console.log(`Successfully prerendered ${successCount}/${routesToPrerender.length} routes into dist/`);
