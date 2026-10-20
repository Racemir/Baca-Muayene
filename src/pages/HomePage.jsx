/* ==========================================================================
   SAYFA: ANA SAYFA (HOMEPAGE.JSX)
   ========================================================================== */

import React, { lazy, Suspense } from 'react';
import Navbar from '../components/Header/Navbar';
import HeroSection from '../components/Hero/HeroSection';
import SeoHead from '../components/Common/SeoHead';
import { getStaticSeo } from '../seo/routes';
import { homeGraphSchema } from '../seo/schema';
import { absUrl } from '../seo/site';

const ServicesCards = lazy(() => import('../components/Services/ServicesCards'));
const CorporatePreview = lazy(() => import('../components/About/CorporatePreview'));
const HomeFaq = lazy(() => import('../components/Common/HomeFaq'));
const Footer = lazy(() => import('../components/Footer/Footer'));

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
      
      <Navbar onOpenAppointment={onOpenAppointment} />

      <main>
        <HeroSection onOpenAppointment={onOpenAppointment} />
        <Suspense fallback={null}>
          <ServicesCards onSelectService={onSelectService} />
          <CorporatePreview />
          <HomeFaq />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer onOpenAppointment={onOpenAppointment} />
      </Suspense>
    </div>
  );
}
