/* ==========================================================================
   BÖLÜM: MUAYENE ÖNCESİ MÜŞTERİ SAHA HAZIRLIK KILAVUZU
   (CUSTOMERPREPGUIDE.JSX)
   Açıklama: TS EN ISO/IEC 17020 Akreditasyon Sistemi gereğince (Talimat No: BKR-T-03)
   sahada denetim öncesinde müşterinin sağlaması gereken teknik şartlar,
   zorunlu belgeler, cihaz soğuma süresi, elektrik gereksinimi ve MYK belgeleri.
   ========================================================================== */

import React from 'react';
import { 
  Snowflake, 
  AlertTriangle, 
  FileCheck, 
  UserCheck, 
  ShieldAlert
} from 'lucide-react';

export default function CustomerPrepGuide() {
  return (
    <div id="musteri-hazirlik-talimati" className="prep-guide-block-wrapper">
      
      {/* ÜST BAŞLIK */}
      <div className="section-intro-center">
        <div className="section-badge">
          <span className="badge-dot"></span>
          <span>SAHA OPERASYON STANDARDI // BKR-T-03 TALİMATI</span>
        </div>
        <h3 className="section-title-large font-bold">
          Muayene Öncesi Müşteri <br />
          <span className="text-accent-glow">Saha Hazırlık Kılavuzu</span>
        </h3>
        <p className="section-subtitle font-regular">
          Denetimlerin eksiksiz, güvenli ve ilk seferde tamamlanabilmesi için saha talimatımız (BKR-T-03) gereğince hazır bulundurulması gereken teknik şartlar ve müşteri yükümlülükleri.
        </p>
      </div>

      {/* 4 ANA HAZIRLIK KATEGORİSİ */}
      <div className="prep-categories-grid">
        
        {/* 1. SIZDIRMAZLIK TESTİ ZORUNLU SAHA ŞARTLARI */}
        <div className="prep-category-card highlight-card">
          <div className="prep-card-header">
            <div className="prep-card-icon-box">
              <Snowflake size={22} />
            </div>
            <div>
              <span className="prep-card-tag font-semibold">SIZDIRMAZLIK TESTİ ÖNCESİ</span>
              <h5 className="prep-card-title font-bold">Kritik Saha Şartları</h5>
            </div>
          </div>

          <ul className="prep-requirements-list font-regular">
            <li>
              <strong>En Az 1 Saat Önceden Cihazı Kapatma:</strong> Bacaya bağlı tüm yakıcı cihazlar kontrolden en az 1 saat önce kapatılmalı ve baca tamamen soğumuş olmalıdır. Sıcak bacada test yapılamaz.
            </li>
            <li>
              <strong>220 V Elektrik Hattı:</strong> Dijital manometre ve yüksek basınç test cihazının çalışabilmesi için bacanın en alt noktasında 220 V elektrik prizi veya seyyar kablo hazır olmalıdır.
            </li>
            <li>
              <strong>Bacanın Temizlenmiş Olması:</strong> Test öncesinde baca hattı kurum, harç ve tortulardan arındırılmış, temizliği yapılmış olmalıdır.
            </li>
            <li>
              <strong>Hat İzolasyonu & Körleme:</strong> Baca ucu ve yakıcı cihaz ağzının körlenmesi organize edilmelidir (test balonları muayene ekibimizce temin edilir).
            </li>
          </ul>

          <div className="prep-card-note">
            <AlertTriangle size={15} />
            <span>Ön hazırlık yetersizliği nedeniyle testin ertelenmesi durumunda yönetmelik gereği servis ve tekrar ücreti uygulanır.</span>
          </div>
        </div>

        {/* 2. PROJE VE MONTAJ UYGUNLUK ZORUNLU BELGELERİ */}
        <div className="prep-category-card">
          <div className="prep-card-header">
            <div className="prep-card-icon-box">
              <FileCheck size={22} />
            </div>
            <div>
              <span className="prep-card-tag font-semibold">PROJE & HESAP KONTROLÜ</span>
              <h5 className="prep-card-title font-bold">Müşteriden İstenen Belgeler</h5>
            </div>
          </div>

          <ul className="prep-requirements-list font-regular">
            <li>
              <strong>MYK Yetki Belgeleri Zorunluluğu:</strong> Baca montajını yapan kişilerin en az <strong>MYK Bacacı Seviye 3</strong>, kontrolünü yapanların ise en az <strong>MYK Bacacı Seviye 4</strong> yetki belgesi kontrol öncesinde ibraz edilmelidir.
            </li>
            <li>
              <strong>KESA-ALADİN Çap Hesapları:</strong> TS EN 13384 standardına ve lisanslı KESA-ALADIN yazılımına uygun onaylı mekanik baca çapı kesit hesabı.
            </li>
            <li>
              <strong>CE & FÜK Belgeleri:</strong> Fabrika Üretim Kontrol (FÜK) sertifikaları, CE etiketleri ve üretici Performans Beyanları (DoP).
            </li>
            <li>
              <strong>Mekanik Çizimler & Kataloglar:</strong> Onaylı mekanik tesisat proje çizimleri, montaj kılavuzu ve yakıcı cihaz üretici teknik verileri.
            </li>
          </ul>
        </div>

        {/* 3. SAHA GÜVENLİĞİ VE ERİŞİM YÜKÜMLÜLÜKLERİ */}
        <div className="prep-category-card">
          <div className="prep-card-header">
            <div className="prep-card-icon-box">
              <UserCheck size={22} />
            </div>
            <div>
              <span className="prep-card-tag font-semibold">6331 SAYILI İSG KANUNU</span>
              <h5 className="prep-card-title font-bold">Erişim ve Güvenlik</h5>
            </div>
          </div>

          <ul className="prep-requirements-list font-regular">
            <li>
              <strong>Yetkili Refakati:</strong> Sahada muayene personeline eşlik edecek firma görevlisi (Şantiye Şefi, Tesis Sorumlusu veya Mekanik Şef) hazır bulunmalıdır.
            </li>
            <li>
              <strong>Güvenli Erişim & Merdiven/Platform:</strong> Çatı üstü, baca şaftı ve kazan dairesi müdahale kapaklarına güvenli erişim için gerekli platform, sepet veya merdiven müşteri tarafından temin edilmelidir.
            </li>
            <li>
              <strong>İş ve Çevre Güvenliği:</strong> 6331 sayılı İSG Kanunu uyarınca çalışma sahasının iş güvenliği tedbirleri ilgili binanın/firmanın sorumluluğundadır.
            </li>
          </ul>
        </div>

        {/* 4. PERİYODİK KONTROL VE KAPSAM SINIRLARI */}
        <div className="prep-category-card">
          <div className="prep-card-header">
            <div className="prep-card-icon-box">
              <ShieldAlert size={22} />
            </div>
            <div>
              <span className="prep-card-tag font-semibold">AKREDİTE KAPSAM BİLGİSİ</span>
              <h5 className="prep-card-title font-bold">Kapsam ve İstisnalar</h5>
            </div>
          </div>

          <ul className="prep-requirements-list font-regular">
            <li>
              <strong>Periyodik Kontrollerde Sızdırmazlık İlkesi:</strong> Standart periyodik kontrollerde 360° robot kamera ve mekanik bütünlük tetkiki yapılır; sızdırmazlık testi müşterinin özel talebine istinaden uygulanır.
            </li>
            <li>
              <strong>Kapsam Dışı Alanlar:</strong> Binanın taşıyıcı yapısının bacayı taşımasına yönelik statik kontroller, bina baca şaftının basınçlandırılması ve paratoner/yıldırımdan korunma kontrolleri muayene kapsamı dışındadır.
            </li>
            <li>
              <strong>Yakıcı Cihaz Etiketi:</strong> Yakıcı cihazın ve brülörün üzerinde teknik etiketi net şekilde okunabilir olmalıdır.
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
}
