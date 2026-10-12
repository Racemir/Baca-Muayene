/* ==========================================================================
   BÖLÜM: ANA SAYFA KURUMSAL ÖZET VE YÖNLENDİRME (CORPORATE PREVIEW)
   Açıklama: Kullanıcının talebi doğrultusunda:
   - Fotoğraf SOLDA (yarı yarıya küçültülmüş, 50/50 ızgara)
   - Yazı SAĞDA
   - Fotoğraf: "WhatsApp Image 2026-10-08 at 17.58.02.jpeg" (facadeChimneyImg)
   ========================================================================== */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  Target, 
  Award
} from 'lucide-react';
import { facadeChimneyImg } from '../../assets/gorseller';
import './AboutSection.css';

export default function CorporatePreview() {
  const navigate = useNavigate();

  return (
    <section id="kurumsal-ozet" className="corporate-preview-section">
      <div className="container">
        
        {/* ----- 1. YAN YANA DÜZEN: SOLDA FOTOĞRAF, SAĞDA KURUMSAL METİN ----- */}
        <div className="preview-split-grid">
          
          {/* SOL KOLON: FOTOĞRAF (YARI YARIYA KÜÇÜLTÜLMÜŞ, DIŞ CEPHE BACASI) */}
          <div className="preview-split-visual" onClick={() => navigate('/kurumsal')}>
            <div className="preview-split-frame">
              <img 
                src={facadeChimneyImg} 
                alt="Baca Kontrolü Dış Cephe Paslanmaz Çelik Baca Montajı" 
                className="preview-split-img"
                loading="lazy"
              />
              <div className="preview-image-gradient-overlay"></div>

              {/* Canlı İstatistik Rozetleri */}
              <div className="preview-stat-badge stat-badge-left">
                <ShieldCheck size={18} className="stat-badge-icon" />
                <div>
                  <span className="stat-value font-bold">%100</span>
                  <span className="stat-label font-regular">Yasal Standart</span>
                </div>
              </div>

              <div className="preview-stat-badge stat-badge-right">
                <Building2 size={18} className="stat-badge-icon" />
                <div>
                  <span className="stat-value font-bold">81 İl</span>
                  <span className="stat-label font-regular">Saha Erişimi</span>
                </div>
              </div>

              {/* Tıklanabilir İpucu Rozeti */}
              <div className="preview-hover-pill">
                <span>Kurumsal Portala Git</span>
                <ArrowRight size={15} />
              </div>
            </div>
          </div>

          {/* SAĞ KOLON: KURUMSAL BAŞLIK, METİN VE AKSİYON BUTONU */}
          <div className="preview-split-content">
            <div className="preview-content-inner">
              <span className="corporate-pretag font-medium">// KURUMSAL BAKIŞ</span>
              <h2 className="preview-main-heading font-bold">
                Yasal Standartlar ve <br />
                <span className="corporate-title-light font-regular">Tavizsiz Güvenlik</span>
              </h2>

              <p className="preview-lead-text font-regular">
                Baca Kontrolü olarak, Türkiye'nin dört bir yanında güvenli yaşam ve çalışma alanları için hizmet veriyoruz. Güncel teknolojiye sahip cihazlarımız ve uzman ekibimizle, baca sistemlerinizin yasal standartlara uygunluğunu titizlikle denetliyor ve raporluyoruz.
              </p>

              <div className="preview-cta-wrap">
                <button 
                  type="button" 
                  className="btn-primary font-medium"
                  onClick={() => navigate('/kurumsal')}
                  title="Detaylı Kurumsal Sayfamıza Geçin"
                >
                  <span>Kurumsal Sayfamıza Geçin</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* ----- 2. KURUMSAL ALT BÖLÜM 3'LÜ KARTLARI ----- */}
        <div className="preview-subpages-grid">
          
          {/* Kart 1: Hakkımızda */}
          <div 
            className="preview-subpage-card"
            onClick={() => navigate('/kurumsal#hakkimizda')}
          >
            <div className="subpage-card-icon">
              <Building2 size={24} />
            </div>
            <div className="subpage-card-text">
              <span className="subpage-tag font-medium">// 01. BİZ KİMİZ?</span>
              <h4 className="subpage-title font-semibold">Hakkımızda</h4>
              <p className="subpage-desc font-regular">
                Sektörde sarsılmaz bir standart belirleyen denetim felsefemiz ve kurumsal ilkelerimiz.
              </p>
            </div>
            <div className="subpage-arrow">
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Kart 2: Misyon ve Vizyon */}
          <div 
            className="preview-subpage-card"
            onClick={() => navigate('/kurumsal#misyon-vizyon')}
          >
            <div className="subpage-card-icon">
              <Target size={24} />
            </div>
            <div className="subpage-card-text">
              <span className="subpage-tag font-medium">// 02. GELECEK BAKIŞI</span>
              <h4 className="subpage-title font-semibold">Misyon ve Vizyon</h4>
              <p className="subpage-desc font-regular">
                Görünmez tehlikeleri kaynağında tespit ederek yangın ve zehirlenme risklerini ortadan kaldırma taahhüdümüz.
              </p>
            </div>
            <div className="subpage-arrow">
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Kart 3: 6 Aşamalı Kalite Kontrol */}
          <div 
            className="preview-subpage-card"
            onClick={() => navigate('/kurumsal#kalite-kontrol')}
          >
            <div className="subpage-card-icon">
              <Award size={24} />
            </div>
            <div className="subpage-card-text">
              <span className="subpage-tag font-medium">// 03. 6 ADIM İNFOGRAFİK</span>
              <h4 className="subpage-title font-semibold">Kalite Kontrol Sistemi</h4>
              <p className="subpage-desc font-regular">
                TS 11388 ve EN 1443 Avrupa normlarında yürütülen sıfır hata denetim metodolojimiz.
              </p>
            </div>
            <div className="subpage-arrow">
              <ArrowRight size={16} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
