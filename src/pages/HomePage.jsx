/* ==========================================================================
   SAYFA: ANA SAYFA (HOMEPAGE.JSX)
   Açıklama: Web sitesinin ana karşılama ekranı.
   Bölümler:
   1. Navbar (Sabit üst bar)
   2. HeroSection (Büyük sinematik fotoğraf, "Güvenli Nefes Yasal Uygunluk", Randevu Al)
   3. ServicesCards (3'lü Kaf Technology tarzı hizmet kartları)
   4. CorporatePreview (Kurumsal özet, sinematik görsel ve "Kurumsal Sayfamıza Geçin" butonu)
   5. Footer (Alt bilgi ve iletişim)
   ========================================================================== */

import React from 'react';
import Navbar from '../components/Header/Navbar';
import HeroSection from '../components/Hero/HeroSection';
import ServicesCards from '../components/Services/ServicesCards';
import CorporatePreview from '../components/About/CorporatePreview';
import Footer from '../components/Footer/Footer';
import SeoHead from '../components/Common/SeoHead';

export default function HomePage({ onOpenAppointment, onSelectService }) {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bacaraporu.com.tr/#organization",
        "name": "Baca Raporu",
        "alternateName": "İstanbul İGDAŞ Baca Raporu",
        "url": "https://bacaraporu.com.tr",
        "logo": "https://bacaraporu.com.tr/favicon.svg",
        "telephone": "+905367068125",
        "email": "istanbulbacaraporu@gmail.com",
        "sameAs": [
          "https://share.google/FlGwC154l0NluMoQO"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://bacaraporu.com.tr/#localbusiness",
        "name": "İstanbul İGDAŞ Baca Raporu",
        "url": "https://bacaraporu.com.tr",
        "image": "https://bacaraporu.com.tr/favicon.svg",
        "telephone": "+905367068125",
        "email": "istanbulbacaraporu@gmail.com",
        "priceRange": "$$",
        "hasMap": "https://share.google/FlGwC154l0NluMoQO",
        "sameAs": [
          "https://share.google/FlGwC154l0NluMoQO"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "İstanbul",
          "addressCountry": "TR"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "İstanbul"
          },
          {
            "@type": "Country",
            "name": "Türkiye"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://bacaraporu.com.tr/#website",
        "url": "https://bacaraporu.com.tr",
        "name": "Baca Raporu",
        "publisher": {
          "@id": "https://bacaraporu.com.tr/#organization"
        }
      }
    ]
  };

  return (
    <div className="home-page-layout">
      {/* Ana Sayfa SEO Meta Bilgileri */}
      <SeoHead
        title="Baca Raporu | Yetkili Baca Sızdırmazlık Testi ve Uygunluk Raporu"
        description="Yetkili baca raporu, baca sızdırmazlık testi ve doğalgaz baca uygunluk muayenesi. 81 ilde gaz dağıtım onaylı, akredite ve hızlı baca raporu hizmeti."
        keywords="baca raporu, baca sızdırmazlık testi, doğalgaz baca raporu, baca uygunluk belgesi, baca muayenesi, akredite baca kontrolü"
        canonicalUrl="https://bacaraporu.com.tr/"
        schemaData={homeSchema}
      />
      
      {/* 1. ÜST SABİT NAVİGASYON */}
      <Navbar onOpenAppointment={onOpenAppointment} />

      {/* 2. ANA İÇERİK AKIŞI */}
      <main>
        {/* Karşılama Alanı (Hero) */}
        <HeroSection onOpenAppointment={onOpenAppointment} />

        {/* 3'lü Hizmet Kartları */}
        <ServicesCards onSelectService={onSelectService} />

        {/* Kurumsal Özet ve /kurumsal Sayfasına Geçiş Vitrini */}
        <CorporatePreview />
      </main>

      {/* 3. ALT BİLGİ VE İLETİŞİM */}
      <Footer onOpenAppointment={onOpenAppointment} />

    </div>
  );
}
