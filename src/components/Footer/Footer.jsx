/* ==========================================================================
   BÖLÜM: ALT BİLGİ VE İLETİŞİM ÖNİZLEMESİ (FOOTER)
   Açıklama: Sayfanın en altındaki kurumsal özet, iletişim bilgileri,
   çoklu sayfa menü linkleri ve yasal uyarı alanlarını içerir.
   ========================================================================== */

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer({ onOpenAppointment }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (target) => {
    if (target === 'home') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else if (target === 'corporate') {
      navigate('/kurumsal');
    } else if (target === 'corporate-about') {
      navigate('/kurumsal#hakkimizda');
    } else if (target === 'corporate-mission') {
      navigate('/kurumsal#misyon-vizyon');
    } else if (target === 'corporate-quality') {
      navigate('/kurumsal#kalite-kontrol');
    } else if (target === 'service-sizdirmazlik') {
      navigate('/hizmetler/baca-sizdirmazlik-testi');
    } else if (target === 'service-periyodik') {
      navigate('/hizmetler/periyodik-baca-kontrolleri');
    } else if (target === 'service-proje') {
      navigate('/hizmetler/proje-ve-montaj-uygunluk-muayenesi');
    } else if (target === 'iller') {
      navigate('/iller');
    } else if (target === 'corporate-accreditation') {
      navigate('/kurumsal#akreditasyon');
    } else if (target === 'corporate-prep') {
      navigate('/kurumsal#saha-hazirlik');
    } else if (target === 'corporate-appeals') {
      navigate('/kurumsal#itiraz-sikayet');
    } else {
      if (location.pathname === '/') {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/#${target}`);
      }
    }
  };

  return (
    <footer id="iletisim" className="site-footer">
      <div className="container">

        {/* ----- 1. FOOTER ÜST BLOK (CTA ÇAĞRISI) ----- */}
        <div className="footer-cta-banner">
          <div className="footer-cta-text-area">
            <h3 className="footer-cta-title font-bold">
              Tesisinizin Baca Muayenesini Güvenle Gerçekleştirin
            </h3>
            <p className="footer-cta-desc font-regular">
              Yasal zorunlulukları yerine getirin, akredite standartlara uygun resmi denetim ve muayene raporunuzu gecikmeden alın.
            </p>
          </div>
          <button
            type="button"
            className="btn-primary footer-cta-btn font-medium"
            onClick={onOpenAppointment}
          >
            <span>Hemen Randevu Alın</span>
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* ----- 2. ANA FOOTER BAĞLANTILARI IZGARASI ----- */}
        <div className="footer-main-grid">

          {/* Logo ve Kısa Şirket Tanıtımı */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <button
                type="button"
                className="footer-brand-btn"
                onClick={() => handleNavClick('home')}
              >
                <div className="brand-icon-box">
                  <ShieldCheck size={20} className="brand-svg-icon" />
                </div>
                <span className="brand-text">
                  BACA <span className="brand-text-accent">RAPOR</span>
                </span>
              </button>
            </div>
            <p className="footer-brand-desc font-regular">
              Türkiye genelinde 81 ilde endüstriyel ve konut projeleri için akredite baca kontrolü, sızdırmazlık testleri ve periyodik muayene raporlama hizmetleri.
            </p>
            <div className="footer-cert-pill font-medium">
              <span>● Akredite ve Sertifikalı Muayene</span>
            </div>
          </div>

          {/* Menü Linkleri (Çoklu Sayfalar) */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title font-semibold">Sayfalar</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('home')}>
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('corporate')}>
                  Kurumsal Portal
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('hizmetler')}>
                  Hizmetlerimiz
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('iller')}>
                  İller (Hizmet Bölgeleri)
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('iletisim')}>
                  İletişim & Destek
                </button>
              </li>
            </ul>
          </div>

          {/* Hizmetler Detay Bölümleri */}
          <div className="footer-services-col">
            <h4 className="footer-col-title font-semibold">Hizmetlerimiz</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('service-sizdirmazlik')}>
                  Baca Sızdırmazlık Testi
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('service-periyodik')}>
                  Periyodik Baca Kontrolleri
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('service-proje')}>
                  Proje & Montaj Uygunluk
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNavClick('corporate-quality')}>
                  6 Aşamalı Kalite Kontrol
                </button>
              </li>
            </ul>
          </div>

          {/* İletişim & Saha Destek */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title font-semibold">İletişim & Destek</h4>
            <ul className="footer-contact-list">
              <li>
                <Phone size={16} className="contact-icon" />
                <a href="tel:05367068125" style={{ color: 'inherit', textDecoration: 'none' }} className="font-regular">
                  0 (536) 706 81 25
                </a>
              </li>
              <li>
                <Mail size={16} className="contact-icon" />
                <a href="mailto:surmelibacaraporu@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }} className="font-regular">
                  surmelibacaraporu@gmail.com
                </a>
              </li>
              <li>
                <MapPin size={16} className="contact-icon" />
                <span className="font-regular">Türkiye Geneli 81 İl Saha Hizmeti</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ----- 3. FOOTER ALT ÇİZGİSİ VE TELİF HAKKI ----- */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright font-light">
            © 2026 <strong>Baca Rapor</strong>. Tüm hakları saklıdır.
          </p>
          <div className="footer-legal-links">
            <button type="button" className="footer-legal-link-btn font-light" onClick={() => handleNavClick('corporate-accreditation')}>
              ISO 17020 Akreditasyon & Tarafsızlık
            </button>
            <span className="legal-dot">•</span>
            <button type="button" className="footer-legal-link-btn font-light" onClick={() => handleNavClick('corporate-appeals')}>
              İtiraz ve Şikayet Prosedürü (BKR-P-09)
            </button>
            <span className="legal-dot">•</span>
            <button type="button" className="footer-legal-link-btn font-light" onClick={() => handleNavClick('corporate-prep')}>
              Müşteri Saha Hazırlık Kılavuzu (BKR-T-03)
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
