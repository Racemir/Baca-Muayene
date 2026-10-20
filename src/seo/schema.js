import { SITE, absUrl } from './site.js';

export const HOME_FAQ = [
  {
    question: 'Baca raporu nedir ve ne işe yarar?',
    answer:
      'Baca raporu, doğalgazlı cihazların bağlı olduğu baca sisteminin sızdırmazlık, çekiş ve montaj uygunluğunun yetkili ekiplerce ölçüldüğünü belgeler. Gaz dağıtım kuruluşları gaz açımı ve periyodik kontrollerde bu raporu ister.',
  },
  {
    question: 'Baca sızdırmazlık testi zorunlu mudur?',
    answer:
      'Evet. Doğalgaz aboneliği, gaz açımı ve birçok gaz dağıtım şartnamesinde EN 1443 / TS EN 13384 esaslı sızdırmazlık testi ve resmi rapor zorunludur. Uygunsuz baca gaz kaçağı ve karbonmonoksit riski taşır.',
  },
  {
    question: 'Baca raporu ne kadar sürede teslim edilir?',
    answer:
      'Saha ölçümü genellikle aynı gün tamamlanır. Uygun bulunan tesislerde dijital ölçüm çıktılı resmi rapor, randevu yoğunluğuna göre aynı gün veya ertesi iş günü teslim edilir.',
  },
  {
    question: 'Hangi illerde baca raporu veriyorsunuz?',
    answer:
      'Türkiye genelinde 81 ilde hizmet veriyoruz. İstanbul İGDAŞ, Ankara Başkentgaz, İzmirgaz ve diğer gaz dağıtım kuruluşlarının şartnamelerine uygun saha kontrolü yapılır.',
  },
  {
    question: 'İGDAŞ baca raporu nasıl alınır?',
    answer:
      'İstanbul’da İGDAŞ gaz açımı için yetkili ekiplerimiz sızdırmazlık testi, görsel kontrol ve uygunluk raporunu hazırlar. Randevu için telefon veya WhatsApp üzerinden adres ve cihaz bilgisi yeterlidir.',
  },
];

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.alternateName,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: SITE.logo,
    },
    image: SITE.ogImage,
    telephone: SITE.phone,
    email: SITE.email,
    sameAs: [SITE.mapUrl],
    areaServed: {
      '@type': 'Country',
      name: 'Türkiye',
    },
  };
}

export function localBusinessSchema() {
  return {
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${SITE.url}/#localbusiness`,
    name: SITE.alternateName,
    url: SITE.url,
    image: SITE.ogImage,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: '$$',
    hasMap: SITE.mapUrl,
    sameAs: [SITE.mapUrl],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'İstanbul',
      addressRegion: 'İstanbul',
      addressCountry: 'TR',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'İstanbul' },
      { '@type': 'Country', name: 'Türkiye' },
    ],
    parentOrganization: { '@id': `${SITE.url}/#organization` },
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: 'tr-TR',
    publisher: { '@id': `${SITE.url}/#organization` },
  };
}

export function breadcrumbSchema(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqItems = HOME_FAQ) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema({ name, description, url, serviceType }) {
  return {
    '@type': 'Service',
    name,
    description,
    url,
    serviceType,
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: { '@type': 'Country', name: 'Türkiye' },
    brand: { '@id': `${SITE.url}/#organization` },
  };
}

export function homeGraphSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema(),
      localBusinessSchema(),
      websiteSchema(),
      faqSchema(),
      {
        '@type': 'WebPage',
        '@id': `${SITE.url}/#webpage`,
        url: absUrl('/'),
        name: 'Baca Raporu | Sızdırmazlık Testi ve Uygunluk',
        isPartOf: { '@id': `${SITE.url}/#website` },
        about: { '@id': `${SITE.url}/#organization` },
        inLanguage: 'tr-TR',
      },
    ],
  };
}

export function cityServiceSchema(city, canonicalUrl, description) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema([
        { name: 'Ana Sayfa', url: absUrl('/') },
        { name: 'Hizmet Bölgelerimiz', url: absUrl('/iller') },
        { name: `${city.name} Baca Raporu`, url: canonicalUrl },
      ]),
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: `${city.name} Baca Raporu ve Sızdırmazlık Testi`,
        description,
        url: canonicalUrl,
        serviceType: 'Baca raporu, sızdırmazlık testi ve uygunluk muayenesi',
        provider: { '@id': `${SITE.url}/#organization` },
        areaServed: {
          '@type': 'City',
          name: city.name,
        },
        audience: {
          '@type': 'Audience',
          geographicArea: {
            '@type': 'AdministrativeArea',
            name: city.name,
          },
        },
      },
    ],
  };
}
