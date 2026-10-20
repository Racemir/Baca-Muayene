/* ==========================================================================
   BÖLÜM: TS EN ISO/IEC 17020 AKREDİTASYON VE TARAFIZLIK TAAHHÜDÜ
   (ACCREDITATIONCOMMITMENT.JSX)
   Açıklama: TS EN ISO/IEC 17020 standartları gereğince A Tipi Bağımsız
   Muayene Kuruluşu Kalite Politikası, Bağımsızlık, Tarafsızlık ve Gizlilik Taahhüdü.
   ========================================================================== */

import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Scale, 
  FileCheck2, 
  CheckCircle2, 
  AlertCircle,
  Briefcase,
  Users
} from 'lucide-react';

export default function AccreditationCommitment() {
  const commitments = [
    {
      id: 1,
      icon: Scale,
      title: 'Bağımsız üçüncü taraf muayene',
      desc: 'Muayene ettiğimiz baca sistemlerinin tasarımcısı, imalatçısı, tedarikçisi, montajcısı, satıcısı, sahibi veya bakımcısı değiliz; ne de bu tarafların yetkili temsilcisiyiz. Bağımsız üçüncü taraf muayene anlayışıyla faaliyet gösteririz.'
    },
    {
      id: 2,
      icon: Lock,
      title: 'Mutlak Gizlilik ve Veri Güvenliği',
      desc: 'Muayene süreçlerinde müşterilerimizden elde edilen tüm ticari, teknik ve idari bilgiler gizlilik ilkesi altında saklanır. Kanuni zorunluluklar haricinde hiçbir bilgi müşterinin yazılı onayı olmaksızın üçüncü taraflarla paylaşılmaz.'
    },
    {
      id: 3,
      icon: Briefcase,
      title: 'Danışmanlık ve Eğitim Hizmeti Vermeme İlkesi',
      desc: 'TS EN ISO/IEC 17020 kalite ilkelerine uygun olarak tarafsızlığı zedeleyebilecek danışmanlık, tasarım veya ticari eğitim sunmayız. Yalnızca bağımsız muayene ve raporlama yaparız.'
    },
    {
      id: 4,
      icon: Users,
      title: 'Personel Ücreti - Karar Bağımsızlığı',
      desc: 'Muayene personelimizin ve raporları onaylayan sorumlu yetkili mühendislerimizin aylık sabit maaşları; verdikleri uygun/uygunsuz kararlarıyla veya muayene sayılarıyla ilişkili değildir. Prim veya baskı mekanizması uygulanamaz.'
    },
    {
      id: 5,
      icon: AlertCircle,
      title: 'Aksaklık Durumunda Denetimi Durdurma Yetkisi',
      desc: 'Tüm muayene mühendislerimiz, sahada can güvenliğini veya teknik standartları ihlal eden durumlarda, yönetim dahil hiç kimseden çekinmeksizin muayene faaliyetini derhal durdurma tam yetkisine sahiptir.'
    },
    {
      id: 6,
      icon: ShieldCheck,
      title: 'Mesleki Sorumluluk Sigortası Güvencesi',
      desc: 'Muayene faaliyetlerimiz kapsamında üçüncü taraflara karşı oluşabilecek her türlü olası zarar, hata veya mesleki risklere karşı kapsamlı Mesleki Sorumluluk Sigortası akdedilmiştir.'
    }
  ];

  return (
    <div id="akreditasyon-politikasi" className="accreditation-block-wrapper">
      
      {/* ÜST BAŞLIK */}
      <div className="section-intro-center">
        <div className="section-badge">
          <span className="badge-dot"></span>
          <span>TS EN ISO/IEC 17020 KALİTE İLKELERİ</span>
        </div>
        <h3 className="section-title-large font-bold">
          Bağımsızlık, Tarafsızlık ve <br />
          <span className="text-accent-glow">Kalite Politikamız</span>
        </h3>
        <p className="section-subtitle font-regular">
          Muayene süreçlerimizi TS EN ISO/IEC 17020’nin bağımsızlık, tarafsızlık ve izlenebilirlik ilkelerine göre kurguluyoruz. Bu metin, resmi bir akreditasyon belgesi iddiası değil; uyguladığımız kalite taahhüdüdür.
        </p>
      </div>

      {/* KALİTE POLİTİKASI ÖZET PANELİ */}
      <div className="quality-policy-hero-card">
        <div className="policy-hero-inner">
          <div className="policy-badge-box">
            <FileCheck2 size={28} />
          </div>
          <div className="policy-hero-text">
            <h4 className="policy-hero-title font-bold">
              Kalite yönetim taahhüdümüz (TS EN ISO/IEC 17020 ilkeleri)
            </h4>
            <p className="policy-hero-desc font-regular">
              Tüm muayene faaliyetlerimizde uluslararası ürün ve baca standartlarına uygun, güvenilir ve izlenebilir hizmet sunmayı taahhüt ederiz. Kalite sistemimizi yasal mevzuat ve TS EN ISO/IEC 17020 ilkeleri doğrultusunda geliştirir; <strong>tarafsızlık, gizlilik, dürüstlük ve güven</strong> esaslarına bağlı kalırız.
            </p>
            <div className="policy-meta-tags">
              <span>● Doküman Kodu: BKR-KP-01</span>
              <span>● Kapsam: Baca muayene ve raporlama</span>
              <span>● Standart: TS EN ISO/IEC 17020</span>
            </div>
          </div>
        </div>
      </div>

      {/* 6 TAAHHÜT MADDESİ IZGARASI */}
      <div className="commitments-cards-grid">
        {commitments.map((item) => {
          const IconComp = item.icon;
          return (
            <div key={item.id} className="commitment-card">
              <div className="commitment-icon-wrap">
                <IconComp size={22} />
              </div>
              <h5 className="commitment-title font-semibold">{item.title}</h5>
              <p className="commitment-desc font-regular">{item.desc}</p>
              <div className="commitment-check-row">
                <CheckCircle2 size={14} className="check-icon-green" />
                <span className="font-medium">17020 kalite ilkesi</span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
