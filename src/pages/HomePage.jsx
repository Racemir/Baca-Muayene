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
import HomeFaq from '../components/Common/HomeFaq';
import { getStaticSeo } from '../seo/routes';
import { homeGraphSchema } from '../seo/schema';
import { absUrl } from '../seo/site';

export default function HomePage({ onOpenAppointment, onSelectService }) {
  const homeSeo = getStaticSeo('/');

  return (
    <div className="home-page-layout">
      <SeoHead
        title={homeSeo.title}
        description={homeSeo.description}
        keywords={homeSeo.keywords}
        canonicalUrl={absUrl('/')}
        schemaData={homeGraphSchema()}
      />
      
      {/* 1. ÜST SABİT NAVİGASYON */}
      <Navbar onOpenAppointment={onOpenAppointment} />

      {/* 2. ANA İÇERİK AKIŞI */}
      <main>
        {/* Karşılama Alanı (Hero) */}
        <HeroSection onOpenAppointment={onOpenAppointment} />

        {/* 3'lü Hizmet Kartları */}
        <ServicesCards onSelectService={onSelectService} />

        <CorporatePreview />
        <HomeFaq />
      </main>

      {/* 3. ALT BİLGİ VE İLETİŞİM */}
      <Footer onOpenAppointment={onOpenAppointment} />

    </div>
  );
}
