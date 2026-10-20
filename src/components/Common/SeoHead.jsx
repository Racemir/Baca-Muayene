/* ==========================================================================
   BİLEŞEN: DİNAMİK SEO VE YAPILANDIRILMIŞ VERİ
   Title, description, canonical, robots, Open Graph, Twitter Card,
   hreflang ve Schema.org JSON-LD tek yerden güncellenir.
   ========================================================================== */

import { useEffect } from 'react';
import { SITE } from '../../seo/site';

function upsertMeta(selector, attributes) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => {
      if (key !== 'content') el.setAttribute(key, value);
    });
    document.head.appendChild(el);
  }
  if (attributes.content != null) {
    el.setAttribute('content', attributes.content);
  }
  return el;
}

function upsertLink(rel, href, extra = {}) {
  const extraKey = extra.hreflang ? `[hreflang="${extra.hreflang}"]` : '';
  let el = document.querySelector(`link[rel="${rel}"]${extraKey}`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (extra.hreflang) el.setAttribute('hreflang', extra.hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function SeoHead({
  title,
  description,
  canonicalUrl,
  keywords,
  schemaData,
  noindex = false,
  ogType = 'website',
  image = SITE.ogImage,
}) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const robots = noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    upsertMeta('meta[name="robots"]', { name: 'robots', content: robots });
    upsertMeta('meta[name="googlebot"]', { name: 'googlebot', content: robots });

    if (description) {
      upsertMeta('meta[name="description"]', { name: 'description', content: description });
    }

    if (keywords) {
      upsertMeta('meta[name="keywords"]', { name: 'keywords', content: keywords });
    }

    upsertMeta('meta[name="author"]', { name: 'author', content: SITE.name });
    upsertMeta('meta[name="theme-color"]', { name: 'theme-color', content: SITE.themeColor });
    upsertMeta('meta[name="geo.region"]', { name: 'geo.region', content: 'TR' });
    upsertMeta('meta[name="geo.placename"]', { name: 'geo.placename', content: SITE.foundingLocation });

    if (canonicalUrl) {
      upsertLink('canonical', canonicalUrl);
      upsertLink('alternate', canonicalUrl, { hreflang: 'tr' });
      upsertLink('alternate', canonicalUrl, { hreflang: 'x-default' });
    }

    const setOg = (property, content) => {
      if (!content) return;
      upsertMeta(`meta[property="${property}"]`, { property, content });
    };
    const setName = (name, content) => {
      if (!content) return;
      upsertMeta(`meta[name="${name}"]`, { name, content });
    };

    setOg('og:title', title);
    setOg('og:description', description);
    setOg('og:url', canonicalUrl);
    setOg('og:type', ogType);
    setOg('og:site_name', SITE.name);
    setOg('og:locale', SITE.locale);
    setOg('og:image', image);
    setOg('og:image:alt', SITE.ogImageAlt);
    setOg('og:image:width', '1200');
    setOg('og:image:height', '630');

    setName('twitter:card', 'summary_large_image');
    setName('twitter:title', title);
    setName('twitter:description', description);
    setName('twitter:image', image);
    setName('twitter:image:alt', SITE.ogImageAlt);

    const schemaScriptId = 'dynamic-seo-schema-ld';
    let schemaScript = document.getElementById(schemaScriptId);
    if (schemaData) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = schemaScriptId;
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaData);
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [title, description, canonicalUrl, keywords, schemaData, noindex, ogType, image]);

  return null;
}
