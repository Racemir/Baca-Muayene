/* ==========================================================================
   SEO: SİTE SABİTLERİ
   Tek kaynak: canonical, Open Graph, JSON-LD ve sitemap aynı adresi kullanır.
   ========================================================================== */

export const SITE = {
  url: 'https://bacaraporu.com.tr',
  name: 'Baca Raporu',
  alternateName: 'İstanbul İGDAŞ Baca Raporu',
  locale: 'tr_TR',
  language: 'tr',
  phone: '+905367068125',
  phoneDisplay: '0 (536) 706 81 25',
  email: 'istanbulbacaraporu@gmail.com',
  mapUrl: 'https://share.google/FlGwC154l0NluMoQO',
  ogImage: 'https://bacaraporu.com.tr/og-cover.webp',
  ogImageAlt: 'Baca Raporu — yetkili baca sızdırmazlık testi ve uygunluk raporu',
  logo: 'https://bacaraporu.com.tr/favicon.svg',
  themeColor: '#050505',
  areaServed: 'Türkiye',
  foundingLocation: 'İstanbul',
};

export const PRIORITY_CITY_SLUGS = {
  istanbul: 0.95,
  ankara: 0.9,
  izmir: 0.9,
  bursa: 0.88,
  antalya: 0.86,
  kocaeli: 0.86,
  gaziantep: 0.84,
  konya: 0.84,
  adana: 0.84,
};

export function absUrl(path = '/') {
  if (!path || path === '/') return `${SITE.url}/`;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}

export function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}
