/* ==========================================================================
   BÖLÜM: KALİTE KONTROL (6 MADDE İNFOGRAFİK ÇALIŞMA)
   Açıklama: Kullanıcının talebi doğrultusunda hazırlanan 6 aşamalı infografik
   denetim metodolojisi, gerçek saha teknisyeni görseli ve standart rozetleri.
   ========================================================================== */

import React, { useState } from 'react';
import { 
  FileSearch, 
  ScanLine, 
  Gauge, 
  Flame, 
  ShieldCheck, 
  QrCode, 
  CheckCircle2, 
  Activity,
  CalendarCheck
} from 'lucide-react';
import { technicianInspectionImg } from '../../assets/gorseller';

export default function QualityControlInfographic({ onOpenAppointment }) {
  // Seçili aşamayı vurgulayan etkileşim durumu (1'den 6'ya)
  const [activeStep, setActiveStep] = useState(1);

  // 6 Maddelik İnfografik Veri Kümesi
  const qualitySteps = [
    {
      id: 1,
      number: '01',
      title: 'Ön İnceleme ve Proje Uygunluk Analizi',
      category: 'MÜHENDİSLİK & PROJE TETKİKİ',
      icon: FileSearch,
      desc: 'Mimari ve mekanik tesisat projeleri, baca şaft güzergahı, cihaz ısıl kapasiteleri ve baca çapı kesit hesaplamaları (TS EN 13384) ulusal standartlar çerçevesinde detaylı ön tetkike tabi tutulur.',
      metric: 'TS EN 15287 & TS 7363',
      badge: 'Masaüstü Proje Tetkiki',
      highlight: 'Doğru Kesit & Güzergah'
    },
    {
      id: 2,
      number: '02',
      title: 'İleri Seviye Cihazlarla Sahada Muayene',
      category: '360° ENDOSKOPİK TARAMA',
      icon: ScanLine,
      desc: 'Yüksek çözünürlüklü 360° döner başlıklı endoskopik muayene kamerası ve kalibre lazer mesafe ölçüm sistemleri ile baca içi cidar yüzeyleri, aşınmalar, kurum tabakaları ve bağlantı contaları taranır.',
      metric: 'Mikrometre Hassasiyeti',
      badge: 'Fiziksel Cidar Teşhisi',
      highlight: '360° Optik Teşhis'
    },
    {
      id: 3,
      number: '03',
      title: 'Basınçlı Duman & Sızdırmazlık Testi',
      category: 'EN 1443 BASINÇLI KAÇAK ANALİZİ',
      icon: Gauge,
      desc: 'Sisteme EN 1443 normlarında pozitif/negatif test basıncı (P1 / H1 sınıfları) tatbik edilerek duman jeneratörleri ve dijital diferansiyel manometrelerle mikro düzeydeki tüm gaz kaçakları anında tespit edilir.',
      metric: 'P1 / H1 Basınç Sınıfı',
      badge: 'Milibar Hassasiyetinde Ölçüm',
      highlight: '0 Kaçak Toleransı'
    },
    {
      id: 4,
      number: '04',
      title: 'Yanma Gazı & Çekiş Dinamiği Ölçümü',
      category: 'TERMODİNAMİK BACA ANALİZİ',
      icon: Flame,
      desc: 'Kalibre baca gazı analizörleri kullanılarak CO, CO2, O2 gaz konsantrasyonları, baca çekiş basıncı (Pascal) ve atık gaz sıcaklığı ölçülür; geri tepme, hava açlığı ve zehirlenme riskleri tamamen sıfırlanır.',
      metric: 'TS EN 50379 Normu',
      badge: 'Zehirli Gaz Riski: Sıfır',
      highlight: 'Tam Yanma & Çekiş Emniyeti'
    },
    {
      id: 5,
      number: '05',
      title: 'Bağımsız Mühendislik & Çapraz Tetkik',
      category: 'ÇİFT KADEMELİ DOĞRULAMA',
      icon: ShieldCheck,
      desc: 'Saha denetçi mühendislerimizin kaydettiği tüm dijital ölçüm logları, telemetri verileri ve fotoğraflı tutanaklar; merkez ofisteki kıdemli makine başmühendisleri heyeti tarafından bağımsız çapraz tetkikten geçirilir.',
      metric: 'Sıfır Hata Protokolü',
      badge: 'Başmühendis İmzası',
      highlight: 'Bağımsız Çapraz Kontrol'
    },
    {
      id: 6,
      number: '06',
      title: 'Resmi Akredite Rapor & QR Sertifikasyon',
      category: 'YASAL TESCİL & DİJİTAL DOĞRULAMA',
      icon: QrCode,
      desc: 'Yetkili yerel gaz dağıtım şirketleri (İGDAŞ, Başkentgaz vb.) ve ilgili idari mercilere sunulmaya tam uygun, üzerinde benzersiz karekod (QR) bulunan 7/24 sorgulanabilir resmi uygunluk sertifikası teslim edilir.',
      metric: 'Resmi İdareler Geçerli',
      badge: 'Karekodlu E-İmzalı Belge',
      highlight: '100% Yasal Geçerlilik'
    }
  ];

  return (
    <div className="quality-infographic-wrapper">
      
      {/* ----- 1. ÜST BAŞLIK VE İNTRO ----- */}
      <div className="section-intro-center">
        <div className="section-badge">
          <span className="badge-dot"></span>
          <span>SIFIR HATA STANDARDI // 6 AŞAMALI SİSTEM</span>
        </div>
        <h3 className="section-title-large font-bold">
          Kalite Kontrol ve <span className="text-accent-glow">Denetim Metodolojisi</span>
        </h3>
        <p className="section-subtitle font-regular">
          TS EN 15287-1, TS EN 15287-2 ve TS 7363 standartlarında sürdürülen yüksek hassasiyetli 6 aşamalı denetim metodolojimiz ile yaşam ve çalışma alanlarınızda maksimum güvenlik sağlıyoruz.
        </p>
      </div>

      {/* ----- 2. ADIM ZAMAN ÇİZELGESİ (STEPPER PIPELINE) ----- */}
      <div className="pipeline-stepper-container">
        <div className="pipeline-track-line"></div>
        <div className="pipeline-steps-row">
          {qualitySteps.map((step) => {
            const isCurrent = activeStep === step.id;
            return (
              <button
                key={step.id}
                type="button"
                className={`pipeline-step-node ${isCurrent ? 'node-active' : ''}`}
                onClick={() => setActiveStep(step.id)}
                title={`Aşama ${step.number}: ${step.title}`}
              >
                <div className="node-circle">
                  <span className="node-num font-bold">{step.number}</span>
                </div>
                <span className="node-caption font-medium">Aşama {step.number}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ----- 3. 6 MADDELİK İNFOGRAFİK KARTLAR IZGARASI ----- */}
      <div className="quality-cards-grid">
        {qualitySteps.map((step) => {
          const IconComponent = step.icon;
          const isSelected = activeStep === step.id;

          return (
            <div 
              key={step.id}
              className={`quality-card ${isSelected ? 'quality-card-highlighted' : ''}`}
              onClick={() => setActiveStep(step.id)}
            >
              {/* Kart Arka Plan Işık Efekti */}
              <div className="quality-card-glow"></div>

              {/* Kart Üst Başlık & İkon */}
              <div className="quality-card-top">
                <div className="quality-step-number-pill">
                  <span className="step-label font-medium">AŞAMA</span>
                  <span className="step-digit font-bold">{step.number}</span>
                </div>
                
                <div className="quality-icon-box">
                  <IconComponent size={24} />
                </div>
              </div>

              {/* Kategori ve Başlık */}
              <div className="quality-card-meta">
                <span className="quality-category-tag font-semibold">
                  {step.category}
                </span>
                <h4 className="quality-card-heading font-bold">
                  {step.title}
                </h4>
              </div>

              {/* Açıklama Metni */}
              <p className="quality-card-desc font-regular">
                {step.desc}
              </p>

              {/* Alt Rozetler ve Metrik */}
              <div className="quality-card-bottom-tags">
                <span className="quality-metric-tag font-medium">
                  <Activity size={13} className="mini-tag-icon" />
                  {step.metric}
                </span>
                <span className="quality-status-tag font-medium">
                  <CheckCircle2 size={13} className="mini-tag-icon-green" />
                  {step.highlight}
                </span>
              </div>

              {/* Alt İlerleme İndikatörü */}
              <div className="quality-card-accent-line"></div>
            </div>
          );
        })}
      </div>

      {/* ----- 4. SAHA TEKNİSYENİ & GERÇEK ZAMANLI TELEMETRİ VİTRİNİ ----- */}
      <div className="quality-field-showcase">
        <div className="field-showcase-grid">
          
          {/* Sol: Gerçek Saha Fotoğrafı (Kullanıcının WhatsApp Dosyasından) */}
          <div className="field-photo-container">
            <img 
              src={technicianInspectionImg} 
              alt="Baca Kontrolü Uzman Teknisyeni Kaskad Sistemi Ölçümü" 
              className="field-real-img"
              loading="lazy"
            />
            <div className="field-photo-vignette"></div>

            {/* Resim Üzerindeki Canlı Telemetri Rozeti */}
            <div className="field-live-telemetry-badge">
              <div className="pulse-indicator">
                <span className="pulse-dot"></span>
                <span className="pulse-ring"></span>
              </div>
              <div className="telemetry-info">
                <span className="telemetry-title font-semibold">Aktif Saha Muayenesi</span>
                <span className="telemetry-desc">Dijital Test Cihazları ile Birebir Doğrulama</span>
              </div>
            </div>
          </div>

          {/* Sağ: Mühendislik Standartları ve Aksiyon */}
          <div className="field-info-container">
            <div className="section-badge">
              <span className="badge-dot"></span>
              <span>STANDARTLAR & PROTOKOLLER</span>
            </div>

            <h4 className="field-heading font-bold">
              Hiçbir Esnekliğe Yer Bırakmayan <br />
              <span className="text-accent-glow">Tavizsiz Kalite Kalkanı</span>
            </h4>

            <p className="field-lead-text font-regular">
              Baca denetiminde sıfır hata prensibimiz gereği; tüm testler sertifikalı uzman denetçilerimiz tarafından ulusal yönetmelikler ve Avrupa güvenlik standartları referans alınarak yürütülür.
            </p>

            <div className="standards-checklist font-regular">
              <div className="check-item">
                <div className="check-bullet">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong className="font-semibold text-white">TS EN 15287 & TS 7363 Standart Uyumu:</strong>
                  <span> Baca şaftlarının yangın direnci ve boyutlandırma kurallarına tam riayet.</span>
                </div>
              </div>

              <div className="check-item">
                <div className="check-bullet">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong className="font-semibold text-white">EN 1443 Basınç Sınıfları:</strong>
                  <span> Negatif (N1), pozitif (P1) ve yüksek basınç (H1) sızdırmazlık sınıflarında milibar doğrulaması.</span>
                </div>
              </div>

              <div className="check-item">
                <div className="check-bullet">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong className="font-semibold text-white">QR Kodlu Resmi Rapor:</strong>
                  <span> Yetkili gaz kuruluşlarınca ve kurumlarda geçerli, tek tıkla doğrulanabilir tescilli belge.</span>
                </div>
              </div>
            </div>

            <div className="field-action-row">
              <button 
                type="button" 
                className="btn-primary font-medium"
                onClick={onOpenAppointment}
              >
                <span>Kalite Kontrol Muayenesi Talep Edin</span>
                <CalendarCheck size={18} />
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
