/* ==========================================================================
   BÖLÜM: HAKKIMIZDA (ABOUT STORY)
   Açıklama: Kullanıcının paylaştığı orijinal metinleri, saha fotoğraflarını,
   güvenlik ilkelerini ve kurumsal sloganı içeren detaylı Hakkımızda bileşeni.
   ========================================================================== */

import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Award, 
  FileCheck
} from 'lucide-react';
import { 
  rooftopSkylineImg, 
  facadeChimneyImg 
} from '../../assets/gorseller';

export default function AboutStory() {
  return (
    <div className="about-story-wrapper">
      
      {/* ----- 1. ÜST BAŞLIK VE HİKAYE IZGARASI ----- */}
      <div className="about-story-grid">
        
        {/* SOL KOLON: KULLANICININ BİREBİR KURUMSAL METİNLERİ */}
        <div className="about-story-content">
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span>KURUMSAL HİKAYEMİZ & İLKELERİMİZ</span>
          </div>

          <h3 className="story-main-title font-bold">
            Tavizsiz Güvenlik, <br />
            <span className="story-title-gradient">Mutlak Güvenilirlik</span>
          </h3>

          <div className="story-paragraphs font-regular">
            {/* Paragraf 1 */}
            <p className="story-p lead-p">
              Yaşam ve çalışma alanlarının en görünmez ama en hayati altyapılarından biri olan baca sistemlerinin güvenliğini temin etmek amacıyla kurulan firmamız, sektörde yepyeni ve sarsılmaz bir standart belirlemektedir. Bizim için baca muayenesi yalnızca prosedürel bir imza veya kağıt üzerindeki bir onay süreci değil; doğrudan insan sağlığını, can ve mal güvenliğini koruyan tavizsiz bir güvenlik kalkanıdır.
            </p>

            {/* Paragraf 2 */}
            <p className="story-p">
              Faaliyetlerimizin merkezinde, en büyük sermayemiz ve temel ilkemiz olan <strong>"mutlak güvenilirlik"</strong> yer alır. Proje ve montaj uygunluk muayenelerinden periyodik kontrollere ve sızdırmazlık testlerine kadar yürüttüğümüz tüm operasyonlarda, ulusal mühendislik standartlarını ve yasal mevzuatları referans alıyoruz. Bağımsız, tarafsız ve şeffaf denetim anlayışımızla sıfır hata prensibini benimsiyoruz. İleri teknoloji ölçüm cihazlarımız ve alanında uzman denetçi kadromuzla, sahadaki gerçek durumu hiçbir dış etkiye veya esnekliğe mahal vermeksizin, tüm gerçekliğiyle raporluyoruz.
            </p>

            {/* Paragraf 3 */}
            <p className="story-p">
              Sorumluluğumuzun ağırlığının farkındayız. Bu nedenle, Türkiye'nin 81 ilinde aynı titizlik, aynı sarsılmaz etik değerler ve aynı yüksek kalitede hizmet sunarak sektördeki güven boşluğunu dolduruyoruz. Hangi şehirde veya hangi yapıda olursa olsun, denetiminden sorumlu olduğumuz her bacanın kusursuz işleyişi ve o binada yaşayanların huzurla nefes alabilmesi bizim tek başarı kıstasımızdır.
            </p>

            {/* Paragraf 4 */}
            <p className="story-p">
              Kurumumuz, günü kurtaran geçici çözümlerin değil, yıllara meydan okuyan kalıcı güvenliğin temsilcisidir. Binalarınızın görünmez nefes boruları olan bacalarınızı, en ufak bir şüpheye veya ihmale yer bırakmayacak şekilde denetliyoruz. Çünkü biliyoruz ki; gerçek güvenilirlik, tehlike daha ortaya çıkmadan onu uzmanlıkla fark edip önleyebilmektir.
            </p>
          </div>

          {/* VURGULU SLOGAN KUTUSU */}
          <div className="story-motto-box">
            <div className="motto-accent-bar"></div>
            <div className="motto-content">
              <span className="motto-quote-mark">“</span>
              <p className="motto-text font-italic">
                Siz işinize ve hayatınıza odaklanın; görünmez tehlikelerin kontrolü, güvenilir ellerde.
              </p>
            </div>
          </div>
        </div>

        {/* SAĞ KOLON: SİNEMATİK GERÇEK SAHA GÖRSELİ & ROZETLER */}
        <div className="about-story-visual">
          <div className="story-image-card">
            <img 
              src={rooftopSkylineImg} 
              alt="Çift Cidarlı Çelik Baca Çatı Montajı ve Şehir Görünümü" 
              className="story-main-img"
              loading="lazy"
            />
            <div className="story-image-gradient"></div>

            {/* Resim Üzerindeki Canlı Mühendislik Rozetleri */}
            <div className="image-badge badge-top-right">
              <ShieldCheck size={18} className="badge-icon-highlight" />
              <div>
                <span className="badge-title font-semibold">%100 Bağımsız Denetim</span>
                <span className="badge-subtitle">Sıfır Hata Prensibi</span>
              </div>
            </div>

            <div className="image-badge badge-bottom-left">
              <MapPin size={18} className="badge-icon-highlight" />
              <div>
                <span className="badge-title font-semibold">81 İlde Akredite</span>
                <span className="badge-subtitle">Kesintisiz Saha Erişimi</span>
              </div>
            </div>

            <div className="image-badge badge-bottom-right">
              <CheckCircle2 size={18} className="badge-icon-highlight" />
              <div>
                <span className="badge-title font-semibold">TS EN 15287 & TS 7363</span>
                <span className="badge-subtitle">Resmi Standart Uyumu</span>
              </div>
            </div>
          </div>

          {/* Ek Detay Kartı: Dış Cephe Çelik Baca Referansı */}
          <div className="story-sub-visual-card">
            <div className="sub-visual-thumb">
              <img 
                src={facadeChimneyImg} 
                alt="Endüstriyel Bina Dış Cephe Baca Hattı" 
                className="sub-thumb-img" 
                loading="lazy"
              />
            </div>
            <div className="sub-visual-info">
              <span className="sub-visual-tag font-medium">// SAHA REFERANSI</span>
              <h5 className="sub-visual-title font-semibold">Endüstriyel & Konut Baca Hatları</h5>
              <p className="sub-visual-text font-regular">
                Yüksek katlı yapılar ve merkezi kazan dairelerinde sızdırmazlık ve çekiş garantili resmi denetimler.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ----- 2. KURUMSAL 3'LÜ GÜVEN VE KALİTE SÜTUNU ----- */}
      <div className="about-pillars-grid">
        <div className="pillar-item">
          <div className="pillar-header">
            <span className="pillar-index font-light">01</span>
            <div className="pillar-icon-box">
              <ShieldCheck size={22} />
            </div>
          </div>
          <h4 className="pillar-title font-semibold">Tavizsiz Güvenlik Kalkanı</h4>
          <p className="pillar-desc font-regular">
            Baca muayenesini kağıt üzerinde bir formalite değil; doğrudan insan sağlığını, can ve mal emniyetini koruyan hayati bir zırh olarak ele alıyoruz.
          </p>
        </div>

        <div className="pillar-item">
          <div className="pillar-header">
            <span className="pillar-index font-light">02</span>
            <div className="pillar-icon-box">
              <Award size={22} />
            </div>
          </div>
          <h4 className="pillar-title font-semibold">Tarafsız & Şeffaf Raporlama</h4>
          <p className="pillar-desc font-regular">
            İleri teknoloji kalibre ölçüm cihazlarıyla sahadaki gerçek durumu hiçbir esnekliğe yer vermeden resmi mevzuata tam uygun olarak belgeliyoruz.
          </p>
        </div>

        <div className="pillar-item">
          <div className="pillar-header">
            <span className="pillar-index font-light">03</span>
            <div className="pillar-icon-box">
              <FileCheck size={22} />
            </div>
          </div>
          <h4 className="pillar-title font-semibold">Kalıcı Güvenlik Temsilcisi</h4>
          <p className="pillar-desc font-regular">
            Günü kurtaran geçici çözümler yerine, binalarınızın nefes borusu olan baca hatlarını yıllarca güvenle çalışacak standartta muayene ediyoruz.
          </p>
        </div>
      </div>

    </div>
  );
}
