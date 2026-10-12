/* ==========================================================================
   SAYFA: AYRI KURUMSAL EKRANI (CORPORATEPAGE.JSX)
   Açıklama: Kullanıcının talebi doğrultusunda üstteki mükerrer başlık alanı,
   tüm gereksiz geçiş butonları ve alt çubuklar kaldırılarak doğrudan
   ve sade bir biçimde Kurumsal akış sunuldu.
   ========================================================================== */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  Home
} from 'lucide-react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import SeoHead from '../components/Common/SeoHead';
import AboutStory from '../components/About/AboutStory';
import MissionVision from '../components/About/MissionVision';
import QualityControlInfographic from '../components/About/QualityControlInfographic';
import AccreditationCommitment from '../components/About/AccreditationCommitment';
import CustomerPrepGuide from '../components/About/CustomerPrepGuide';
import AppealsComplaintsProcedure from '../components/About/AppealsComplaintsProcedure';
import '../components/About/AboutSection.css';
import './CorporatePage.css';

export default function CorporatePage({ onOpenAppointment }) {
  const navigate = useNavigate();

  return (
    <div className="corporate-page-layout">
      {/* Kurumsal Sayfası SEO Tanımı */}
      <SeoHead
        title="Kurumsal | Akreditasyon & Muayene Standartlarımız - Baca Rapor"
        description="Baca Rapor hakkında: TS EN ISO/IEC 17020 akreditasyon vizyonu, 6 aşamalı kalite kontrol süreci ve bağımsız muayene prosedürleri."
        keywords="baca raporu kurumsal, ts en iso 17020 akreditasyon, baca kontrol standartları, baca muayene kalite prosedürü"
        canonicalUrl="https://bacarapor.com/kurumsal"
      />
      
      {/* 1. ÜST SABİT NAVİGASYON */}
      <Navbar onOpenAppointment={onOpenAppointment} />

      <main className="corporate-page-main">
        
        {/* 2. SADE BREADCRUMB NAVİGASYONU */}
        <div className="corporate-page-hero">
          <div className="container">
            <nav className="corporate-breadcrumb" aria-label="Ekmek kırıntısı">
              <button 
                type="button" 
                className="breadcrumb-link"
                onClick={() => navigate('/')}
              >
                <Home size={14} />
                <span>Ana Sayfa</span>
              </button>
              <ChevronRight size={14} className="breadcrumb-separator" />
              <span className="breadcrumb-current font-medium">Kurumsal & Akreditasyon</span>
            </nav>
          </div>
        </div>

        {/* 3. BÜTÜNSEL KURUMSAL VE AKREDİTASYON AKIŞI */}
        <div className="corporate-content-section">
          <div className="container">
            
            <div className="tab-panel tab-all-stream tab-fade-in" role="region" aria-label="Kurumsal Bilgiler">
              
              {/* 1. BÖLÜM: HAKKIMIZDA */}
              <div id="hakkimizda" className="stream-section-block">
                <AboutStory />
              </div>

              {/* ARA BÖLÜM ÇİZGİSİ */}
              <div className="stream-divider">
                <span className="divider-line"></span>
                <span className="divider-label font-medium">// MİSYON VE VİZYON</span>
                <span className="divider-line"></span>
              </div>

              {/* 2. BÖLÜM: MİSYON VE VİZYON */}
              <div id="misyon-vizyon" className="stream-section-block">
                <MissionVision />
              </div>

              {/* ARA BÖLÜM ÇİZGİSİ */}
              <div className="stream-divider">
                <span className="divider-line"></span>
                <span className="divider-label font-medium">// 6 AŞAMALI KALİTE KONTROL İNFOGRAFİĞİ</span>
                <span className="divider-line"></span>
              </div>

              {/* 3. BÖLÜM: KALİTE KONTROL 6 MADDE İNFOGRAFİK */}
              <div id="kalite-kontrol" className="stream-section-block">
                <QualityControlInfographic onOpenAppointment={onOpenAppointment} />
              </div>

              {/* ARA BÖLÜM ÇİZGİSİ */}
              <div className="stream-divider">
                <span className="divider-line"></span>
                <span className="divider-label font-medium">// TS EN ISO/IEC 17020 AKREDİTASYON & KALİTE POLİTİKASI</span>
                <span className="divider-line"></span>
              </div>

              {/* 4. BÖLÜM: TS EN ISO/IEC 17020 BAĞIMSIZLIK, TARAFSIZLIK VE KALİTE POLİTİKASI */}
              <div id="akreditasyon" className="stream-section-block">
                <AccreditationCommitment />
              </div>

              {/* ARA BÖLÜM ÇİZGİSİ */}
              <div className="stream-divider">
                <span className="divider-line"></span>
                <span className="divider-label font-medium">// MUAYENE ÖNCESİ MÜŞTERİ SAHA HAZIRLIK KILAVUZU</span>
                <span className="divider-line"></span>
              </div>

              {/* 5. BÖLÜM: MÜŞTERİ SAHA HAZIRLIK TALİMATI (BKR-T-03) */}
              <div id="saha-hazirlik" className="stream-section-block">
                <CustomerPrepGuide />
              </div>

              {/* ARA BÖLÜM ÇİZGİSİ */}
              <div className="stream-divider">
                <span className="divider-line"></span>
                <span className="divider-label font-medium">// İTİRAZ VE ŞİKAYETLERİN DEĞERLENDİRİLMESİ PROSEDÜRÜ</span>
                <span className="divider-line"></span>
              </div>

              {/* 6. BÖLÜM: İTİRAZ VE ŞİKAYETLERİN DEĞERLENDİRİLMESİ (BKR-P-09) */}
              <div id="itiraz-sikayet" className="stream-section-block">
                <AppealsComplaintsProcedure />
              </div>

            </div>

          </div>
        </div>

      </main>

      {/* 4. ALT BİLGİ FOOTER */}
      <Footer onOpenAppointment={onOpenAppointment} />

    </div>
  );
}
