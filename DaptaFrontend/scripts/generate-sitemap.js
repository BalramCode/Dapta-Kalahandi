import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const { ROUTES_SEO } = await import(`file://${path.resolve(projectRoot, 'src', 'seo', 'routesSeo.js')}`);

const siteUrlArg = process.argv[2] || process.env.VITE_SITE_URL || process.env.SITE_URL;

const routes = Object.keys(ROUTES_SEO);

function getRoutePriority(route) {
  if (route === '/') return '1.0';
  if (route.startsWith('/about') || route.startsWith('/activities')) return '0.8';
  if (route.startsWith('/reports') || route.startsWith('/get-involved')) return '0.7';
  if (route === '/contact') return '0.8';
  if (route.startsWith('/gallery')) return '0.6';
  return '0.5';
}

function getRouteFreq(route) {
  if (route === '/') return 'weekly';
  if (route.startsWith('/activities') || route.startsWith('/reports')) return 'monthly';
  if (route.startsWith('/gallery')) return 'monthly';
  return 'monthly';
}

export function generateSitemapXml(baseUrl) {
  const today = new Date().toISOString().split('T')[0];
  const domain = baseUrl ? baseUrl.replace(/\/+$/, '') : 'https://YOUR_PRODUCTION_DOMAIN';

  const xmlEntries = routes.map((route) => {
    const loc = `${domain}${route === '/' ? '' : route}`;
    const priority = getRoutePriority(route);
    const changefreq = getRouteFreq(route);
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>
`;
}

if (siteUrlArg) {
  const xml = generateSitemapXml(siteUrlArg);
  const publicDest = path.resolve(projectRoot, 'public', 'sitemap.xml');
  fs.writeFileSync(publicDest, xml, 'utf-8');
  console.log(`Generated sitemap with domain "${siteUrlArg}" at ${publicDest}`);

  // Also write to dist/sitemap.xml if dist exists
  const distDest = path.resolve(projectRoot, 'dist', 'sitemap.xml');
  if (fs.existsSync(path.resolve(projectRoot, 'dist'))) {
    fs.writeFileSync(distDest, xml, 'utf-8');
    console.log(`Copied sitemap to ${distDest}`);
  }

  // Update robots.txt sitemap reference if domain provided
  const robotsPath = path.resolve(projectRoot, 'public', 'robots.txt');
  if (fs.existsSync(robotsPath)) {
    let robots = fs.readFileSync(robotsPath, 'utf-8');
    const sitemapLine = `Sitemap: ${siteUrlArg.replace(/\/+$/, '')}/sitemap.xml`;
    if (!robots.includes('Sitemap:')) {
      robots += `\n${sitemapLine}\n`;
    } else {
      robots = robots.replace(/#?\s*Sitemap:.*$/m, sitemapLine);
    }
    fs.writeFileSync(robotsPath, robots, 'utf-8');
    console.log(`Updated robots.txt with sitemap directive.`);
  }
} else {
  // Generate template sitemap with placeholder
  const placeholderXml = generateSitemapXml('');
  const publicDest = path.resolve(projectRoot, 'public', 'sitemap.xml');
  fs.writeFileSync(publicDest, placeholderXml, 'utf-8');
  console.log(`Generated placeholder sitemap at ${publicDest}`);
  console.log('Run with domain: "node scripts/generate-sitemap.js https://<production-domain>" to finalize.');
}
