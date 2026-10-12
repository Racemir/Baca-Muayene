/* ==========================================================================
   SAYFA: PERİYODİK BACA KONTROLLERİ (PERIODICINSPECTIONPAGE.JSX)
   Açıklama: 2. Hizmet sayfası.
   İçerik:
   1. Ekmek Kırıntısı (Breadcrumb)
   2. Tepe Alanı ve Tepe Görsel (Robotik Endoskopik Kamera)
   3. Baca Kontrolleri Nedir?
   4. Neden Yasal Olarak Yapılması Zorunludur?
   5. Robotik Muayene Süreci ve Avantajları
   6. Tesis Türlerine Göre Yasal Kontrol Periyotları Tablosu
   7. Hızlı Randevu & İletişim Çağrısı (CTA)
   8. Diğer Hizmetlere Geçiş Bağlantıları
   ========================================================================== */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  Camera, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowUpRight, 
  Scan,
  Eye,
  CalendarCheck,
  Flame
} from 'lucide-react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import SeoHead from '../../components/Common/SeoHead';
import imgPeriyodik from '../../assets/images/service-periyodik-kontrol.jpg';
import imgSizdirmazlik from '../../assets/images/service-sizdirmazlik.jpg';
import imgProjeMontaj from '../../assets/images/service-proje-montaj.jpg';
import './ServiceDetailPage.css';

