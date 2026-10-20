/* ==========================================================================
   BÖLÜM: MİSYON VE VİZYON (MISSION & VISION)
   Açıklama: Kullanıcının paylaştığı ekran görüntüsündeki birebir Misyon ve
   Vizyon metinlerini, endüstriyel kazan dairesi fotoğraflarını ve kurumsal
   değerleri barındıran çift kartlı vitrin bileşeni.
   ========================================================================== */

import React from 'react';
import { 
  Target, 
  Eye, 
  Sparkles, 
  CheckCircle
} from 'lucide-react';
import { cascadeBoilerImg } from '../../assets/gorseller';

export default function MissionVision() {
  return (
    <div className="mission-vision-wrapper">
      
      {/* ----- 1. ÜST BAŞLIK VE AÇIKLAMA ----- */}
      <div className="section-intro-center">
        <div className="section-badge">
          <span className="badge-dot"></span>
          <span>GELECEĞE BAKIŞ VE TEMEL SORUMLULUĞUMUZ</span>
        </div>
        <h3 className="section-title-large font-bold">
          Misyonumuz ve <span className="text-accent-glow">Vizyonumuz</span>
        </h3>
        <p className="section-subtitle font-regular">
          Yasal bir zorunluluğu yerine getirmenin çok ötesinde, her yapıda can ve mal güvenliğini garanti altına alan kalıcı bir güvenlik kültürü inşa ediyoruz.
        </p>
      </div>

      {/* ----- 2. ÇİFTLİ MODERN KART DÜZENİ (MİSYON & VİZYON) ----- */}
      <div className="mission-vision-cards-grid">
        
        {/* KART 1: MİSYONUMUZ */}
        <div className="mv-card mission-card">
          <div className="mv-card-glass-glow"></div>
          
          <div className="mv-card-header">
            <div className="mv-icon-wrapper mission-icon-box">
              <Target size={28} />
            </div>
            <div className="mv-header-tags">
              <span className="mv-tag-label font-medium">// KURUMSAL MİSYON</span>
              <h4 className="mv-card-title font-bold">Misyonumuz</h4>
            </div>
          </div>

          <div className="mv-body-content">
            {/* Kullanıcının Görseldeki Birebir Metni */}
            <p className="mv-text font-regular">
              Baca Kontrolleri olarak misyonumuz; yasal mevzuatlara ve mühendislik standartlarına tam uyum çerçevesinde sızdırmazlık, proje ve montaj uygunluk muayeneleri ile periyodik kontroller gerçekleştirerek yaşam ve çalışma alanlarında maksimum güvenliği tesis etmektir. Bağımsız, şeffaf ve uzman denetçilik anlayışımızla; görünmez tehlikeleri kaynağında tespit ederek yangın ve zehirlenme risklerini ortadan kaldırmayı, böylece insan sağlığını ile can güvenliğini korumayı en temel sorumluluğumuz kabul ediyoruz.
            </p>
          </div>

          <div className="mv-card-footer">
            <span className="mv-footer-heading font-medium">TEMEL TAAHHÜTLERİMİZ:</span>
            <ul className="mv-commitments-list font-regular">
              <li>
                <CheckCircle size={16} className="commit-icon" />
                <span>Görünmez tehlikeleri kaynağında milimetrik tespit</span>
              </li>
              <li>
                <CheckCircle size={16} className="commit-icon" />
                <span>Yangın ve karbonmonoksit zehirlenme risklerini sıfırlama</span>
              </li>
              <li>
                <CheckCircle size={16} className="commit-icon" />
                <span>İnsan sağlığı ve can emniyetini tavizsiz koruma</span>
              </li>
            </ul>
          </div>
        </div>

        {/* KART 2: VİZYONUMUZ */}
        <div className="mv-card vision-card">
          <div className="mv-card-glass-glow"></div>

          <div className="mv-card-header">
            <div className="mv-icon-wrapper vision-icon-box">
              <Eye size={28} />
            </div>
            <div className="mv-header-tags">
              <span className="mv-tag-label font-medium">// GELECEK PERSPEKTİFİ</span>
              <h4 className="mv-card-title font-bold">Vizyonumuz</h4>
            </div>
          </div>

          <div className="mv-body-content">
            {/* Kullanıcının Görseldeki Birebir Metni */}
            <p className="mv-text font-regular">
              Türkiye'nin 81 ilinde baca muayene ve denetim hizmetlerinde "tavizsiz güvenlik" ve "mutlak güvenilirlik" denildiğinde akla gelen ilk referans kurum olmak. İleri teknoloji ölçüm sistemlerimizle sektördeki denetim standartlarını sürekli yukarı taşıyarak, salt bir yasal zorunluluğu yerine getirmenin ötesinde kalıcı bir güvenlik kültürü oluşturmak ve her yapıda sağlıklı, güvenle nefes alınan bir gelecek inşa edilmesine liderlik etmek.
            </p>
          </div>

          <div className="mv-card-footer">
            <span className="mv-footer-heading font-medium">LİDERLİK HEDEFLERİMİZ:</span>
            <ul className="mv-commitments-list font-regular">
              <li>
                <Sparkles size={16} className="commit-icon icon-vision" />
                <span>81 ilde tavizsiz güvenlik denildiğinde akla ilk gelen referans kurum</span>
              </li>
              <li>
                <Sparkles size={16} className="commit-icon icon-vision" />
                <span>Denetim standartlarını ileri teknoloji sistemlerle sürekli yukarı taşıma</span>
              </li>
              <li>
                <Sparkles size={16} className="commit-icon icon-vision" />
                <span>Her yapıda sağlıklı ve güvenle nefes alınan bir gelecek inşa etme</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* ----- 3. SAHA ENTEGRASYON BARI VE DEĞERLER VİTRİNİ ----- */}
      <div className="mv-showcase-strip">
        <div className="mv-strip-image-container">
          <img 
            src={cascadeBoilerImg} 
            alt="Kaskad kazan dairesi ve paslanmaz baca kollektörü" 
            className="mv-strip-image"
            width={1400}
            height={500}
            loading="lazy"
            decoding="async"
          />
          <div className="mv-strip-overlay"></div>
        </div>

        <div className="mv-strip-content">
          <div className="mv-strip-stat">
            <span className="stat-big font-bold">81 İl</span>
            <span className="stat-caption font-regular">Türkiye Çapında Yetkili Denetim Ağı</span>
          </div>

          <div className="mv-strip-divider"></div>

          <div className="mv-strip-stat">
            <span className="stat-big font-bold">%100</span>
            <span className="stat-caption font-regular">Bağımsız & Şeffaf Mühendislik Güvencesi</span>
          </div>

          <div className="mv-strip-divider"></div>

          <div className="mv-strip-stat">
            <span className="stat-big font-bold">Sıfır Hata</span>
            <span className="stat-caption font-regular">Yangın & Zehirlenme Risklerine Karşı Tam Koruma</span>
          </div>
        </div>
      </div>

    </div>
  );
}
