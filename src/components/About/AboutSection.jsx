/* ==========================================================================
   BÖLÜM: KURUMSAL ANA ALANI (ABOUT SECTION)
   Açıklama: Hakkımızda, Misyon & Vizyon ve 6 Maddelik Kalite Kontrol
   İnfografiğini tek bir kusursuz, etkileşimli çatı altında toplayan ana bileşen.
   ========================================================================== */

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Target, 
  ShieldCheck, 
  Layers 
} from 'lucide-react';
import AboutStory from './AboutStory';
import MissionVision from './MissionVision';
import QualityControlInfographic from './QualityControlInfographic';
import './AboutSection.css';

export default function AboutSection({ onOpenAppointment }) {
  // Aktif sekme: 'about' (Hakkımızda) | 'mission' (Misyon & Vizyon) | 'quality' (Kalite Kontrol) | 'all' (Tümü)
  const [activeTab, setActiveTab] = useState('about');

  // URL hash kontrolü (örn. doğrudan #kalite-kontrol veya #misyon-vizyon linkiyle gelinirse)
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash === '#kalite-kontrol') {
        setActiveTab('quality');
      } else if (hash === '#misyon-vizyon') {
        setActiveTab('mission');
      } else if (hash === '#hakkimizda') {
        setActiveTab('about');
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    // Sekme değiştiğinde kurumsal bölümün tepesine yumuşak kaydır
    const kurumsalEl = document.getElementById('kurumsal');
    if (kurumsalEl) {
      kurumsalEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="kurumsal" className="about-section">
      <div className="container">
        
        {/* ==================================================================
            1. BÖLÜM: KURUMSAL ÜST BAŞLIK VE SEKME YÖNETİM ÇUBUĞU
            ================================================================== */}
        <div className="corporate-header-wrapper">
          <div className="corporate-header-content">
            <span className="corporate-pretag font-medium">// KURUMSAL YAPI VE STANDARTLAR</span>
            <h2 className="corporate-main-title font-bold">
              Görünmez Tehlikelerin Kontrolü, <br />
              <span className="corporate-title-light font-regular">Güvenilir Ellerde</span>
            </h2>
          </div>

          {/* İNTERAKTİF KURUMSAL SEKME NAVİGASYONU */}
          <div className="corporate-tabs-bar" role="tablist" aria-label="Kurumsal Bölümler">
            
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'about'}
              className={`corporate-tab-btn ${activeTab === 'about' ? 'tab-active' : ''}`}
              onClick={() => handleTabChange('about')}
            >
              <Building2 size={18} className="tab-btn-icon" />
              <span className="tab-btn-text font-medium">Hakkımızda</span>
              <span className="tab-btn-badge">Biz Kimiz?</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'mission'}
              className={`corporate-tab-btn ${activeTab === 'mission' ? 'tab-active' : ''}`}
              onClick={() => handleTabChange('mission')}
            >
              <Target size={18} className="tab-btn-icon" />
              <span className="tab-btn-text font-medium">Misyon ve Vizyon</span>
              <span className="tab-btn-badge">Gelecek & Amaç</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'quality'}
              className={`corporate-tab-btn ${activeTab === 'quality' ? 'tab-active' : ''}`}
              onClick={() => handleTabChange('quality')}
            >
              <ShieldCheck size={18} className="tab-btn-icon" />
              <span className="tab-btn-text font-medium">Kalite Kontrol</span>
              <span className="tab-btn-badge badge-accent">6 Adım İnfografik</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'all'}
              className={`corporate-tab-btn tab-btn-all ${activeTab === 'all' ? 'tab-active' : ''}`}
              onClick={() => handleTabChange('all')}
              title="Tüm kurumsal içeriği tek sayfada inceleyin"
            >
              <Layers size={18} className="tab-btn-icon" />
              <span className="tab-btn-text font-medium">Tümünü İncele</span>
            </button>

          </div>
        </div>

        {/* ==================================================================
            2. BÖLÜM: DİNAMİK SEKME İÇERİKLERİ
            ================================================================== */}
        <div className="corporate-tabs-viewport">
          
          {/* SEÇENEK A: HAKKIMIZDA GÖRÜNÜMÜ */}
          {activeTab === 'about' && (
            <div className="tab-panel tab-fade-in" role="tabpanel">
              <AboutStory 
                onGoToMission={() => handleTabChange('mission')}
                onGoToQuality={() => handleTabChange('quality')}
              />
            </div>
          )}

          {/* SEÇENEK B: MİSYON & VİZYON GÖRÜNÜMÜ */}
          {activeTab === 'mission' && (
            <div className="tab-panel tab-fade-in" role="tabpanel">
              <MissionVision 
                onGoToAbout={() => handleTabChange('about')}
                onGoToQuality={() => handleTabChange('quality')}
              />
            </div>
          )}

          {/* SEÇENEK C: KALİTE KONTROL 6 MADDE İNFOGRAFİK GÖRÜNÜMÜ */}
          {activeTab === 'quality' && (
            <div className="tab-panel tab-fade-in" role="tabpanel">
              <QualityControlInfographic 
                onGoToAbout={() => handleTabChange('about')}
                onGoToMission={() => handleTabChange('mission')}
                onOpenAppointment={onOpenAppointment}
              />
            </div>
          )}

          {/* SEÇENEK D: TÜMÜNÜ İNCELE (AKIŞ MODU) */}
          {activeTab === 'all' && (
            <div className="tab-panel tab-all-stream tab-fade-in" role="tabpanel">
              <div id="hakkimizda" className="stream-section-block">
                <AboutStory 
                  onGoToMission={() => handleTabChange('mission')}
                  onGoToQuality={() => handleTabChange('quality')}
                />
              </div>

              <div className="stream-divider">
                <span className="divider-line"></span>
                <span className="divider-label font-medium">// MİSYON VE VİZYON</span>
                <span className="divider-line"></span>
              </div>

              <div id="misyon-vizyon" className="stream-section-block">
                <MissionVision 
                  onGoToAbout={() => handleTabChange('about')}
                  onGoToQuality={() => handleTabChange('quality')}
                />
              </div>

              <div className="stream-divider">
                <span className="divider-line"></span>
                <span className="divider-label font-medium">// 6 AŞAMALI KALİTE KONTROL İNFOGRAFİĞİ</span>
                <span className="divider-line"></span>
              </div>

              <div id="kalite-kontrol" className="stream-section-block">
                <QualityControlInfographic 
                  onGoToAbout={() => handleTabChange('about')}
                  onGoToMission={() => handleTabChange('mission')}
                  onOpenAppointment={onOpenAppointment}
                />
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
