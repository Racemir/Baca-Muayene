/* ==========================================================================
   BACA RAPOR - ÇOKLU EKRAN ANA UYGULAMA BİLEŞENİ (APP.JSX)
   Açıklama: React Router ile yönetilen çoklu ekran (multi-screen) yapısı.
   Sayfalar:
   1. / -> Ana Sayfa (HomePage: Hero, Hizmetler, Kurumsal Önizleme, Footer)
   2. /kurumsal -> Bağımsız Kurumsal Portalı (CorporatePage: Hakkımızda,
      Misyon & Vizyon, 6 Aşamalı Kalite Kontrol İnfografiği)
   ========================================================================== */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/Common/ScrollToTop';
import HomePage from './pages/HomePage';
import CorporatePage from './pages/CorporatePage';
import LeakageTestPage from './pages/services/LeakageTestPage';
import PeriodicInspectionPage from './pages/services/PeriodicInspectionPage';
import ProjectCompliancePage from './pages/services/ProjectCompliancePage';
import CitiesPage from './pages/CitiesPage';
import CityDetailPage from './pages/CityDetailPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  // =========================================================================
  // WHATSAPP YÖNLENDİRME AYARLARI
  // =========================================================================
  const WHATSAPP_PHONE = '905367068125';

  const handleOpenWhatsApp = (customMessage) => {
    const defaultMsg = 'Merhaba, Baca Rapor web siteniz üzerinden ulaşıyorum. Baca kontrolü ve muayene hizmetleriniz için bilgi ve randevu almak istiyorum.';
    const textToSend = customMessage || defaultMsg;
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(textToSend)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleOpenAppointment = () => {
    handleOpenWhatsApp();
  };

  const handleSelectService = (service) => {
    handleOpenWhatsApp(`Merhaba, "${service.title}" hizmetiniz hakkında detaylı bilgi ve randevu almak istiyorum.`);
  };

  return (
    <BrowserRouter>
      {/* Sayfa değişimlerinde ve çapa linklerinde tepeye kaydırıcı */}
      <ScrollToTop />
      
      <Routes>
        {/* 1. EKRAN: ANA SAYFA */}
        <Route 
          path="/" 
          element={
            <HomePage 
              onOpenAppointment={handleOpenAppointment}
              onSelectService={handleSelectService}
            />
          } 
        />

        {/* 2. EKRAN: BAĞIMSIZ KURUMSAL SAYFASI (HAKKIMIZDA, MİSYON/VİZYON, KALİTE KONTROL) */}
        <Route 
          path="/kurumsal" 
          element={
            <CorporatePage 
              onOpenAppointment={handleOpenAppointment}
            />
          } 
        />

        {/* 3. EKRANLAR: 3 AYRI HİZMET DETAY SAYFALARI */}
        {/* 1. Sayfa: Baca Sızdırmazlık Testi */}
        <Route 
          path="/hizmetler/baca-sizdirmazlik-testi" 
          element={
            <LeakageTestPage 
              onOpenAppointment={handleOpenAppointment}
            />
          } 
        />

        {/* 2. Sayfa: Periyodik Baca Kontrolleri */}
        <Route 
          path="/hizmetler/periyodik-baca-kontrolleri" 
          element={
            <PeriodicInspectionPage 
              onOpenAppointment={handleOpenAppointment}
            />
          } 
        />

        {/* 3. Sayfa: Proje ve Montaj Uygunluk Muayenesi */}
        <Route 
          path="/hizmetler/proje-ve-montaj-uygunluk-muayenesi" 
          element={
            <ProjectCompliancePage 
              onOpenAppointment={handleOpenAppointment}
            />
          } 
        />

        {/* /hizmetler ana rotası için sızdırmazlık sayfasına yönlendirme */}
        <Route 
          path="/hizmetler" 
          element={<Navigate to="/hizmetler/baca-sizdirmazlik-testi" replace />} 
        />

        {/* 4. EKRAN: HİZMET BÖLGELERİMİZ (81 İL VİTRİNİ) */}
        <Route 
          path="/iller" 
          element={
            <CitiesPage 
              onOpenAppointment={handleOpenAppointment}
            />
          } 
        />

        {/* 5. EKRAN: İL DETAY SAYFASI (ÖRN: /iller/ankara, /iller/istanbul) */}
        <Route 
          path="/iller/:citySlug" 
          element={
            <CityDetailPage 
              onOpenAppointment={handleOpenAppointment}
            />
          } 
        />

        <Route
          path="*"
          element={<NotFoundPage onOpenAppointment={handleOpenAppointment} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
