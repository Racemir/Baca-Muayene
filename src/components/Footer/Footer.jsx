/* ==========================================================================
   BÖLÜM: ALT BİLGİ VE İLETİŞİM ÖNİZLEMESİ (FOOTER)
   Açıklama: Sayfanın en altındaki kurumsal özet, iletişim bilgileri,
   çoklu sayfa menü linkleri ve yasal uyarı alanlarını içerir.
   ========================================================================== */

import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer({ onOpenAppointment }) {
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
              Yasal zorunlulukları yerine getirin, standartlara uygun resmi denetim ve muayene raporunuzu gecikmeden alın.
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
              <Link to="/" className="footer-brand-btn">
                <div className="brand-icon-box">
                  <ShieldCheck size={20} className="brand-svg-icon" />
                </div>
                <span className="brand-text">
                  BACA <span className="brand-text-accent">RAPOR</span>
                </span>
              </Link>
            </div>
            <p className="footer-brand-desc font-regular">
              Türkiye genelinde 81 ilde endüstriyel ve konut projeleri için baca kontrolü, sızdırmazlık testleri ve periyodik muayene raporlama hizmetleri.
            </p>
            <div className="footer-cert-pill font-medium">
              <span>● Standartlara uygun bağımsız muayene</span>
            </div>
          </div>

          {/* Menü Linkleri (Çoklu Sayfalar) */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title font-semibold">Sayfalar</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/" className="footer-link-btn">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/kurumsal" className="footer-link-btn">Kurumsal Portal</Link>
              </li>
              <li>
                <Link to="/#hizmetler" className="footer-link-btn">Hizmetlerimiz</Link>
              </li>
              <li>
                <Link to="/iller" className="footer-link-btn">İller (Hizmet Bölgeleri)</Link>
              </li>
              <li>
                <a href="/#iletisim" className="footer-link-btn">İletişim & Destek</a>
              </li>
            </ul>
          </div>

          {/* Hizmetler Detay Bölümleri */}
          <div className="footer-services-col">
            <h4 className="footer-col-title font-semibold">Hizmetlerimiz</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/hizmetler/baca-sizdirmazlik-testi" className="footer-link-btn">
                  Baca Sızdırmazlık Testi
                </Link>
              </li>
              <li>
                <Link to="/hizmetler/periyodik-baca-kontrolleri" className="footer-link-btn">
                  Periyodik Baca Kontrolleri
                </Link>
              </li>
              <li>
                <Link to="/hizmetler/proje-ve-montaj-uygunluk-muayenesi" className="footer-link-btn">
                  Proje & Montaj Uygunluk
                </Link>
              </li>
              <li>
                <Link to="/kurumsal#kalite-kontrol" className="footer-link-btn">
                  6 Aşamalı Kalite Kontrol
                </Link>
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
                <a href="mailto:istanbulbacaraporu@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }} className="font-regular">
                  istanbulbacaraporu@gmail.com
                </a>
              </li>
              <li>
                <MapPin size={16} className="contact-icon" />
                <a 
                  href="https://share.google/FlGwC154l0NluMoQO" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }} 
                  className="font-regular"
                  title="Google Haritalar'da Konumu Aç"
                >
                  <span>İstanbul İGDAŞ Baca Raporu</span>
                  <ArrowUpRight size={13} style={{ color: '#4dd0e1' }} />
                </a>
              </li>
              <li>
                <span className="font-regular" style={{ fontSize: '12px', color: '#6e6e78', paddingLeft: '28px' }}>
                  Türkiye Geneli 81 İl Saha Hizmeti
                </span>
              </li>
            </ul>

            {/* Google Haritalar Konum Rozet Butonu */}
            <a 
              href="https://share.google/FlGwC154l0NluMoQO" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-map-badge-link"
              title="Google İşletme & Harita Konumu"
            >
              <div className="footer-map-badge-icon">
                <MapPin size={16} />
              </div>
              <div className="footer-map-badge-text">
                <span className="footer-map-badge-title">Google Harita Konumu</span>
                <span className="footer-map-badge-desc">Yol Tarifi Al & Konumu Gör</span>
              </div>
              <ArrowUpRight size={14} className="footer-map-badge-arrow" />
            </a>
          </div>

        </div>
        
        {/* ----- 2.5 ÖNE ÇIKAN İLLER SEO BAĞLANTILARI ----- */}
        <div className="footer-cities-seo-bar">
          <span className="footer-cities-title font-medium">Öne Çıkan İl Hizmetlerimiz:</span>
          <div className="footer-cities-tags">
            <Link to="/iller/istanbul" className="footer-city-tag">İstanbul Baca Raporu</Link>
            <Link to="/iller/ankara" className="footer-city-tag">Ankara Baca Raporu</Link>
            <Link to="/iller/izmir" className="footer-city-tag">İzmir Baca Raporu</Link>
            <Link to="/iller/bursa" className="footer-city-tag">Bursa Baca Raporu</Link>
            <Link to="/iller/antalya" className="footer-city-tag">Antalya Baca Raporu</Link>
            <Link to="/iller/kocaeli" className="footer-city-tag">Kocaeli Baca Raporu</Link>
            <Link to="/iller/konya" className="footer-city-tag">Konya Baca Raporu</Link>
            <Link to="/iller/adana" className="footer-city-tag">Adana Baca Raporu</Link>
            <Link to="/iller/gaziantep" className="footer-city-tag">Gaziantep Baca Raporu</Link>
            <Link to="/iller/tekirdag" className="footer-city-tag">Tekirdağ Baca Raporu</Link>
            <Link to="/iller/eskisehir" className="footer-city-tag">Eskişehir Baca Raporu</Link>
            <Link to="/iller/kayseri" className="footer-city-tag">Kayseri Baca Raporu</Link>
            <Link to="/iller/mersin" className="footer-city-tag">Mersin Baca Raporu</Link>
            <Link to="/iller/sakarya" className="footer-city-tag">Sakarya Baca Raporu</Link>
            <Link to="/iller/samsun" className="footer-city-tag">Samsun Baca Raporu</Link>
            <Link to="/iller" className="footer-city-tag footer-city-all">Tüm 81 İl İçin Tıklayın →</Link>
          </div>
        </div>

        {/* ----- 3. FOOTER ALT ÇİZGİSİ VE TELİF HAKKI ----- */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright font-light">
            © 2026 <strong>Baca Rapor</strong>. Tüm hakları saklıdır.
          </p>
          <div className="footer-legal-links">
            <Link to="/kurumsal#akreditasyon" className="footer-legal-link-btn font-light">
              ISO 17020 Kalite ve Tarafsızlık
            </Link>
            <span className="legal-dot">•</span>
            <Link to="/kurumsal#itiraz-sikayet" className="footer-legal-link-btn font-light">
              İtiraz ve Şikayet Prosedürü (BKR-P-09)
            </Link>
            <span className="legal-dot">•</span>
            <Link to="/kurumsal#saha-hazirlik" className="footer-legal-link-btn font-light">
              Müşteri Saha Hazırlık Kılavuzu (BKR-T-03)
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
