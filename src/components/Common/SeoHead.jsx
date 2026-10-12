/* ==========================================================================
   BİLEŞEN: DİNAMİK SEO VE YAPILANDIRILMIŞ VERİ YÖNETİCİSİ (SEOHEAD.JSX)
   Açıklama: Her sayfa için dinamik <title>, <meta description>, canonical URL
   ve Schema.org JSON-LD yapılandırılmış verisini yönetir.
   Arama motorlarının (Googlebot vb.) sayfaları doğru indekslemesini sağlar.
   ========================================================================== */

import { useEffect } from 'react';

export default function SeoHead({
  title,
  description,
  canonicalUrl,
  keywords,
  schemaData,
}) {
  useEffect(() => {
    // 1. Sayfa Başlığı
    if (title) {
      document.title = title;
    }

    // 2. Meta Açıklama (Description)
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    // 3. Meta Anahtar Kelimeler (Keywords)
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // 4. Canonical Bağlantısı
    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonicalUrl);
    }

    // 5. Open Graph Meta Etiketleri (Sosyal Medya ve WhatsApp Paylaşımı)
    const updateOgMeta = (property, content) => {
      if (!content) return;
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    if (title) updateOgMeta('og:title', title);
    if (description) updateOgMeta('og:description', description);
    if (canonicalUrl) updateOgMeta('og:url', canonicalUrl);
    updateOgMeta('og:type', 'website');
    updateOgMeta('og:site_name', 'Baca Rapor');

    // 6. Schema.org JSON-LD Yapılandırılmış Veri
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

    return () => {
      // Bileşen unmount olduğunda temizleme opsiyoneldir
    };
  }, [title, description, canonicalUrl, keywords, schemaData]);

  return null;
}
