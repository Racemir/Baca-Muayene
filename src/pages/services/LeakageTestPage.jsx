/* ==========================================================================
   SAYFA: BACA SIZDIRMAZLIK TESTİ (LEAKAGETESTPAGE.JSX)
   Açıklama: 1. Hizmet sayfası.
   İçerik:
   1. Ekmek Kırıntısı (Breadcrumb)
   2. Tepe Alanı ve Tepe Görsel (Dijital Manometre Test Cihazı)
   3. Sızdırmazlık Testi Nedir?
   4. Neden Yasal Olarak Zorunludur?
   5. Test Nasıl Yapılır? (4 Aşamalı Mühendislik Süreci)
   6. EN 1443 Basınç Sınıfları Tablosu
   7. Hızlı Randevu & İletişim Çağrısı (CTA)
   8. Diğer Hizmetlere Geçiş Bağlantıları
   ========================================================================== */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  Gauge, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowUpRight, 
  Activity,
  Zap,
  SlidersHorizontal,
  Flame
} from 'lucide-react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import SeoHead from '../../components/Common/SeoHead';
import { getStaticSeo } from '../../seo/routes';
import { absUrl } from '../../seo/site';
import { breadcrumbSchema, serviceSchema } from '../../seo/schema';
import imgSizdirmazlik from '../../assets/images/service-sizdirmazlik.webp';
import imgProjeMontaj from '../../assets/images/service-proje-montaj.webp';
import imgPeriyodik from '../../assets/images/service-periyodik-kontrol.webp';
import './ServiceDetailPage.css';

