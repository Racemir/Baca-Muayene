/* ==========================================================================
   BÖLÜM: KARŞILAMA VE GİRİŞ ALANI (HERO SECTION)
   Açıklama: Kullanıcının siteye girdiğinde ilk gördüğü ekran.
   Görsel: Arka planı kaplayan yüksek çözünürlüklü endüstriyel çatı / baca görseli.
   Başlık: "Güvenli Nefes Yasal Uygunluk"
   Aksiyon: "Randevu Al" butonu ve ek bilgi rozetleri.
   ========================================================================== */

import React from 'react';
import { Calendar, ArrowRight, CheckCircle2, ChevronDown, MessageCircle } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection({ onOpenAppointment }) {
  const WHATSAPP_PHONE = '905367068125';
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Merhaba, Baca Rapor web siteniz üzerinden ulaşıyorum. Baca kontrolü ve muayene hizmetleriniz için bilgi ve randevu almak istiyorum.')}`;

  return (
    /* ===== [WEBSITE BÖLÜMÜ]: HERO / GİRİŞ ALANI ===== */
    <section id="anasayfa" className="hero-section">
      
      {/* ----- 1. ARKA PLAN GÖRSELİ VE KARARTMA KATMANI ----- */}
      {/* Yüksek öncelikli (fetchPriority="high") ve optimize edilmiş arka plan görseli */}
      <div className="hero-background-image">
        <img
          src="/hero-bg-1600.webp"
          srcSet="/hero-bg-960.webp 960w, /hero-bg-1600.webp 1600w"
          sizes="100vw"
          alt="Yetkili baca raporu ve sızdırmazlık testi saha görseli"
          className="hero-bg-img"
          width={1600}
          height={894}
          fetchPriority="high"
          decoding="sync"
        />
        <div className="hero-overlay-gradient"></div>
        <div className="hero-overlay-grid"></div>
      </div>

      {/* ----- 2. MERKEZİ İÇERİK ALANI ----- */}
      <div className="container hero-content-wrapper">
        
        {/* Güven ve Akreditasyon Rozeti */}
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          <span className="hero-badge-text font-medium">
            TÜRKİYE GENELİ YETKİLİ BACA DENETİMİ
          </span>
        </div>

        <h1 className="hero-title font-bold">
          Onaylı Baca <br className="hero-title-break" />
          <span className="hero-title-highlight font-medium">Güvenli Nefes</span>
        </h1>
        <p className="hero-kicker font-medium">Yetkili Baca Raporu ve Sızdırmazlık Testi</p>

        {/* Kısa Destekleyici Açıklama */}
        <p className="hero-description font-regular">
          Endüstriyel tesisler, ticari binalar ve yaşam alanlarınız için ulusal ve uluslararası standartlarda baca muayenesi, sızdırmazlık testi ve resmi uygunluk raporlaması sunuyoruz.
        </p>

        {/* Aksiyon Butonları Grubu ("Randevu Al" ve "WhatsApp İletişim") */}
        <div className="hero-actions-row">
          <button 
            type="button" 
            className="btn-primary hero-btn-appointment font-medium"
            onClick={onOpenAppointment}
            title="Hemen Baca Denetim Randevusu Alın"
          >
            <Calendar size={18} />
            <span>Randevu Al</span>
            <ArrowRight size={17} className="btn-icon-hover" />
          </button>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-whatsapp font-medium"
            title="WhatsApp Üzerinden Hemen İletişime Geçin"
          >
            <MessageCircle size={18} />
            <span>WhatsApp İletişim</span>
          </a>
        </div>

        {/* Güven Belirteçleri (Mini İstatistik / Özellik Şeridi) */}
        <div className="hero-trust-bar">
          <div className="trust-item">
            <CheckCircle2 size={16} className="trust-icon" />
            <span className="trust-text font-regular">81 İlde Hızlı Saha Ekibi</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <CheckCircle2 size={16} className="trust-icon" />
            <span className="trust-text font-regular">Uzman Denetçilik & Teknik Muayene</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <CheckCircle2 size={16} className="trust-icon" />
            <span className="trust-text font-regular">Kalibre Cihazlarla Hassas Ölçüm</span>
          </div>
        </div>

      </div>

      {/* ----- 3. AŞAĞI KAYDIRMA GÖSTERGESİ (SCROLL DOWN HINT) ----- */}
      <a href="#hizmetler" className="hero-scroll-indicator" aria-label="Aşağıya Kaydır">
        <span className="scroll-text font-light">Aşağı Kaydır</span>
        <ChevronDown size={18} className="scroll-chevron-bounce" />
      </a>

    </section>
  );
}
