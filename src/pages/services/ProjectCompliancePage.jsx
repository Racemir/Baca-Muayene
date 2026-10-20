/* ==========================================================================
   SAYFA: PROJE VE MONTAJ UYGUNLUK MUAYENESİ (PROJECTCOMPLIANCEPAGE.JSX)
   Açıklama: 3. Hizmet sayfası.
   İçerik:
   1. Ekmek Kırıntısı (Breadcrumb)
   2. Tepe Alanı ve Tepe Görsel (CAD Çizim & Lazer Ölçüm)
   3. Proje ve Montaj Uygunluk Muayenesi Nedir?
   4. Neden Yasal Olarak Zorunludur?
   5. Muayene Süreci ve Saha Kriterleri (4 Aşamalı Süreç)
   6. Denetlenen Teknik Parametreler Tablosu (TS EN 13384)
   7. Hızlı Randevu & İletişim Çağrısı (CTA)
   8. Diğer Hizmetlere Geçiş Bağlantıları
   ========================================================================== */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  FileCheck2, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowUpRight, 
  Compass,
  Layers,
  Ruler,
  Building
} from 'lucide-react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import SeoHead from '../../components/Common/SeoHead';
import { getStaticSeo } from '../../seo/routes';
import { absUrl } from '../../seo/site';
import { breadcrumbSchema, serviceSchema } from '../../seo/schema';
import imgProjeMontaj from '../../assets/images/service-proje-montaj.webp';
import imgSizdirmazlik from '../../assets/images/service-sizdirmazlik.webp';
import imgPeriyodik from '../../assets/images/service-periyodik-kontrol.webp';
import './ServiceDetailPage.css';