export default function LeakageTestPage({ onOpenAppointment }) {
  const navigate = useNavigate();
  const pageSeo = getStaticSeo('/hizmetler/baca-sizdirmazlik-testi');

  return (
    <div className="service-page-layout">
      <SeoHead
        title={pageSeo.title}
        description={pageSeo.description}
        keywords={pageSeo.keywords}
        canonicalUrl={absUrl(pageSeo.path)}
        schemaData={{
          '@context': 'https://schema.org',
          '@graph': [
            breadcrumbSchema([
              { name: 'Ana Sayfa', url: absUrl('/') },
              { name: 'Baca Sızdırmazlık Testi', url: absUrl(pageSeo.path) },
            ]),
            serviceSchema({
              name: 'Baca Sızdırmazlık Testi',
              description: pageSeo.description,
              url: absUrl(pageSeo.path),
              serviceType: 'Baca sızdırmazlık ve basınç kaçağı testi',
            }),
          ],
        }}
      />

      {/* 1. ÜST SABİT NAVİGASYON */}
      <Navbar onOpenAppointment={onOpenAppointment} />

      <main className="service-page-main">
        
        {/* 2. EKMEK KIRINTISI (BREADCRUMB) */}
        <div className="service-breadcrumb-bar">
          <div className="container">
            <nav className="service-breadcrumb" aria-label="Ekmek Kırıntısı">
              <Link to="/" className="service-breadcrumb-link">
                <Home size={13} />
                <span>Ana Sayfa</span>
              </Link>
              <ChevronRight size={13} className="service-breadcrumb-separator" />
              <Link to="/#hizmetler" className="service-breadcrumb-link">
                <span>Hizmetler</span>
              </Link>
              <ChevronRight size={13} className="service-breadcrumb-separator" />
              <span className="service-breadcrumb-current">Baca Sızdırmazlık Testi</span>
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
                    <Gauge size={14} />
                    <span>EN 13384 UYUMLU</span>
                  </span>
                  <span className="service-standard-code">TS 11388 / TS EN 1856-1</span>
                </div>

                <h1 className="service-hero-title">
                  Baca Sızdırmazlık <br />
                  <span className="text-secondary">Testi ve Basınç Doğrulaması</span>
                </h1>

                <p className="service-hero-lead">
                  Pozitif ve negatif basınçlı baca hatlarında kalibre edilmiş dijital mikro-manometre cihazlarıyla sızıntı debisi tespiti ve EN 1443 standartlarında sızdırmazlık sınıfı doğrulaması.
                </p>

                {/* Hızlı Parametre Kutucukları */}
                <div className="service-specs-strip">
                  <div className="spec-strip-card">
                    <span className="spec-strip-label">Basınç Aralığı</span>
                    <span className="spec-strip-val">N1, P1 ve H1 Uyumlu (40 Pa - 5000 Pa)</span>
                  </div>
                  <div className="spec-strip-card">
                    <span className="spec-strip-label">Ölçüm Cihazı</span>
                    <span className="spec-strip-val">Dijital Diferansiyel Manometre</span>
                  </div>
                  <div className="spec-strip-card">
                    <span className="spec-strip-label">Rapor Durumu</span>
                    <span className="spec-strip-val">Yetkili Gaz Dağıtım Onaylı</span>
                  </div>
                </div>

                {/* Aksiyon Butonları */}
                <div className="service-hero-actions">
                  <button 
                    type="button" 
                    className="service-primary-btn"
                    onClick={onOpenAppointment}
                  >
                    <span>Test Randevusu Al</span>
                    <ArrowUpRight size={16} />
                  </button>
                  <a 
                    href="#sizdirmazlik-nedir" 
                    className="service-secondary-btn"
                  >
                    <span>Teknik Detayları İncele</span>
                  </a>
                </div>
              </div>

              {/* Sağ: TEPE GÖRSEL */}
              <div className="service-hero-media">
                <img 
                  src={imgSizdirmazlik} 
                  alt="Dijital manometre ile baca sızdırmazlık testi" 
                  className="hero-main-img"
                  width={900}
                  height={720}
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />
                <div className="hero-image-overlay"></div>
                <div className="hero-media-badge-tag">
                  <div className="badge-tag-info">
                    <span className="badge-status-dot"></span>
                    <span className="badge-tag-text">Dijital Basınç & Kaçak Ölçümü</span>
                  </div>
                  <span className="badge-tag-meta">Canlı Saha Kalibrasyonu</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. ANA İÇERİK: "SIZDIRMAZLIK NEDİR?" VE "NEDEN YASAL OLARAK ZORUNLUDUR?" */}
        <div className="service-content-wrapper">
          <div className="container">

            {/* BÖLÜM 1: BACA SIZDIRMAZLIK TESTİ NEDİR? */}
            <section id="sizdirmazlik-nedir" className="service-detail-block">
              <div className="detail-block-header">
                <span className="block-tag">// TEKNİK TANIM VE ÇALIŞMA PRENSİBİ</span>
                <h2 className="block-title">Baca Sızdırmazlık Testi Nedir?</h2>
              </div>

              <div className="what-is-grid">
                <div className="what-is-text">
                  <p>
                    <strong>Baca Sızdırmazlık Testi</strong>; kazan, kombi, jeneratör, fırın veya endüstriyel yakıcı cihazlardan çıkan zehirli atık gaz ve dumanı tahliye eden baca kanallarının, iç basınç altında dış ortama veya bina yaşam alanlarına gaz kaçırıp kaçırmadığını sayısal olarak doğrulayan hassas bir mühendislik testidir.
                  </p>

                  <div className="highlight-quote-card">
                    <p>
                      "Test, baca hattının iki ucunun hava sızdırmaz test balonlarıyla kapatılması, hatta yapay kontrollü test basıncı uygulanması ve meydana gelen kaçak debisinin dijital sensörlerle EN 1443 standart sınırlarıyla karşılaştırılması esasına dayanır."
                    </p>
                  </div>

                  <p>
                    Özellikle modern yoğuşmalı kaskad kazanlarda ve basınçlı atık gaz sistemlerinde bacalar pozitif basınç altında (P1 veya H1 sınıfı) çalışır. Bu sistemlerde baca cidarlarında veya ek yerlerindeki en ufak bir conta yıpranması, montaj hatası veya çatlak; atık gazın ve <strong>ölümcül Karbonmonoksit (CO)</strong> gazının bina şaftlarına, kazan dairelerine veya havalandırma kanallarına dolmasına neden olur.
                  </p>

                  <p>
                    Sızdırmazlık testi, sadece görsel bir kontrol değil; kalibre diferansiyel manometrelerle yapılan, metrekare başına kaçan hava miktarını (VL) ölçen ve baca hattının güvenliğini matematiksel olarak kanıtlayan bilimsel bir ölçüm yöntemidir.
                  </p>
                </div>

                {/* Sağ Özellik Kartları */}
                <div className="what-is-features">
                  <div className="feature-point-card">
                    <div className="feature-point-icon">
                      <Activity size={20} />
                    </div>
                    <div className="feature-point-body">
                      <h4>Diferansiyel Basınç Ölçümü</h4>
                      <p>Wöhler DP 600 ve kalibreli cihazlarımızla baca hattı milibar ve Pascal hassasiyetinde basınçlandırılarak kaçak debisi ölçülür.</p>
                    </div>
                  </div>

                  <div className="feature-point-card">
                    <div className="feature-point-icon">
                      <Flame size={20} />
                    </div>
                    <div className="feature-point-body">
                      <h4>CO ve Zehirli Gaz İzolasyonu</h4>
                      <p>Yanma sonucu oluşan karbonmonoksit ve asidik baca gazlarının bina içi şaftlara yayılma riski %100 oranında bertaraf edilir.</p>
                    </div>
                  </div>

                  <div className="feature-point-card">
                    <div className="feature-point-icon">
                      <SlidersHorizontal size={20} />
                    </div>
                    <div className="feature-point-body">
                      <h4>EN 1443 Basınç Doğrulaması</h4>
                      <p>Bacalar N1 (40 Pa), P1 (200 Pa) veya H1 (5000 Pa) basınç sınıflarına tam uyumlu olarak test edilerek uygunluk sertifikası düzenlenir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* BÖLÜM 2: NEDEN YASAL OLARAK ZORUNLUDUR? */}
            <section id="yasal-zorunluluk" className="legal-obligation-block">
              <div className="legal-header">
                <span className="legal-tag">
                  <AlertTriangle size={13} />
                  <span>YASAL MEVZUAT VE ZORUNLULUK</span>
                </span>
                <h2 className="legal-title">Baca Sızdırmazlık Testi Neden Yasal Olarak Zorunludur?</h2>
                <p className="legal-lead">
                  Baca sızdırmazlık testi isteğe bağlı bir kontrol değil; can güvenliği, yangın önleme ve resmi abonelik süreçleri açısından yürürlükteki kanun ve yönetmeliklerle zorunlu kılınmış yasal bir gerekliliktir.
                </p>
              </div>

              <div className="legal-grid">
                {/* 1. Yasal Madde: Binaların Yangından Korunması Yönetmeliği */}
                <div className="legal-card">
                  <div className="legal-card-num">
                    <span>Mevzuat 01</span>
                    <ShieldCheck size={16} />
                  </div>
                  <h3 className="legal-card-title">Binaların Yangından Korunması Hakkında Yönetmelik</h3>
                  <p className="legal-card-desc">
                    Yönetmeliğin 58. maddesi gereğince, yakıt tüketen tüm cihazların bacalarının sızdırmaz olması, yangın güvenliğini tehlikeye atmayacak şekilde tesis edilmesi ve periyodik olarak sızdırmazlığının denetlenmesi mecburidir.
                  </p>
                  <span className="legal-card-law">Madde 58 & Resmi Gazete 26735</span>
                </div>

                {/* 2. Yasal Madde: Gaz Dağıtım Şirketleri Gaz Açma Şartı */}
                <div className="legal-card">
                  <div className="legal-card-num">
                    <span>Mevzuat 02</span>
                    <CheckCircle2 size={16} />
                  </div>
                  <h3 className="legal-card-title">Gaz Dağıtım Şirketleri (İGDAŞ vb.) Teknik Şartnamesi</h3>
                  <p className="legal-card-desc">
                    Merkezi sistem ve kaskad doğalgaz tesisatlarında ilk gaz arzının sağlanması veya mevcut abonelik revizyonlarında onaylı "Baca Sızdırmazlık Test Raporu" ibraz edilmeden gaz vanası kesinlikle açılmaz.
                  </p>
                  <span className="legal-card-law">Doğalgaz Dağıtım Şartnameleri</span>
                </div>

                {/* 3. Yasal Madde: Sigorta ve İSG Cezai Sorumluluk */}
                <div className="legal-card">
                  <div className="legal-card-num">
                    <span>Mevzuat 03</span>
                    <Zap size={16} />
                  </div>
                  <h3 className="legal-card-title">İSG Kanunu & Sigorta Hasar Teminatı</h3>
                  <p className="legal-card-desc">
                    6331 sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında yetkili baca testi yapılmamış binalarda zehirlenme veya yangın gerçekleşirse bina yönetimi şahsen cezai sorumludur; sigorta şirketleri hasar ödemesi yapmayabilir.
                  </p>
                  <span className="legal-card-law">6331 Sayılı Kanun & Yangın Sigortası</span>
                </div>
              </div>

              {/* Yasal Uyarı Kutusu */}
              <div className="legal-warning-banner">
                <div className="warning-icon-box">
                  <AlertTriangle size={22} />
                </div>
                <div className="warning-text">
                  <h5>Yasal Yaptırımlar ve Gaz Kesintisi Riski</h5>
                  <p>
                    Yetkili kurumlarca yapılan denetimlerde geçerli bir sızdırmazlık raporu bulunmayan kazan daireleri ve endüstriyel işletmelerin doğalgaz arzı derhal mühürlenerek durdurulur ve idari para cezası uygulanır. Düzenli sızdırmazlık testi yaptırmak hem can güvenliğinizi korur hem de işletmenizin kesintisiz çalışmasını garanti eder.
                  </p>
                </div>
              </div>
            </section>

            {/* BÖLÜM 3: TEST AŞAMALARI (NASIL UYGULANIR?) */}
            <section className="process-steps-block">
              <div className="detail-block-header">
                <span className="block-tag">// 4 ADIMLI SAHA MÜHENDİSLİĞİ</span>
                <h2 className="block-title">Baca Sızdırmazlık Testi Nasıl Yapılır?</h2>
              </div>

              <div className="process-steps-grid">
                <div className="process-step-item">
                  <div className="step-num-badge">01</div>
                  <h4 className="step-item-title">Hat İzolasyonu & Balonlama</h4>
                  <p className="step-item-desc">
                    Baca üst çıkışı (külah) ve alt cihaz bağlantı ağzı yüksek basınca dayanıklı özel pnömatik test balonlarıyla tamamen izole edilir.
                  </p>
                </div>

                <div className="process-step-item">
                  <div className="step-num-badge">02</div>
                  <h4 className="step-item-title">Kontrollü Basınçlandırma</h4>
                  <p className="step-item-desc">
                    Kalibre edilmiş test cihazı baca hattına bağlanır ve EN 1443 standardına uygun basınç (P1 için 200 Pascal) kademeli olarak uygulanır.
                  </p>
                </div>

                <div className="process-step-item">
                  <div className="step-num-badge">03</div>
                  <h4 className="step-item-title">Dijital Kaçak Tespiti</h4>
                  <p className="step-item-desc">
                    Sistem 120 saniye boyunca stabilize edilir. Dijital debimetre kaçak hava debisini otomatik hesaplar ve tolerans sınırını kontrol eder.
                  </p>
                </div>

                <div className="process-step-item">
                  <div className="step-num-badge">04</div>
                  <h4 className="step-item-title">Onaylı Resmi Raporlama</h4>
                  <p className="step-item-desc">
                    Ölçüm grafikleri ve cihaz kalibrasyon sertifikaları eklenerek yetkili gaz dağıtım şirketleri ve resmi kurumlara sunulacak geçerli test raporu düzenlenir.
                  </p>
                </div>
              </div>
            </section>

            {/* BÖLÜM: SIZDIRMAZLIK TESTİ ÖNCESİ ZORUNLU MÜŞTERİ SAHA ŞARTLARI */}
            <div className="prep-category-card highlight-card" style={{ marginBottom: '90px' }}>
              <div className="prep-card-header">
                <div>
                  <span className="prep-card-tag font-semibold">// TS EN ISO/IEC 17020 SAHA HAZIRLIK PROTOKOLÜ (TALİMAT NO: BKR-T-03)</span>
                  <h3 className="prep-card-title font-bold" style={{ fontSize: '22px' }}>
                    Sızdırmazlık Testi Öncesinde Sahada Sağlanması Gereken Zorunlu Şartlar
                  </h3>
                </div>
              </div>

              <ul className="prep-requirements-list font-regular" style={{ gap: '16px' }}>
                <li>
                  <strong>Bacanın Soğuk Olması (En Az 1 Saat Önceden Kapatma):</strong> Testin sağlıklı yapılabilmesi için bacaya bağlı kazan veya yakıcı cihazların kontrolden en az 1 saat önce tamamen kapatılması ve baca hattının ortam sıcaklığına kadar soğumuş olması şarttır. Sıcak bacada test gerçekleştirilemez.
                </li>
                <li>
                  <strong>220 V Elektrik Enerjisi:</strong> Dijital manometre cihazı ve elektrikli basınç pompasının çalışabilmesi için bacanın en alt noktasında 220 V elektrik enerji hattı/prizi hazır bulundurulmalıdır.
                </li>
                <li>
                  <strong>Baca Temizliği:</strong> Test öncesinde baca içi kurum, harç artığı ve yabancı maddelerden tamamen temizlenmiş olmalıdır.
                </li>
                <li>
                  <strong>Saha Yetkilisi ve İSG:</strong> Kontroller sırasında şantiye şefi veya tesis sorumlusu adreste hazır bulunmalıdır. 6331 sayılı İSG Kanunu kapsamında çatıya ve müdahale noktalarına güvenli erişim merdiveni/platformu müşteri tarafından temin edilmelidir.
                </li>
              </ul>

              <div className="prep-card-note">
                <span>⚠️ <strong>Yasal Hatırlatma:</strong> Saha kontrollerinde ön hazırlıkların yetersiz olması nedeniyle testin yapılamaması durumunda, hizmet sözleşmesi gereğince tekrar ücreti ve servis bedeli tahakkuk ettirilir.</span>
              </div>
            </div>

            {/* BÖLÜM 4: BASINÇ SINIFLARI TABLOSU */}
            <div className="standards-table-card">
              <div className="standards-table-header">
                <h3>TS EN 1443 Baca Sızdırmazlık ve Basınç Sınıfları</h3>
                <p>Uluslararası standartlarda izin verilen azami kaçak debisi ve test basıncı kriterleri:</p>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table className="tech-spec-table">
                  <thead>
                    <tr>
                      <th>Basınç Sınıfı</th>
                      <th>Test Basıncı (P)</th>
                      <th>Azami Kaçak Sınırı (VL)</th>
                      <th>Kullanım Alanı</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>N1 (Negatif Basınç)</strong></td>
                      <td>40 Pa</td>
                      <td>2.00 l/(s · m²)</td>
                      <td>Doğal çekişli geleneksel bacalar</td>
                    </tr>
                    <tr>
                      <td><strong>P1 (Pozitif Basınç)</strong></td>
                      <td>200 Pa</td>
                      <td>0.006 l/(s · m²)</td>
                      <td>Yoğuşmalı kaskad kazanlar, fanlı sistemler</td>
                    </tr>
                    <tr>
                      <td><strong>P2 (Düşük Basınç)</strong></td>
                      <td>200 Pa</td>
                      <td>0.120 l/(s · m²)</td>
                      <td>Düşük aşırı basınçlı cihaz hatları</td>
                    </tr>
                    <tr>
                      <td><strong>H1 (Yüksek Basınç)</strong></td>
                      <td>5000 Pa</td>
                      <td>0.006 l/(s · m²)</td>
                      <td>Dizel jeneratör ve endüstriyel kojenerasyon</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* BÖLÜM 5: ÇAĞRI VE RANDEVU BANNERI */}
            <div className="service-cta-banner">
              <div className="service-cta-text">
                <h3>Tesisinizin Baca Sızdırmazlık Testini Bugün Planlayın</h3>
                <p>
                  81 ilde sertifikalı mühendislerimiz ve son teknoloji test cihazlarımızla aynı gün saha hizmeti ve hızlı resmi rapor teslimatı sağlıyoruz.
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
                <p>Tüm baca denetimlerinizi tek merkezden, standartlara uygun şekilde tamamlayın.</p>
              </div>

              <div className="other-services-grid">
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
                    <p>Çap hesabı, yangın kompartıman geçişleri ve statik montajın yerinde kontrolü.</p>
                  </div>
                  <div className="other-card-arrow">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div 
                  className="other-service-card"
                  onClick={() => navigate('/hizmetler/periyodik-baca-kontrolleri')}
                >
                  <div className="other-card-thumb">
                    <img src={imgPeriyodik} alt="Periyodik Baca Kontrolleri" />
                  </div>
                  <div className="other-card-body">
                    <span>YILLIK YASAL DENETİM</span>
                    <h4>Periyodik Baca Kontrolleri</h4>
                    <p>Endoskopik robot kameralarla baca içi deformasyon ve kurum tıkanıklığı taraması.</p>
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
