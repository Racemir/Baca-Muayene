/* ==========================================================================
   SAYFA: İL DETAY SAYFASI (CITYDETAILPAGE.JSX)
   Açıklama: Her bir il için özel oluşturulan dinamik baca denetim sayfası.
   Örnek: /iller/ankara -> "Ankara Baca Muayene ve Sızdırmazlık Raporu"
   Bölümler:
   1. Header / Navbar
   2. Ekmek Kırıntısı (Ana Sayfa > İller > İl Adı)
   3. Başlık: [İl Adı] Baca Muayene ve Sızdırmazlık Raporu
   4. Hazır Taslak Metni Bölümü:
      "[İl Adı] ilinin tüm ilçelerinde endüstriyel tesisler, konutlar ve
       işletmeler için TSE ve akredite standartlara uygun baca muayene
       hizmeti veriyoruz..."
   5. Bölgesel Hizmet Özeti:
      - [İl Adı] Sızdırmazlık Testi
      - [İl Adı] Proje Uygunluk Muayenesi
      - [İl Adı] Periyodik Baca Kontrolü
   6. Aksiyon: "[İl Adı] bölgesi için hemen fiyat teklifi alın"
      [ Hızlı İletişim Formu ] | [ "[İl Adı] Ekibimizi Arayın" Butonu ]
   7. Footer
   ========================================================================== */

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Home,
  ChevronRight,
  MapPin,
  Gauge,
  FileCheck2,
  Camera,
  ArrowUpRight,
  Phone,
  Send,
  CheckCircle2,
  ShieldCheck,
  Clock,
  MessageCircle,
  AlertTriangle,
  Calendar
} from 'lucide-react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import SeoHead from '../components/Common/SeoHead';
import { getCityBySlug, CITIES_DATA } from '../data/citiesData';
import './CityDetailPage.css';