export default function PeriodicInspectionPage({ onOpenAppointment }) {
  const navigate = useNavigate();

  return (
    <div className="service-page-layout">
      {/* Periyodik Muayene SEO Tanımı */}
      <SeoHead
        title="Periyodik Baca Kontrolü & Robotik Kamera Muayenesi | Baca Rapor"
        description="Binaların Yangından Korunması Yönetmeliği gereğince yılda 1 zorunlu periyodik baca kontrolü. 360° robotik kameralı kurum ve çekiş denetimi."
        keywords="periyodik baca kontrolü, baca kamera kontrolü, periyodik baca muayene raporu, merkezi kazan dairesi baca muayenesi"
        canonicalUrl="https://bacarapor.com/hizmetler/periyodik-baca-kontrolleri"
      />

      {/* 1. ÜST SABİT NAVİGASYON */}
      <Navbar onOpenAppointment={onOpenAppointment} />

      <main className="service-page-main">
        
        {/* 2. EKMEK KIRINTISI (BREADCRUMB) */}
        <div className="service-breadcrumb-bar">
          <div className="container">
            <nav className="service-breadcrumb" aria-label="Ekmek Kırıntısı">
              <button 
                type="button" 
                className="service-breadcrumb-link"
                onClick={() => navigate('/')}
              >
                <Home size={13} />
                <span>Ana Sayfa</span>
              </button>
              <ChevronRight size={13} className="service-breadcrumb-separator" />
              <button 
                type="button" 
                className="service-breadcrumb-link"
                onClick={() => navigate('/#hizmetler')}
              >
                <span>Hizmetler</span>
              </button>
              <ChevronRight size={13} className="service-breadcrumb-separator" />
              <span className="service-breadcrumb-current">Periyodik Baca Kontrolleri</span>
            </nav>
          </div>
        </div>

        {/* 3. TEPE BÖLÜMÜ & TEPE GÖRSEL */}
        <section className="service-hero-section">
          <div className="container">
            <div className="service-hero-grid">
              
              {/* Sol: Başlık, Parametreler ve Aksiyon */}
              <div className="service-hero-content">
                <div className="service-badge-row">
                  <span className="service-pill-badge">
                    <Camera size={14} />
                    <span>ROBOTİK KAMERA SİSTEMİ</span>
                  </span>
                  <span className="service-standard-code">YILLIK YASAL DENETİM</span>
                </div>

                <h1 className="service-hero-title">
                  Periyodik Baca <br />
                  <span className="text-secondary">Kontrolleri ve Robotik Muayene</span>
                </h1>

                <p className="service-hero-lead">
                  Yüksek çözünürlüklü 360° endoskopik kamera robotlarıyla baca içi deformasyon, aşınma, kurum birikimi ve tıkanıklıkların kırmadan dökmeden taranarak fotoğraflı raporlanması.
                </p>

                {/* Hızlı Parametre Kutucukları */}
                <div className="service-specs-strip">
                  <div className="spec-strip-card">
                    <span className="spec-strip-label">Kontrol Teknolojisi</span>
                    <span className="spec-strip-val">360° HD Robotik Endoskopi</span>
                  </div>
                  <div className="spec-strip-card">
                    <span className="spec-strip-label">Yasal Periyot</span>
                    <span className="spec-strip-val">Yılda En Az 1 Kez Zorunlu</span>
                  </div>
                  <div className="spec-strip-card">
                    <span className="spec-strip-label">Raporlama Türü</span>
                    <span className="spec-strip-val">Fotoğraflı Resmi Denetim Raporu</span>
                  </div>
                </div>

                {/* Aksiyon Butonları */}
                <div className="service-hero-actions">
                  <button 
                    type="button" 
                    className="service-primary-btn"
                    onClick={onOpenAppointment}
                  >
                    <span>Periyodik Kontrol Randevusu Al</span>
                    <ArrowUpRight size={16} />
                  </button>
                  <a 
                    href="#kontrol-nedir" 
                    className="service-secondary-btn"
                  >
                    <span>Mevzuat Detayları</span>
                  </a>
                </div>
              </div>

              {/* Sağ: TEPE GÖRSEL */}
              <div className="service-hero-media">
                <img 
                  src={imgPeriyodik} 
                  alt="Endoskopik Robotik Kamera ile Periyodik Baca Kontrolü" 
                  className="hero-main-img"
                  loading="eager"
                />
                <div className="hero-image-overlay"></div>
                <div className="hero-media-badge-tag">
                  <div className="badge-tag-info">
                    <span className="badge-status-dot"></span>
                    <span className="badge-tag-text">Endoskopik Optik Tarama Aktif</span>
                  </div>
                  <span className="badge-tag-meta">360° Pan & Tilt Sensör</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. ANA İÇERİK: "BACA KONTROLLERİ NEDİR?" VE "NEDEN YASAL OLARAK ZORUNLUDUR?" */}
        <div className="service-content-wrapper">
          <div className="container">

            {/* BÖLÜM 1: PERİYODİK BACA KONTROLLERİ NEDİR? */}
            <section id="kontrol-nedir" className="service-detail-block">
              <div className="detail-block-header">
                <span className="block-tag">// KAPSAM VE ÇALIŞMA METODOLOJİSİ</span>
                <h2 className="block-title">Periyodik Baca Kontrolleri Nedir?</h2>
              </div>

              <div className="what-is-grid">
                <div className="what-is-text">
                  <p>
                    <strong>Periyodik Baca Kontrolleri</strong>; binalarda, fabrikalarda, restoranlarda ve ticari tesislerde aktif olarak çalışan katı, sıvı, doğalgaz yakıtlı kazan, kombi, brülör ve havalandırma bacalarının yapısal bütünlüğünün, çekiş kabiliyetinin ve hijyenik durumunun düzenli aralıklarla uzman mühendisler tarafından denetlenmesi işlemidir.
                  </p>

                  <div className="highlight-quote-card">
                    <p>
                      "Geleneksel yöntemlerin aksine, modern denetimlerde kırma-dökme yapılmaz. 360 derece döner başlıklı optik robot kameralar baca hattına sürülerek tüm iç yüzey santim santim taranır ve yüksek çözünürlüklü dijital video/fotoğraf kaydı alınır."
                    </p>
                  </div>

                  <p>
                    Zaman içerisinde baca kanallarında aşırı ısınma, asit korozyonu, harç dökülmeleri, baca bağlantı noktalarında ayrılmalar, kuş ölüleri, yuvalar veya aşırı kurum/yağ tabakaları oluşur. Bu olumsuzluklar dışarıdan gözle tespit edilemez.
                  </p>

                  <p>
                    Periyodik kontrol sayesinde baca çapının daralıp daralmadığı, yangın riski taşıyan kurum tortuları ve gaz sızıntısına yol açabilecek iç deformasyonlar henüz bir tehlike yaratmadan tespit edilir ve çözümlenir.
                  </p>
                </div>

                {/* Sağ Özellik Kartları */}
                <div className="what-is-features">
                  <div className="feature-point-card">
                    <div className="feature-point-icon">
                      <Scan size={20} />
                    </div>
                    <div className="feature-point-body">
                      <h4>Kırmadan Robotik Muayene</h4>
                      <p>Kablo ve robotik tekerlekli kamera sistemlerimiz duvarlara zarar vermeden baca içine girerek milimetrik hasar tespiti yapar.</p>
                    </div>
                  </div>

                  <div className="feature-point-card">
                    <div className="feature-point-icon">
                      <Eye size={20} />
                    </div>
                    <div className="feature-point-body">
                      <h4>Fotoğraflı ve Belgeli Rapor</h4>
                      <p>Bacada tespit edilen tüm çatlaklar, paslanmalar ve kurum seviyesi yüksek çözünürlüklü fotoğraflarla belgelenir.</p>
                    </div>
                  </div>

                  <div className="feature-point-card">
                    <div className="feature-point-icon">
                      <Flame size={20} />
                    </div>
                    <div className="feature-point-body">
                      <h4>Yangın ve Zehirlenme Koruması</h4>
                      <p>Geri tepme ve kurum parlama yangınları önlenerek bina sakinlerinin ve çalışanların can güvenliği teminat altına alınır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* BÖLÜM 2: NEDEN YASAL OLARAK YAPILMASI ZORUNLUDUR? */}
            <section id="yasal-zorunluluk" className="legal-obligation-block">
              <div className="legal-header">
                <span className="legal-tag">
                  <AlertTriangle size={13} />
                  <span>YASAL ZORUNLULUK VE YAPTIRIMLAR</span>
                </span>
                <h2 className="legal-title">Periyodik Baca Kontrolleri Neden Yasal Olarak Yapılması Zorunludur?</h2>
                <p className="legal-lead">
                  Türkiye Cumhuriyeti yangın mevzuatı ve iş sağlığı kanunlarına göre baca kontrolleri yasal bir yükümlülüktür; yapılmaması durumunda ağır cezalar ve kapatma yaptırımları uygulanır.
                </p>
              </div>

              <div className="legal-grid">
                {/* 1. Yasal Madde: Yangın Yönetmeliği 58. Madde */}
                <div className="legal-card">
                  <div className="legal-card-num">
                    <span>Mevzuat 01</span>
                    <ShieldCheck size={16} />
                  </div>
                  <h3 className="legal-card-title">Binaların Yangından Korunması Yönetmeliği</h3>
                  <p className="legal-card-desc">
                    58. Madde uyarınca: Doğalgazlı ve sıvı yakıtlı bacalar <strong>yılda en az 1 kez</strong>, katı yakıtlı bacalar <strong>yılda 2 kez</strong>, restoran ve endüstriyel mutfak bacaları ise <strong>yılda 3-4 kez</strong> yetkili kurumlarca denetlenmek zorundadır.
                  </p>
                  <span className="legal-card-law">BYKHY Madde 58 Zorunluluğu</span>
                </div>

                {/* 2. Yasal Madde: İşyeri Açma ve Çalışma Ruhsatı */}
                <div className="legal-card">
                  <div className="legal-card-num">
                    <span>Mevzuat 02</span>
                    <CheckCircle2 size={16} />
                  </div>
                  <h3 className="legal-card-title">Belediye ve İşyeri Ruhsat Uygunluğu</h3>
                  <p className="legal-card-desc">
                    İşletmelerin, otellerin, fırınların ve fabrikaların belediye işyeri açma ve çalışma ruhsatı alabilmesi ve resmi denetimlerden geçebilmesi için periyodik baca kontrol raporu ibrazı şarttır.
                  </p>
                  <span className="legal-card-law">İşyeri Ruhsatı & İSG Şartı</span>
                </div>

                {/* 3. Yasal Madde: Sigorta Hasar Reddi Riski */}
                <div className="legal-card">
                  <div className="legal-card-num">
                    <span>Mevzuat 03</span>
                    <CalendarCheck size={16} />
                  </div>
                  <h3 className="legal-card-title">Sigorta Şirketleri Hasar Teminatı</h3>
                  <p className="legal-card-desc">
                    Olası bir baca yangınında veya karbonmonoksit sızıntısında, sigorta eksperi geriye dönük son 12 aya ait periyodik kontrol raporunu inceler. Rapor bulunmaması durumunda tüm tazminat talepleri reddedilir.
                  </p>
                  <span className="legal-card-law">Türk Ticaret Kanunu & Yangın Poliçesi</span>
                </div>
              </div>

              {/* Yasal Uyarı Kutusu */}
              <div className="legal-warning-banner">
                <div className="warning-icon-box">
                  <AlertTriangle size={22} />
                </div>
                <div className="warning-text">
                  <h5>Yöneticilerin ve İşverenlerin Şahsi Sorumluluğu</h5>
                  <p>
                    Apartman yöneticileri ve işletme sahipleri, periyodik baca denetimini yaptırmadıkları takdirde yaşanabilecek can kaybı veya yaralanmalarda Türk Ceza Kanunu kapsamında "taksirle ölüme veya yaralanmaya sebebiyet verme" suçundan doğrudan hukuki ve cezai olarak sorumlu tutulmaktadır.
                  </p>
                </div>
              </div>
            </section>

            {/* BÖLÜM 3: ROBOTİK KONTROL AŞAMALARI */}
            <section className="process-steps-block">
              <div className="detail-block-header">
                <span className="block-tag">// 4 AŞAMALI İNCELEME</span>
                <h2 className="block-title">Periyodik Kontrol Nasıl Gerçekleştirilir?</h2>
              </div>

              <div className="process-steps-grid">
                <div className="process-step-item">
                  <div className="step-num-badge">01</div>
                  <h4 className="step-item-title">Ön Keşif ve Güvenlik</h4>
                  <p className="step-item-desc">
                    Kazan dairesi, cihaz bağlantı boruları ve çatı üstü baca çıkışları yerinde incelenerek sisteme uygun kamera robotu seçilir.
                  </p>
                </div>

                <div className="process-step-item">
                  <div className="step-num-badge">02</div>
                  <h4 className="step-item-title">Robotik Kamera Taraması</h4>
                  <p className="step-item-desc">
                    Yüksek çözünürlüklü 360° döner lensli kamera baca içine indirilerek her metredeki yüzey durumu canlı ekrandan izlenir.
                  </p>
                </div>

                <div className="process-step-item">
                  <div className="step-num-badge">03</div>
                  <h4 className="step-item-title">Çekiş & Gaz Analizi</h4>
                  <p className="step-item-desc">
                    Baca çekiş gücü (Pa) ve gaz kaçak ölçümleri yapılarak sistemin hidrolik ve aerodinamik performansı test edilir.
                  </p>
                </div>

                <div className="process-step-item">
                  <div className="step-num-badge">04</div>
                  <h4 className="step-item-title">Resmi Muayene Raporu</h4>
                  <p className="step-item-desc">
                    Tüm kamera fotoğrafları, teknik bulgular ve ıslak imzalı/karekodlu resmi periyodik denetim sertifikası hazırlanıp teslim edilir.
                  </p>
                </div>
              </div>
            </section>

            {/* BÖLÜM: PERİYODİK KONTROL ÖNCESİ HAZIRLIK VE SIZDIRMAZLIK İLKESİ */}
            <div className="prep-category-card highlight-card" style={{ marginBottom: '90px' }}>
              <div className="prep-card-header">
                <div>
                  <span className="prep-card-tag font-semibold">// TS EN ISO/IEC 17020 PERİYODİK KONTROL ESASLARI (BKR-T-03)</span>
                  <h3 className="prep-card-title font-bold" style={{ fontSize: '22px' }}>
                    Periyodik Muayene Öncesi Hazırlıklar ve Standart Kapsamı
                  </h3>
                </div>
              </div>

              <ul className="prep-requirements-list font-regular" style={{ gap: '16px' }}>
                <li>
                  <strong>Bacanın Temizlenmiş Olması:</strong> Sağlıklı kamera teşhisi ve optik tarama yapılabilmesi için kontrol öncesinde baca kanallarının temizliği yaptırılmış olmalıdır.
                </li>
                <li>
                  <strong>Sızdırmazlık Testi Uygulama Esası:</strong> Akreditasyon talimatı gereğince; standart periyodik kontrollerde 360° robot kamera, çekiş gücü ve korozyon/çatlak muayenesi uygulanır. <em>Sızdırmazlık testi ise müşterinin talebine istinaden opsiyonel olarak gerçekleştirilir.</em>
                </li>
                <li>
                  <strong>Cihaz Etiket ve Katalog Bilgileri:</strong> Bacaya bağlı kazan, kombi veya brülörün üzerinde teknik veri etiketinin okunur olması veya teknik kataloglarının hazır bulundurulması gerekir.
                </li>
                <li>
                  <strong>Erişim ve Güvenlik:</strong> Baca müdahale kapaklarına, çatı üstü çıkışlarına ve kazan dairesine güvenli erişim için merdiven veya platform müşteri tarafından hazır bulundurulmalıdır.
                </li>
              </ul>
            </div>

            {/* BÖLÜM 4: MEVZUATA GÖRE KONTROL PERİYOTLARI TABLOSU */}
            <div className="standards-table-card">
              <div className="standards-table-header">
                <h3>Yasal Muayene ve Denetim Sıklıkları (BYKHY Madde 58)</h3>
                <p>Yakıt türü ve bina kullanım amacına göre kanunen belirlenmiş asgari kontrol takvimi:</p>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table className="tech-spec-table">
                  <thead>
                    <tr>
                      <th>Tesis ve Cihaz Türü</th>
                      <th>Yakıt Cinsi</th>
                      <th>Yasal Asgari Kontrol Sıklığı</th>
                      <th>Zorunlu Kurum Onayı</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Merkezi Isıtma & Siteler</strong></td>
                      <td>Doğalgaz / LNG</td>
                      <td>Yılda en az 1 kez</td>
                      <td>İGDAŞ / Gaz Dağıtım Şirketleri</td>
                    </tr>
                    <tr>
                      <td><strong>Sanayi & Üretim Tesisleri</strong></td>
                      <td>Katı / Sıvı / Gaz</td>
                      <td>Yılda en az 1-2 kez</td>
                      <td>Çalışma Bakanlığı (İSG) / Denetim Kurulları</td>
                    </tr>
                    <tr>
                      <td><strong>Restoran, Otel, Mutfaklar</strong></td>
                      <td>Davlumbaz & Yağ Kanalı</td>
                      <td>3 ayda 1 kez (Yılda 4 kez)</td>
                      <td>Belediye Ruhsat & Hijyen Denetimi</td>
                    </tr>
                    <tr>
                      <td><strong>Kömürlü & Katı Yakıtlı Sistemler</strong></td>
                      <td>Kömür / Odun / Pelet</td>
                      <td>Yılda en az 2 kez (Kış başı & ortası)</td>
                      <td>Çevre ve Şehircilik Denetimi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* BÖLÜM 5: ÇAĞRI VE RANDEVU BANNERI */}
            <div className="service-cta-banner">
              <div className="service-cta-text">
                <h3>Yıllık Yasal Baca Kontrolünüzün Tarihi Geçmesin</h3>
                <p>
                  Ceza ve gaz kesintisi riskleriyle karşılaşmamak için tesisinizin yıllık periyodik kontrolünü hemen yaptırın, resmi raporunuzu aynı gün teslim alın.
                </p>
              </div>
              <div className="service-cta-buttons">
                <button 
                  type="button" 
                  className="service-primary-btn"
                  onClick={onOpenAppointment}
                >
                  <span>Hemen Randevu Al</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>

            {/* BÖLÜM 6: DİĞER HİZMETLERİMİZ */}
            <section className="other-services-section">
              <div className="other-services-header">
                <div>
                  <span className="block-tag">// DİĞER HİZMETLERİMİZ</span>
                  <h3>İlgili Muayene ve Denetim Hizmetleri</h3>
                </div>
                <p>Tüm baca denetimlerinizi tek merkezden akredite olarak tamamlayın.</p>
              </div>

              <div className="other-services-grid">
                <div 
                  className="other-service-card"
                  onClick={() => navigate('/hizmetler/baca-sizdirmazlik-testi')}
                >
                  <div className="other-card-thumb">
                    <img src={imgSizdirmazlik} alt="Baca Sızdırmazlık Testi" />
                  </div>
                  <div className="other-card-body">
                    <span>BASINÇ ANALİZİ</span>
                    <h4>Baca Sızdırmazlık Testi</h4>
                    <p>Dijital manometre cihazlarıyla pozitif/negatif basınçlı sızıntı debisi tespiti.</p>
                  </div>
                  <div className="other-card-arrow">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div 
                  className="other-service-card"
                  onClick={() => navigate('/hizmetler/proje-ve-montaj-uygunluk-muayenesi')}
                >
                  <div className="other-card-thumb">
                    <img src={imgProjeMontaj} alt="Proje ve Montaj Uygunluk Muayenesi" />
                  </div>
                  <div className="other-card-body">
                    <span>MÜHENDİSLİK DENETİMİ</span>
                    <h4>Proje ve Montaj Uygunluk Muayenesi</h4>
                    <p>Baca güzergahı, çap hesapları, malzeme et kalınlığı ve montaj uygunluk kontrolü.</p>
                  </div>
                  <div className="other-card-arrow">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>

      </main>

      {/* 5. ALT BİLGİ FOOTER */}
      <Footer onOpenAppointment={onOpenAppointment} />
    </div>
  );
}
