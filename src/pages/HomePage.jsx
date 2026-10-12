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
        "@id": "https://bacarapor.com/#organization",
        "name": "Baca Rapor",
        "url": "https://bacarapor.com",
        "logo": "https://bacarapor.com/favicon.svg",
        "telephone": "+905367068125",
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "https://bacarapor.com/#website",
        "url": "https://bacarapor.com",
        "name": "Baca Rapor",
        "publisher": {
          "@id": "https://bacarapor.com/#organization"
        }
      }
    ]
  };

  return (
    <div className="home-page-layout">
      {/* Ana Sayfa SEO Meta Bilgileri */}
      <SeoHead
        title="Baca Rapor | Akredite Baca Sızdırmazlık Testi ve Muayene Raporu"
        description="Türkiye genelinde 81 ilde gaz açım onaylı baca sızdırmazlık testi, proje uygunluk muayenesi ve periyodik baca kontrol raporlama hizmetleri."
        keywords="baca kontrol, baca sızdırmazlık testi, baca muayene raporu, igdaş baca raporu, başkentgaz baca uygunluk, doğalgaz baca uygunluk"
        canonicalUrl="https://bacarapor.com/"
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