export default function CityDetailPage({ onOpenAppointment }) {
  const { citySlug } = useParams();
  const navigate = useNavigate();

  // URL slug'ına göre il verisi çekme (Varsayılan: Ankara)
  const city = getCityBySlug(citySlug) || getCityBySlug('ankara');

  // Dinamik SEO ve Yapılandırılmış Veri (Schema.org JSON-LD)
  const pageTitle = `${city.name} Baca Raporu | Yetkili Baca Sızdırmazlık Testi ve Uygunluk`;
  const pageDescription = `${city.name} yetkili baca raporu, baca sızdırmazlık testi ve doğalgaz baca uygunluk muayenesi. ${city.gasCompany} onaylı akredite ve hızlı baca kontrol raporu alın.`;
  const pageKeywords = `${city.name} baca raporu, ${city.name} baca sızdırmazlık testi, ${city.name} doğalgaz baca raporu, ${city.gasCompany} baca raporu, ${city.name} baca uygunluk belgesi, ${city.name} periyodik baca kontrolü`;
  const canonicalUrl = `https://bacaraporu.com.tr/iller/${city.slug}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ana Sayfa",
            "item": "https://bacaraporu.com.tr/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Hizmet Bölgelerimiz",
            "item": "https://bacaraporu.com.tr/iller"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${city.name} Baca Kontrol ve Muayene`,
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": `${canonicalUrl}#localbusiness`,
        "name": `Baca Rapor - ${city.name} Baca Muayene ve Kontrol`,
        "description": pageDescription,
        "url": canonicalUrl,
        "telephone": "+905367068125",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": city.name
        },
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": city.name,
          "addressCountry": "TR"
        }
      }
    ]
  };

  // Hızlı form yerel state'i
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    district: '',
    serviceType: 'Baca Sızdırmazlık Testi',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // WhatsApp doğrudan bağlantı metni
  const WHATSAPP_PHONE = '905367068125';
  const whatsappText = `Merhaba, ${city.name} bölgesi için baca muayenesi ve sızdırmazlık testi hakkında fiyat teklifi ve randevu almak istiyorum.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(whatsappText)}`;

  // Çevre iller veya aynı bölgedeki diğer iller
  const regionalNeighbors = CITIES_DATA.filter(
    (c) => c.region === city.region && c.slug !== city.slug
  ).slice(0, 8);

  return (
    <div className="city-detail-layout">
      {/* Dinamik İl SEO ve Schema.org Yapılandırması */}
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={canonicalUrl}
        keywords={pageKeywords}
        schemaData={schemaData}
      />

      {/* 1. ÜST NAVİGASYON */}
      <Navbar onOpenAppointment={onOpenAppointment} />

      <main className="city-detail-main">

        {/* 2. EKMEK KIRINTISI (BREADCRUMB) */}
        <div className="city-breadcrumb-bar">
          <div className="container">
            <nav className="city-breadcrumb" aria-label="Ekmek Kırıntısı">
              <button
                type="button"
                className="city-breadcrumb-link"
                onClick={() => navigate('/')}
              >
                <Home size={13} />
                <span>Ana Sayfa</span>
              </button>
              <ChevronRight size={13} className="city-breadcrumb-separator" />
              <button
                type="button"
                className="city-breadcrumb-link"
                onClick={() => navigate('/iller')}
              >
                <span>İller</span>
              </button>
              <ChevronRight size={13} className="city-breadcrumb-separator" />
              <span className="city-breadcrumb-current">{city.name}</span>
            </nav>
          </div>
        </div>

        {/* 3. TEPE HERO BÖLÜMÜ */}
        <section className="city-hero-section">
          <div className="container">

            <div className="city-hero-badge-row">
              <span className="city-hero-pill">
                <span className="city-plate-highlight">{city.plate}</span>
                <span>{city.region} BÖLGESEL SAHA DİREKTÖRLÜĞÜ</span>
              </span>
              <span className="city-gas-company-tag">
                Yetkili Dağıtım: <strong>{city.gasCompany}</strong> Şartnamesine Uygunluk
              </span>
            </div>

            {/* BAŞLIK */}
            <h1 className="city-hero-title font-bold">
              {city.name} Baca Muayene ve <br />
              <span className="text-secondary font-regular">Sızdırmazlık Raporu</span>
            </h1>

            {/* 4. HAZIR TASLAK METNİ BÖLÜMÜ (BÖLGESEL BRİFİNG, YASAL UYGUNLUK & İLETİŞİM) */}
            <div className="city-draft-text-box">

              {/* Giriş & Yaşam/Çalışma Alanı Güvencesi */}
              <div className="draft-section-lead">
                <p className="draft-lead-paragraph font-medium">
                  Yaşam ve çalışma alanlarınızda güvenliğin sağlanması, hem can ve mal koruması hem de yasal mevzuatlara uyum açısından hayati bir önem taşır. Özellikle doğalgaz kullanımı ve olası acil durum senaryolarında, sistemlerin kusursuz çalışması gerekir. Uzman kadromuzla, <strong>{city.name}</strong> genelinde yasal düzenlemelere tam uyumlu akredite kontrol ve belgelendirme hizmetleri sunuyoruz.
                </p>
              </div>

              {/* Baca Güvenliği & Hayati Risk Vurgusu */}
              <div className="draft-risk-highlight">
                <div className="draft-risk-icon">
                  <AlertTriangle size={20} />
                </div>
                <div className="draft-risk-content">
                  <h3 className="draft-risk-title font-bold">
                    Baca Güvenliği Asla Şansa Bırakılamaz
                  </h3>
                  <p className="draft-risk-text font-regular">
                    Doğalgaz kullanımının vazgeçilmez bir parçası olan bacaların güvenliği, asla şansa bırakılamayacak kadar kritiktir. Baca içerisindeki yanmış gazların güvenle dışarıya tahliye edilebilmesi, karbonmonoksit zehirlenmeleri gibi ölümcül risklerin önlenmesi için şarttır.
                  </p>
                </div>
              </div>

              {/* Baca Güvenliği ve Yasal Düzenleme Maddeleri */}
              <div className="draft-legal-points-wrapper">
                <h4 className="draft-points-heading font-medium">
                  // BACA GÜVENLİĞİ VE YASAL MEVZUAT GEREKLİLİKLERİ:
                </h4>
                <div className="draft-points-grid">
                  <div className="draft-point-item">
                    <div className="point-icon-wrapper">
                      <CheckCircle2 size={16} />
                    </div>
                    <div className="point-text-wrapper">
                      <strong>Karbonmonoksit (CO) Zehirlenmesi ve Sızıntı Önleme:</strong>
                      <span>Baca cidarlarında mikron düzeyindeki çatlak ve sızıntılar pozitif basınçlı testlerle tespit edilerek zehirli gazların yaşam alanlarına sızması engellenir.</span>
                    </div>
                  </div>

                  <div className="draft-point-item">
                    <div className="point-icon-wrapper">
                      <CheckCircle2 size={16} />
                    </div>
                    <div className="point-text-wrapper">
                      <strong>Binaların Yangından Korunması Hakkında Yönetmelik (Madde 58):</strong>
                      <span>Kazan daireleri, kaskad ve merkezi baca sistemlerinin yılda en az bir defa yetkili ve akredite kuruluşlarca periyodik denetlenmesi yasal zorunluluktur.</span>
                    </div>
                  </div>

                  <div className="draft-point-item">
                    <div className="point-icon-wrapper">
                      <CheckCircle2 size={16} />
                    </div>
                    <div className="point-text-wrapper">
                      <strong>{city.gasCompany} Şartnameleri ve Gaz Açım Onayı:</strong>
                      <span>Abonelik gaz açım protokolleri, ticari işletme ruhsatı ve iskan süreçlerinde geçerli akredite resmi baca kontrol raporu zorunludur.</span>
                    </div>
                  </div>

                  <div className="draft-point-item">
                    <div className="point-icon-wrapper">
                      <CheckCircle2 size={16} />
                    </div>
                    <div className="point-text-wrapper">
                      <strong>6331 Sayılı İSG Kanunu ve Yangın Sigortası Geçerliliği:</strong>
                      <span>Akredite periyodik muayene raporu bulunmayan işletmelerde olası yangın ve hasar durumlarında sigorta tazminatı geçersiz sayılabilmektedir.</span>
                    </div>
                  </div>

                  <div className="draft-point-item">
                    <div className="point-icon-wrapper">
                      <CheckCircle2 size={16} />
                    </div>
                    <div className="point-text-wrapper">
                      <strong>Hatalı Çekiş, Geri Tepme ve Kurum Parlaması Koruması:</strong>
                      <span>Rüzgar geri tepmesi, yetersiz yanma havası ve baca tıkanıklığı kaynaklı parlama ve kazan dairesi yangın riskleri önceden bertaraf edilir.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Standartlar ve Mühendislik Hesapları */}
              <div className="draft-standards-box">
                <div className="standards-icon-col">
                  <FileCheck2 size={24} />
                </div>
                <div className="standards-text-col">
                  <h4 className="standards-title font-bold">
                    Standartlara Dayalı Mühendislik İncelemesi ve Hesaplama
                  </h4>
                  <p className="standards-desc font-regular">
                    Alanında uzman kontrol personellerimiz, baca sisteminizi en güncel standart verileri doğrultusunda en ince ayrıntısına kadar inceler. <strong>TS EN 13384-1</strong> ve <strong>TS EN 13384-2</strong> standartlarındaki bilgiler kullanılarak baca çap hesaplarınız yapılır. <strong>TS EN 15287-1</strong>, <strong>TS EN 15287-2</strong> ve <strong>TS 7363</strong> standartlarına göre de baca montaj uygunluk değerlendirmesi yapılarak baca raporunuz hazırlanır.
                  </p>
                  <div className="standards-badges-row">
                    <span className="std-badge">TS EN 13384-1 / TS EN 13384-2 (Çap & Akışkan)</span>
                    <span className="std-badge">TS EN 15287-1 / TS EN 15287-2 (Montaj Tasarımı)</span>
                    <span className="std-badge">TS 7363 (Doğalgaz Bina İçi Tesisat)</span>
                    <span className="std-badge">TS EN ISO/IEC 17020 Akreditasyon</span>
                  </div>
                </div>
              </div>

              {/* Periyodik Muayene & Bölgesel Çözüm */}
              <div className="draft-periodic-assurance">
                <p className="font-regular">
                  Mevcut bacaların belirli periyotlarla düzenli olarak kontrol edilmesi, olası arızaların büyümeden önlenmesini sağlar. <strong>{city.name}</strong> genelinde periyodik baca muayenesi ve sızdırmazlık testleri için güvenilir bir çözüm ortağı arıyorsanız, profesyonel ekibimizle yanınızdayız.
                </p>
              </div>

              {/* İletişim ve Randevu Kartı (CTA) */}
              <div className="draft-contact-cta-card">
                <div className="cta-card-content">
                  <div className="cta-card-badge">
                    <ShieldCheck size={15} />
                    <span>Güvenliğiniz Bizim Önceliğimizdir</span>
                  </div>
                  <p className="cta-card-message font-medium">
                    Baca uygunluk muayenesi, baca sızdırmazlık raporu, akredite baca kontrolü ve yangın tesisatı denetimleri hakkında daha detaylı bilgi almak, randevu oluşturmak veya yasal süreçlerinizde profesyonel destek sağlamak için iletişim kanallarımızdan bize ulaşabilirsiniz.
                  </p>
                </div>
                <div className="cta-card-actions">
                  <button
                    type="button"
                    className="btn-draft-appointment font-medium"
                    onClick={onOpenAppointment}
                  >
                    <Calendar size={15} />
                    <span>Randevu Oluştur</span>
                  </button>
                  <a
                    href="tel:05367068125"
                    className="btn-draft-phone font-medium"
                  >
                    <Phone size={15} />
                    <span>0 (536) 706 81 25</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-draft-whatsapp font-medium"
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp İletişim</span>
                  </a>
                </div>
              </div>

              {/* İlçeler Listesi */}
              {city.districts && city.districts.length > 0 && (
                <div className="city-districts-area">
                  <span className="districts-label font-medium">
                    // {city.name} Aktif Hizmet Verilen Başlıca İlçeler:
                  </span>
                  <div className="districts-tags-list">
                    {city.districts.map((dst) => (
                      <span key={dst} className="district-tag-pill font-regular">
                        {dst}
                      </span>
                    ))}
                    <span className="district-tag-pill" style={{ opacity: 0.7 }}>
                      + Tüm {city.name} İlçeleri ve Köyleri
                    </span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* 5. BÖLGESEL HİZMET ÖZETİ (3 TEMEL HİZMET KARTI) */}
        <section className="city-services-section">
          <div className="container">

            <div className="city-section-header">
              <span className="city-section-tag">// BÖLGESEL DENETİM FAALİYETLERİ</span>
              <h2 className="city-section-title font-bold">
                {city.name} Bölgesel Baca Hizmetlerimiz
              </h2>
            </div>

            <div className="city-services-grid">

              {/* 1. SIZDIRMAZLIK TESTİ */}
              <div
                className="city-service-card"
                onClick={() => navigate('/hizmetler/baca-sizdirmazlik-testi')}
                role="button"
                tabIndex={0}
              >
                <div className="city-service-top">
                  <div className="city-service-icon-box">
                    <Gauge size={22} />
                  </div>
                  <h3 className="city-service-name">
                    {city.name} Sızdırmazlık Testi
                  </h3>
                  <p className="city-service-desc">
                    {city.name} ilindeki pozitif ve negatif basınçlı baca hatlarında kalibre dijital manometre cihazlarıyla sızıntı debisi tespiti ve {city.gasCompany} gaz açım onay raporu düzenlenmesi.
                  </p>
                </div>
                <div className="city-service-action">
                  <span className="city-action-text">Detaylı İncele</span>
                  <div className="city-action-arrow">
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>

              {/* 2. PROJE VE MONTAJ UYGUNLUK */}
              <div
                className="city-service-card"
                onClick={() => navigate('/hizmetler/proje-ve-montaj-uygunluk-muayenesi')}
                role="button"
                tabIndex={0}
              >
                <div className="city-service-top">
                  <div className="city-service-icon-box">
                    <FileCheck2 size={22} />
                  </div>
                  <h3 className="city-service-name">
                    {city.name} Proje Uygunluk Muayenesi
                  </h3>
                  <p className="city-service-desc">
                    {city.name} genelinde yeni binalar ve tesisler için TS EN 13384 kesit hesapları, lazerli çap ölçümü, malzeme et kalınlığı ve belediye iskan onay muayenesi.
                  </p>
                </div>
                <div className="city-service-action">
                  <span className="city-action-text">Detaylı İncele</span>
                  <div className="city-action-arrow">
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>

              {/* 3. PERİYODİK BACA KONTROLLERİ */}
              <div
                className="city-service-card"
                onClick={() => navigate('/hizmetler/periyodik-baca-kontrolleri')}
                role="button"
                tabIndex={0}
              >
                <div className="city-service-top">
                  <div className="city-service-icon-box">
                    <Camera size={22} />
                  </div>
                  <h3 className="city-service-name">
                    {city.name} Periyodik Baca Kontrolü
                  </h3>
                  <p className="city-service-desc">
                    Yüksek çözünürlüklü 360° endoskopik robotik kameralarla {city.name} konut ve işletmelerinde kurum birikimi ve tıkanıklıkların taranarak fotoğraflı resmi raporlanması.
                  </p>
                </div>
                <div className="city-service-action">
                  <span className="city-action-text">Detaylı İncele</span>
                  <div className="city-action-arrow">
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 6. AKSİYON: FİYAT TEKLİFİ VE DOĞRUDAN ÇAĞRI BÖLÜMÜ */}
        <section className="city-action-section">
          <div className="container">

            <div className="action-section-header">
              <span className="action-header-badge font-medium">
                <Clock size={13} />
                <span>AYNI GÜN MOBİL SAHA YÖNLENDİRMESİ</span>
              </span>
              <h2 className="action-header-title font-bold">
                "{city.name} bölgesi için hemen fiyat teklifi alın"
              </h2>
            </div>

            <div className="city-action-split-grid">

              {/* SOL: HIZLI İLETİŞİM FORMU */}
              <div className="city-contact-form-card">
                {!isSubmitted ? (
                  <form onSubmit={handleFormSubmit}>
                    <h3 className="city-form-title">{city.name} Hızlı Fiyat ve Keşif Talep Formu</h3>
                    <p className="city-form-desc">
                      Aşağıdaki formu doldurun, {city.name} yetkili mühendisimiz 15 dakika içinde tesisinize özel fiyat ve randevu takvimi ile arasın.
                    </p>

                    <div className="city-form-grid">
                      {/* Ad Soyad */}
                      <div>
                        <label className="city-input-label">Ad Soyad / Firma</label>
                        <input
                          type="text"
                          required
                          placeholder="Örn: Mehmet Özkan"
                          className="city-input-field"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                      </div>

                      {/* Telefon */}
                      <div>
                        <label className="city-input-label">Telefon Numarası</label>
                        <input
                          type="tel"
                          required
                          placeholder="0 (5XX) XXX XX XX"
                          className="city-input-field"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      {/* İlçe */}
                      <div>
                        <label className="city-input-label">{city.name} İlçesi</label>
                        <input
                          type="text"
                          placeholder={`Örn: ${city.districts ? city.districts[0] : 'Merkez'}`}
                          className="city-input-field"
                          value={formData.district}
                          onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        />
                      </div>

                      {/* Hizmet Türü */}
                      <div>
                        <label className="city-input-label">Talep Edilen Hizmet</label>
                        <select
                          className="city-select-field"
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        >
                          <option value="Baca Sızdırmazlık Testi">Baca Sızdırmazlık Testi</option>
                          <option value="Proje ve Montaj Uygunluk">Proje ve Montaj Uygunluk</option>
                          <option value="Periyodik Baca Kontrolü">Periyodik Baca Kontrolü</option>
                          <option value="Gaz Açım Uygunluk Raporu">Gaz Açım Uygunluk Raporu</option>
                        </select>
                      </div>

                      {/* Not */}
                      <div className="form-full-width">
                        <label className="city-input-label">Ek Bilgi / Tesis Notu (Opsiyonel)</label>
                        <textarea
                          rows="2"
                          placeholder="Kazan tipi, kat sayısı veya özel talepleriniz..."
                          className="city-textarea-field"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                      </div>
                    </div>

                    <button type="submit" className="city-submit-btn">
                      <Send size={16} />
                      <span>{city.name} İçin Teklif Talebini Gönder</span>
                    </button>
                  </form>
                ) : (
                  <div className="city-form-success">
                    <div className="city-success-icon">
                      <CheckCircle2 size={36} />
                    </div>
                    <h4 style={{ fontSize: '20px', color: '#ffffff', margin: 0 }}>
                      Talebiniz Başarıyla Alındı
                    </h4>
                    <p style={{ fontSize: '14px', color: '#9ea0ad', margin: 0 }}>
                      Sayın <strong>{formData.fullName}</strong>, <strong>{city.name}</strong> bölgesindeki <strong>{formData.serviceType}</strong> başvurunuz saha operasyon ekibimize iletildi.
                    </p>
                    <p style={{ fontSize: '13px', color: '#10b981', margin: 0 }}>
                      ✓ 15 dakika içinde <strong>{formData.phone}</strong> numaranızdan dönüş yapılacaktır.
                    </p>
                    <button
                      type="button"
                      className="region-tab-btn"
                      style={{ marginTop: '14px' }}
                      onClick={() => setIsSubmitted(false)}
                    >
                      Yeni Talep Gönder
                    </button>
                  </div>
                )}
              </div>

              {/* SAĞ: DOĞRUDAN ÇAĞRI VE WHATSAPP BUTONLARI */}
              <div className="city-direct-action-card">
                <div className="direct-card-top">
                  <h4>{city.name} Bölge Temsilciliği ile İletişim</h4>
                  <p>
                    {city.name} sınırları içindeki acil gaz açım denetimleri ve teknik uygunluk kontrolleri için doğrudan mühendislerimizle görüşün.
                  </p>

                  <div className="direct-perks-list">
                    <div className="direct-perk-row">
                      <ShieldCheck size={16} className="perk-check-icon" />
                      <span>{city.gasCompany} Şartnamesine %100 Uyum</span>
                    </div>
                    <div className="direct-perk-row">
                      <ShieldCheck size={16} className="perk-check-icon" />
                      <span>Islak İmzalı & E-Karekodlu Resmi Rapor</span>
                    </div>
                    <div className="direct-perk-row">
                      <ShieldCheck size={16} className="perk-check-icon" />
                      <span>Kalibre Dijital Diferansiyel Manometre</span>
                    </div>
                    <div className="direct-perk-row">
                      <ShieldCheck size={16} className="perk-check-icon" />
                      <span>TS EN 13384 ve TS 11388 Standartlarına Tam Uyum</span>
                    </div>
                  </div>
                </div>

                <div className="direct-buttons-col">
                  {/* Telefon Butonu */}
                  <a
                    href="tel:05367068125"
                    className="city-call-btn"
                    title={`${city.name} Ekibimizi Arayın`}
                  >
                    <Phone size={18} />
                    <span>{city.name} Ekibimizi Arayın: 0 (536) 706 81 25</span>
                  </a>

                  {/* WhatsApp Butonu */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="city-whatsapp-btn"
                    title={`${city.name} WhatsApp Hattı`}
                  >
                    <MessageCircle size={18} />
                    <span>{city.name} WhatsApp Canlı Destek</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 7. DİĞER İLLERE GEÇİŞ KÖPRÜSÜ */}
        {regionalNeighbors.length > 0 && (
          <section className="city-neighbors-section">
            <div className="container">
              <div className="neighbors-header">
                <h4>{city.region} Bölgesindeki Diğer Hizmet Noktalarımız:</h4>
                <button
                  type="button"
                  className="back-to-all-cities-link"
                  onClick={() => navigate('/iller')}
                >
                  <MapPin size={14} />
                  <span>Tüm 81 İli Görüntüle</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>

              <div className="neighbors-chips-grid">
                {regionalNeighbors.map((neighbor) => (
                  <button
                    key={neighbor.slug}
                    type="button"
                    className="neighbor-chip"
                    onClick={() => navigate(`/iller/${neighbor.slug}`)}
                  >
                    <strong>{neighbor.plate}</strong> - {neighbor.name}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>

      {/* 8. FOOTER */}
      <Footer onOpenAppointment={onOpenAppointment} />
    </div>
  );
}
