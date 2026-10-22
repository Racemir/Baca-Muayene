import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { CITIES_DATA, getCityBySlug } from '../src/data/citiesData.js';
import { STATIC_SEO_ROUTES, getCitySeo, withCanonical } from '../src/seo/routes.js';
import {
  breadcrumbSchema,
  cityServiceSchema,
  homeGraphSchema,
  serviceSchema,
} from '../src/seo/schema.js';
import { SITE, absUrl, escapeHtml } from '../src/seo/site.js';

function getAllSeoRoutes() {
  const cityRoutes = CITIES_DATA.map((city) => getCitySeo(city));
  return [...STATIC_SEO_ROUTES, ...cityRoutes].map(withCanonical);
}

function buildSitemapXml() {
  const lastmod = SITE.contentLastmod;
  const urls = getAllSeoRoutes()
    .map(
      (route) => `  <url>
    <loc>${escapeHtml(route.canonicalUrl)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(2)}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function schemaForRoute(route) {
  if (route.path === '/') return homeGraphSchema();
  if (route.path.startsWith('/iller/') && route.path !== '/iller') {
    const slug = route.path.replace('/iller/', '');
    const city = getCityBySlug(slug);
    return cityServiceSchema(city, route.canonicalUrl, route.description);
  }
  if (route.path.startsWith('/hizmetler/')) {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        breadcrumbSchema([
          { name: 'Ana Sayfa', url: absUrl('/') },
          { name: route.title.split('|')[0].trim(), url: route.canonicalUrl },
        ]),
        serviceSchema({
          name: route.title.split('|')[0].trim(),
          description: route.description,
          url: route.canonicalUrl,
          serviceType: route.title.split('|')[0].trim(),
        }),
      ],
    };
  }
  return {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema([
        { name: 'Ana Sayfa', url: absUrl('/') },
        { name: route.title.split('|')[0].trim(), url: route.canonicalUrl },
      ]),
    ],
  };
}

function injectRouteSeo(html, route) {
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const canonical = escapeHtml(route.canonicalUrl);
  const keywords = escapeHtml(route.keywords);
  const image = escapeHtml(SITE.ogImage);

  let next = html;
  next = next.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  next = next.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${description}" />`
  );
  next = next.replace(
    /<meta name="keywords" content="[^"]*"\s*\/?>/,
    `<meta name="keywords" content="${keywords}" />`
  );
  next = next.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonical}" />`
  );
  next = next.replace(
    /<link rel="alternate" hreflang="tr" href="[^"]*"\s*\/?>/,
    `<link rel="alternate" hreflang="tr" href="${canonical}" />`
  );
  next = next.replace(
    /<link rel="alternate" hreflang="x-default" href="[^"]*"\s*\/?>/,
    `<link rel="alternate" hreflang="x-default" href="${canonical}" />`
  );

  const ogMap = {
    'og:title': title,
    'og:description': description,
    'og:url': canonical,
    'og:image': image,
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
  };

  for (const [key, value] of Object.entries(ogMap)) {
    const attr = key.startsWith('twitter:') ? 'name' : 'property';
    next = next.replace(
      new RegExp(`<meta ${attr}="${key}" content="[^"]*"\\s*\\/?>`),
      `<meta ${attr}="${key}" content="${value}" />`
    );
  }

  if (route.path !== '/') {
    next = next.replace(
      /<!-- homepage-lcp-preload -->[\s\S]*?<!-- \/homepage-lcp-preload -->\s*/,
      ''
    );
  }

  if (route.schema !== false) {
    const json = JSON.stringify(schemaForRoute(route));
    next = next.replace(
      /<script id="dynamic-seo-schema-ld" type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script id="dynamic-seo-schema-ld" type="application/ld+json">${json}</script>`
    );
  }

  return next;
}

function writeFileEnsured(filePath, contents) {
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, contents);
}

export function seoStaticPlugin() {
  let outDir = 'dist';

  return {
    name: 'baca-seo-static',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const sitemap = buildSitemapXml();
      writeFileSync(join(outDir, 'sitemap.xml'), sitemap);
      writeFileSync(join('public', 'sitemap.xml'), sitemap);

      const indexHtml = readFileSync(join(outDir, 'index.html'), 'utf8');
      const routes = getAllSeoRoutes();

      for (const route of routes) {
        const html = injectRouteSeo(indexHtml, route);
        if (route.path === '/') {
          writeFileSync(join(outDir, 'index.html'), html);
        } else {
          writeFileEnsured(join(outDir, route.path.replace(/^\//, ''), 'index.html'), html);
        }
      }

      const notFoundSeo = {
        title: 'Sayfa Bulunamadı | Baca Raporu',
        description: 'Aradığınız sayfa bulunamadı. Baca raporu ve sızdırmazlık testi hizmetlerimiz için ana sayfaya dönebilirsiniz.',
        keywords: 'baca raporu',
        canonicalUrl: absUrl('/'),
        schema: false,
      };
      let notFoundHtml = injectRouteSeo(indexHtml, notFoundSeo);
      notFoundHtml = notFoundHtml.replace(
        /<meta name="robots" content="[^"]*"\s*\/?>/,
        '<meta name="robots" content="noindex, follow" />'
      );
      writeFileSync(join(outDir, '404.html'), notFoundHtml);

      console.log(
        `[seo] sitemap + ${routes.length} statik rota HTML yazıldı (${CITIES_DATA.length} il).`
      );
    },
  };
}