export default function ProjectCompliancePage({ onOpenAppointment }) {
  const navigate = useNavigate();
  const pageSeo = getStaticSeo('/hizmetler/proje-ve-montaj-uygunluk-muayenesi');

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
              { name: 'Proje ve Montaj Uygunluk Muayenesi', url: absUrl(pageSeo.path) },
            ]),
            serviceSchema({
              name: 'Baca Proje ve Montaj Uygunluk Muayenesi',
              description: pageSeo.description,
              url: absUrl(pageSeo.path),
              serviceType: 'Baca proje ve montaj uygunluk muayenesi',
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
              <span className="service-breadcrumb-current">Proje ve Montaj Uygunluk Muayenesi</span>
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
                    <FileCheck2 size={14} />
                    <span>CAD & LAZER ÖLÇÜM</span>
                  </span>
                  <span className="service-standard-code">TS EN 13384 / TS EN 1856-1</span>
                </div>

                <h1 className="service-hero-title">
                  Proje ve Montaj <br />
                  <span className="text-secondary">Uygunluk Muayenesi</span>
                </h1>

                <p className="service-hero-lead">
                  Baca güzergahı, çap ve kesit hesapları, paslanmaz çelik malzeme et kalınlığı, yangın kompartıman geçişleri ve statik sabitlemelerin onaylı mekanik projeye ve yürürlükteki mevzuata uygunluk denetimi.
                </p>

                {/* Hızlı Parametre Kutucukları */}
                <div className="service-specs-strip">
                  <div className="spec-strip-card">
                    <span className="spec-strip-label">Hesap Standardı</span>
                    <span className="spec-strip-val">TS EN 13384-1 / 13384-2</span>
                  </div>
                  <div className="spec-strip-card">
                    <span className="spec-strip-label">Malzeme Sınıfı</span>
                    <span className="spec-strip-val">AISI 316L / 304 Paslanmaz Çelik</span>
                  </div>
                  <div className="spec-strip-card">
                    <span className="spec-strip-label">Resmi Kullanım</span>
                    <span className="spec-strip-val">İskan & İlk Gaz Açma Raporu</span>
                  </div>
                </div>

                {/* Aksiyon Butonları */}
                <div className="service-hero-actions">
                  <button 
                    type="button" 
                    className="service-primary-btn"
                    onClick={onOpenAppointment}
                  >
                    <span>Muayene Randevusu Al</span>
                    <ArrowUpRight size={16} />
                  </button>
                  <a 
                    href="#muayene-nedir" 
                    className="service-secondary-btn"
                  >
                    <span>Mühendislik Detayları</span>
                  </a>
                </div>
              </div>

              {/* Sağ: TEPE GÖRSEL */}
              <div className="service-hero-media">
                <img 
                  src={imgProjeMontaj} 
                  alt="Baca proje ve montaj uygunluk muayenesi" 
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
                    <span className="badge-tag-text">CAD Güzergah & Lazer Kontrolü</span>
                  </div>
                  <span className="badge-tag-meta">Yerinde Teknik Tetkik</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. ANA İÇERİK: "PROJE VE MONTAJ UYGUNLUK NEDİR?" VE "NEDEN YASAL OLARAK ZORUNLUDUR?" */}
        <div className="service-content-wrapper">
          <div className="container">

            {/* BÖLÜM 1: PROJE VE MONTAJ UYGUNLUK MUAYENESİ NEDİR? */}
            <section id="muayene-nedir" className="service-detail-block">
              <div className="detail-block-header">
                <span className="block-tag">// TEKNİK KAPSAM VE SAHA TETKİKİ</span>
                <h2 className="block-title">Proje ve Montaj Uygunluk Muayenesi Nedir?</h2>
              </div>

              <div className="what-is-grid">
                <div className="what-is-text">
                  <p>
                    <strong>Proje ve Montaj Uygunluk Muayenesi</strong>; inşa edilen yeni binalarda veya revize edilen kazan dairelerinde baca sisteminin; onaylı mekanik tesisat projesine, <strong>TS EN 13384</strong> baca termik ve hidrolik hesaplarına, malzeme standartlarına ve yangın yönetmeliğine uygun olarak monte edilip edilmediğinin uzman mühendislerce sahada lazerli cihazlarla doğrulanmasıdır.
                  </p>

                  <div className="highlight-quote-card">
                    <p>
                      "Kağıt üzerindeki tasarım projesinin sahada santim santim incelenmesi; baca çapı, et kalınlığı, sismik kelepçeleme, genleşme körükleri ve yangın durdurucu manşonların yerinde fiziki ve geometrik testlerle onaylanması sürecidir."
                    </p>
                  </div>

                  <p>
                    Bir baca projesinin doğru çizilmiş olması tek başına yeterli değildir. Sahada yapılan yanlış montaj uygulamaları (örneğin yangın şaftı geçişlerinde yanıcı malzeme bırakılması, yetersiz kelepçe mesafeleri, yoğuşma suyunun yanlış tahliyesi veya çatı üstü tahliye mesafesinin standartların altında kalması) büyük yangınlara ve zehirlenmelere yol açabilir.
                  </p>

                  <p>
                    Bu muayene ile tüm montaj parametreleri kayıt altına alınır, CE performans etiketleri doğrulanır ve bina için yasal geçerliliğe sahip resmi <strong>"Baca Montaj Uygunluk Raporu"</strong> hazırlanır.
                  </p>
                </div>

                {/* Sağ Özellik Kartları */}
                <div className="what-is-features">
                  <div className="feature-point-card">
                    <div className="feature-point-icon">
                      <Ruler size={20} />
                    </div>
                    <div className="feature-point-body">
                      <h4>Lazerli Çap ve Güzergah Tetkiki</h4>
                      <p>Baca güzergahındaki dirsek açıları, düşey eğimler ve kesit çapı lazer metrelerle yerinde ölçülerek projeyle eşleştirilir.</p>
                    </div>
                  </div>

                  <div className="feature-point-card">
                    <div className="feature-point-icon">
                      <Layers size={20} />
                    </div>
                    <div className="feature-point-body">
                      <h4>Malzeme Kalitesi ve Et Kalınlığı</h4>
                      <p>Kullanılan paslanmaz çelik sacın kalitesi (AISI 316L/304), et kalınlığı ve taşyünü izolasyon yoğunluğu mikrometrelerle kontrol edilir.</p>
                    </div>
                  </div>

                  <div className="feature-point-card">
                    <div className="feature-point-icon">
                      <Compass size={20} />
                    </div>
                    <div className="feature-point-body">
                      <h4>Sismik ve Statik Sabitleme</h4>
                      <p>Deprem ve rüzgar yükü hesaplarına göre kelepçe aralıkları, ana taşıyıcı konsollar ve esnek genleşme bağlantıları denetlenir.</p>
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
                  <span>YASAL ZORUNLULUK VE RUHSAT SÜRECİ</span>
                </span>
                <h2 className="legal-title">Proje ve Montaj Uygunluk Muayenesi Neden Yasal Olarak Zorunludur?</h2>
                <p className="legal-lead">
                  Bu denetim; bir yapının yasal olarak kullanılabilmesi, belediyeden iskan alınabilmesi ve doğalgaz aboneliğinin başlatılabilmesi için kanunen mecburidir.
                </p>
              </div>

              <div className="legal-grid">
                {/* 1. Yasal Madde: İskan (Yapı Kullanma İzni) */}
                <div className="legal-card">
                  <div className="legal-card-num">
                    <span>Mevzuat 01</span>
                    <Building size={16} />
                  </div>
                  <h3 className="legal-card-title">Yapı Kullanma İzin Belgesi (İSKAN)</h3>
                  <p className="legal-card-desc">
                    3194 sayılı İmar Kanunu ve Belediye İmar Yönetmelikleri uyarınca, yeni yapılan binaların iskan alabilmesi için bağımsız muayene ekibinden onaylı "Baca Proje ve Montaj Uygunluk Raporu" istenir.
                  </p>
                  <span className="legal-card-law">3194 Sayılı İmar Kanunu & İskan</span>
                </div>

                {/* 2. Yasal Madde: İlk Gaz Açma İzni */}
                <div className="legal-card">
                  <div className="legal-card-num">
                    <span>Mevzuat 02</span>
                    <CheckCircle2 size={16} />
                  </div>
                  <h3 className="legal-card-title">Gaz Dağıtım Şirketleri İlk Gaz Açma Onayı</h3>
                  <p className="legal-card-desc">
                    İGDAŞ, Başkentgaz vb. gaz dağıtım şirketleri montaj uygunluk muayene raporu ve baca onay belgesi bulunmayan merkezi kazan dairelerine kesinlikle gaz arzı başlatmaz.
                  </p>
                  <span className="legal-card-law">Doğalgaz Piyasası Müşteri Hizmetleri</span>
                </div>

                {/* 3. Yasal Madde: Yangın Güvenliği & Kompartıman */}
                <div className="legal-card">
                  <div className="legal-card-num">
                    <span>Mevzuat 03</span>
                    <ShieldCheck size={16} />
                  </div>
                  <h3 className="legal-card-title">Yangın Kompartıman ve Şaft Geçişleri</h3>
                  <p className="legal-card-desc">
                    Yangın Yönetmeliği uyarınca kat geçişlerindeki yangın durdurucu yalıtımlar doğrulanmadan ve resmi teknik uygunluk raporu düzenlenmeden binalarda işletme onay süreçleri tamamlanamaz.
                  </p>
                  <span className="legal-card-law">BYKHY Yangın Şaftı Hükümleri</span>
                </div>
              </div>

              {/* Yasal Uyarı Kutusu */}
              <div className="legal-warning-banner">
                <div className="warning-icon-box">
                  <AlertTriangle size={22} />
                </div>
                <div className="warning-text">
                  <h5>İskan Alamama ve Gaz Açımının Reddedilme Riski</h5>
                  <p>
                    Baca montaj uygunluk raporu eksik olan projelerde belediye iskan vermez, gaz dağıtım şirketleri projeyi reddeder. Bu durum müteahhitler ve bina sahipleri için aylarca süren gecikmelere ve yüksek maddi zararlara yol açar. Yetkili mühendislerimizle süreci ilk seferde eksiksiz tamamlayın.
                  </p>
                </div>
              </div>
            </section>

            {/* BÖLÜM 3: MUAYENE AŞAMALARI */}
            <section className="process-steps-block">
              <div className="detail-block-header">
                <span className="block-tag">// 4 AŞAMALI DENETİM</span>
                <h2 className="block-title">Proje ve Montaj Muayenesi Nasıl Gerçekleştirilir?</h2>
              </div>

              <div className="process-steps-grid">
                <div className="process-step-item">
                  <div className="step-num-badge">01</div>
                  <h4 className="step-item-title">Proje & Hesap İncelemesi</h4>
                  <p className="step-item-desc">
                    Mimari ve mekanik projeler incelenir; kazan kapasitesine göre TS EN 13384 kesit/çap hesabı doğrulanır.
                  </p>
                </div>

                <div className="process-step-item">
                  <div className="step-num-badge">02</div>
                  <h4 className="step-item-title">Saha Montaj Tetkiki</h4>
                  <p className="step-item-desc">
                    Yerinde inceleme ile malzeme kalitesi, et kalınlığı, izolasyon, sismik kelepçeler ve kompartıman geçişleri taranır.
                  </p>
                </div>

                <div className="process-step-item">
                  <div className="step-num-badge">03</div>
                  <h4 className="step-item-title">Lazer ve Geometrik Ölçüm</h4>
                  <p className="step-item-desc">
                    Dirsek açıları, düşey eksen sapmaları, çatı mahyası üstü çıkış kotu ve temizleme kapağı mesafeleri ölçülür.
                  </p>
                </div>

                <div className="process-step-item">
                  <div className="step-num-badge">04</div>
                  <h4 className="step-item-title">Resmi Uygunluk Belgesi</h4>
                  <p className="step-item-desc">
                    Belediye iskan servisi ve gaz dağıtım şirketine sunulacak resmi onaylı "Baca Montaj Uygunluk Raporu" düzenlenir.
                  </p>
                </div>
              </div>
            </section>

            {/* BÖLÜM: ZORUNLU MÜŞTERİ BELGELERİ VE MYK YETKİ BELGESİ ŞARTI */}
            <div className="prep-category-card highlight-card" style={{ marginBottom: '90px' }}>
              <div className="prep-card-header">
                <div>
                  <span className="prep-card-tag font-semibold">// TS EN ISO/IEC 17020 PROJE VE HESAP KONTROLÜ ŞARTLARI (BKR-T-03)</span>
                  <h3 className="prep-card-title font-bold" style={{ fontSize: '22px' }}>
                    Proje Değerlendirmesinde Müşteriden Temini Zorunlu Dokümanlar & Yeterlilikler
                  </h3>
                </div>
              </div>

              <ul className="prep-requirements-list font-regular" style={{ gap: '16px' }}>
                <li>
                  <strong>MYK Yetki Belgesi Zorunluluğu:</strong> Yasal mevzuat uyarınca baca montajını gerçekleştiren kişilere ilişkin en az <strong>MYK Bacacı Seviye 3</strong>; bacanın kontrol ve denetimini yapan kişilere ilişkin en az <strong>MYK Bacacı Seviye 4</strong> mesleki yetki belgeleri kontrol öncesinde ibraz edilmek zorundadır.
                </li>
                <li>
                  <strong>KESA-ALADİN Çap ve Çekiş Hesabı:</strong> Baca projesinin hidrolik ve termik hesapları güncel <strong>KESA-ALADİN</strong> yazılımı ve TS EN 13384 standardı kriterlerine tam uygun olarak hazırlanmış olmalıdır.
                </li>
                <li>
                  <strong>CE Sertifikaları, FÜK ve Performans Beyanı (DoP):</strong> Akredite üretici tarafından tanzim edilmiş Fabrika Üretim Kontrol (FÜK) belgeleri, CE sertifikaları ve resmi Performans Beyanları (DoP) eksiksiz teslim edilmelidir.
                </li>
                <li>
                  <strong>Geometrik Ölçüm ve Alet Denetimi:</strong> Sahada şerit metre, eğimölçer, açıölçer ve lazerli mesafe ölçer aletleri ile mimari projedeki güzergah koordinatları birebir doğrulanır.
                </li>
              </ul>
            </div>

            {/* BÖLÜM 4: DENETLENEN TEKNİK KRİTERLER TABLOSU */}
            <div className="standards-table-card">
              <div className="standards-table-header">
                <h3>Saha Muayenesinde Denetlenen Temel Standart Parametreleri</h3>
                <p>TS EN 1856-1 ve TS EN 13384 standartlarına göre kontrol edilen zorunlu kriterler:</p>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table className="tech-spec-table">
                  <thead>
                    <tr>
                      <th>Kontrol Parametresi</th>
                      <th>Standart Değer</th>
                      <th>Muayene Yöntemi</th>
                      <th>Yasal Zorunluluk</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>İç Cidar Sac Kalitesi</strong></td>
                      <td>AISI 316L (1.4404) Paslanmaz Çelik</td>
                      <td>Malzeme spektrometre / etiket teyidi</td>
                      <td>Zorunlu</td>
                    </tr>
                    <tr>
                      <td><strong>Asgari Et Kalınlığı</strong></td>
                      <td>0.50 mm - 1.00 mm (Çapa göre)</td>
                      <td>Mikrometre & kumpas ölçümü</td>
                      <td>Zorunlu</td>
                    </tr>
                    <tr>
                      <td><strong>Yangın Şaftı Mesafesi</strong></td>
                      <td>G (Yanıcıya mesafe standardı)</td>
                      <td>Lazer metre ile fiziki tetkik</td>
                      <td>Zorunlu</td>
                    </tr>
                    <tr>
                      <td><strong>Kelepçe ve Sabitleme Aralığı</strong></td>
                      <td>Azami her 2-3 metrede bir</td>
                      <td>Mekanik ve statik kontrol</td>
                      <td>Zorunlu</td>
                    </tr>
                    <tr>
                      <td><strong>Çatı Mahyası Çıkış Kotu</strong></td>
                      <td>Mahyadan en az +50 cm yukarıda</td>
                      <td>Optik seviyeleme ve lazer ölçümü</td>
                      <td>Zorunlu</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* BÖLÜM 5: ÇAĞRI VE RANDEVU BANNERI */}
            <div className="service-cta-banner">
              <div className="service-cta-text">
                <h3>İskan ve İlk Gaz Açma Raporunuzu Geciktirmeyin</h3>
                <p>
                  Onaylı mühendis kadromuzla projelerinizi hızla yerinde inceliyor, iskan ve gaz açımına hazır resmi muayene raporunuzu eksiksiz teslim ediyoruz.
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
