import { PRIORITY_CITY_SLUGS, absUrl } from './site.js';

export const STATIC_SEO_ROUTES = [
  {
    path: '/',
    title: 'Baca Raporu | Sızdırmazlık Testi ve Gaz Açımı',
    description:
      'Baca raporu ve sızdırmazlık testi. 81 ilde gaz açımı için yetkili doğalgaz baca uygunluk muayenesi, aynı gün saha ve resmi rapor.',
    keywords:
      'baca raporu, baca sızdırmazlık testi, doğalgaz baca raporu, baca uygunluk belgesi, baca muayenesi, İGDAŞ baca raporu',
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    path: '/kurumsal',
    title: 'Kurumsal | Baca Muayene Standartları | Baca Raporu',
    description:
      'Baca Raporu kurumsal yapı: TS EN ISO/IEC 17020 kalite ilkeleri, 6 aşamalı kontrol, bağımsız muayene ve saha hazırlık kılavuzu.',
    keywords:
      'baca raporu kurumsal, ts en iso 17020, baca kontrol standartları, baca muayene kalite prosedürü',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    path: '/hizmetler/baca-sizdirmazlik-testi',
    title: 'Baca Sızdırmazlık Testi | Basınç Kaçak Raporu',
    description:
      'EN 1443 ve TS EN 13384’e göre baca sızdırmazlık testi. Dijital manometre ile gaz açımına uygun resmi kaçak ve basınç raporu.',
    keywords:
      'baca sızdırmazlık testi, baca basınç testi, baca kaçak testi, EN 1443, doğalgaz baca sızdırmazlık raporu',
    changefreq: 'monthly',
    priority: 0.92,
  },
  {
    path: '/hizmetler/periyodik-baca-kontrolleri',
    title: 'Periyodik Baca Kontrolü | Robotik Kamera Muayenesi',
    description:
      'Yangın yönetmeliğine uygun yıllık baca kontrolü. 360° robotik kameralı kurum, çekiş ve tıkanıklık denetimi, fotoğraflı rapor.',
    keywords:
      'periyodik baca kontrolü, baca kamera kontrolü, periyodik baca muayene raporu, kazan dairesi baca muayenesi',
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: '/hizmetler/proje-ve-montaj-uygunluk-muayenesi',
    title: 'Baca Proje ve Montaj Uygunluk Muayenesi',
    description:
      'TS EN 13384 kesit hesabı, lazer çap ölçümü ve iskan için baca proje ile montaj uygunluk raporu.',
    keywords:
      'baca proje uygunluk muayenesi, baca kesit hesabı, TS EN 13384, iskan baca raporu, yapı kullanım baca uygunluk',
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: '/iller',
    title: '81 İl Baca Raporu | Türkiye Geneli Sızdırmazlık Testi',
    description:
      '81 ilde İGDAŞ, Başkentgaz, İzmirgaz ve diğer gaz dağıtımlarına uygun baca raporu ve sızdırmazlık testi. İlinizi seçin, randevu alın.',
    keywords:
      '81 il baca raporu, Türkiye baca raporu, yetkili baca raporu, gaz açım baca raporu, doğalgaz baca uygunluk belgesi',
    changefreq: 'weekly',
    priority: 0.9,
  },
];

export function getCitySeo(city) {
  const districtPreview = city.districts.slice(0, 3).join(', ');
  return {
    path: `/iller/${city.slug}`,
    title: `${city.name} Baca Raporu | Sızdırmazlık Testi`,
    description: `${city.name} ilinde ${city.gasCompany} gaz açımı için baca raporu ve sızdırmazlık testi. ${districtPreview} ve tüm ilçelerde saha hizmeti.`,
    keywords: `${city.name} baca raporu, ${city.name} baca sızdırmazlık testi, ${city.name} doğalgaz baca raporu, ${city.gasCompany} baca raporu, ${city.name} baca uygunluk belgesi`,
    changefreq: 'weekly',
    priority: PRIORITY_CITY_SLUGS[city.slug] || 0.75,
  };
}

export function withCanonical(route) {
  return {
    ...route,
    canonicalUrl: absUrl(route.path),
  };
}

export function getStaticSeo(path) {
  return STATIC_SEO_ROUTES.find((route) => route.path === path);
}
