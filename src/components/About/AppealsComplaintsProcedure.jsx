/* ==========================================================================
   BÖLÜM: İTİRAZ VE ŞİKAYETLERİN DEĞERLENDİRİLMESİ PROSEDÜRÜ
   (APPEALSCOMPLAINTSPROCEDURE.JSX)
   Açıklama: TS EN ISO/IEC 17020 Madde 7.5 gereğince web sitesi üzerinden
   kamunun erişimine açık olması zorunlu olan resmi itiraz ve şikayet mekanizması.
   ========================================================================== */

import React, { useState } from 'react';
import { 
  FileText, 
  ShieldAlert, 
  Send, 
  CheckCircle2, 
  HelpCircle,
  AlertTriangle
} from 'lucide-react';

export default function AppealsComplaintsProcedure() {
  const [activeTab, setActiveTab] = useState('prosedur'); // 'prosedur' veya 'form'
  const [formData, setFormData] = useState({
    type: 'İtiraz (Muayene Kararına İtiraz)',
    fullName: '',
    company: '',
    phone: '',
    email: '',
    reportNo: '',
    details: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const recipient = 'surmelibacaraporu@gmail.com';
    const subject = `[BKR Resmi Başvuru] ${formData.type} - ${formData.fullName}`;
    const body = `BAŞVURU DETAYLARI:
----------------------------------------
Başvuru Türü: ${formData.type}
Ad Soyad / Yetkili: ${formData.fullName}
Firma / Tesis: ${formData.company || 'Belirtilmedi'}
Telefon: ${formData.phone}
E-Posta: ${formData.email}
Rapor / Dosya No: ${formData.reportNo || 'Belirtilmedi'}

AÇIKLAMA / GEREKÇE:
${formData.details}
----------------------------------------
Tarih: ${new Date().toLocaleDateString('tr-TR')}
`;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div id="itiraz-sikayet" className="appeals-block-wrapper">
      
      {/* ÜST BAŞLIK */}
      <div className="section-intro-center">
        <div className="section-badge">
          <span className="badge-dot"></span>
          <span>TS EN ISO/IEC 17020 // MADDE 7.5 ŞEFFAFLIK PROTOKOLÜ</span>
        </div>
        <h3 className="section-title-large font-bold">
          İtiraz ve Şikayetlerin <br />
          <span className="text-accent-glow">Değerlendirilmesi Prosedürü</span>
        </h3>
        <p className="section-subtitle font-regular">
          Akreditasyon standartlarımız gereğince; muayene kararlarına ilişkin itirazlar ve hizmet süreçlerimize dair tüm geri bildirimler bağımsız teknik heyetimiz tarafından şeffaflıkla incelenir.
        </p>
      </div>

      {/* SEKME DEĞİŞTİRİCİ */}
      <div className="appeals-tabs-container">
        <button
          type="button"
          className={`appeals-tab-btn ${activeTab === 'prosedur' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('prosedur')}
        >
          <FileText size={16} />
          <span>Resmi Değerlendirme Esasları (BKR-P-09)</span>
        </button>
        <button
          type="button"
          className={`appeals-tab-btn ${activeTab === 'form' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('form')}
        >
          <Send size={16} />
          <span>Online İtiraz / Şikayet Bildirim Formu</span>
        </button>
      </div>

      {activeTab === 'prosedur' ? (
        /* PROSEDÜR DETAYLARI PANELİ */
        <div className="appeals-procedure-content">
          
          {/* TANIMLAR KARTLARI */}
          <div className="definitions-row-grid">
            <div className="definition-card">
              <div className="def-header">
                <AlertTriangle size={18} className="def-icon-yellow" />
                <h5 className="font-semibold text-white">İTİRAZ (Appeal) Nedir?</h5>
              </div>
              <p className="font-regular">
                Uygunluk değerlendirme hizmeti alan müşterinin, muayene kuruluşunun almış olduğu teknik bir kararı (rapor sonucu, uygunsuzluk tespiti veya kapsam reddi) <strong>yeniden değerlendirmesine</strong> yönelik resmi talebidir.
              </p>
            </div>

            <div className="definition-card">
              <div className="def-header">
                <HelpCircle size={18} className="def-icon-blue" />
                <h5 className="font-semibold text-white">ŞİKÂYET (Complaint) Nedir?</h5>
              </div>
              <p className="font-regular">
                Herhangi bir kişi veya kurumun, muayene kuruluşunun personel davranışları, zamanlama, iletişim veya genel hizmet faaliyetleriyle ilgili olarak yaptığı <strong>memnuniyetsizlik ifadesi ve düzeltme talebidir.</strong>
              </p>
            </div>
          </div>

          {/* SÜREÇ AŞAMALARI (4 ADIM) */}
          <div className="process-timeline-card">
            <h4 className="timeline-title font-semibold">Resmi İnceleme ve Çözüm Takvimi</h4>
            <div className="appeals-steps-flow">
              <div className="appeal-step-item">
                <span className="step-badge-num">1</span>
                <h6>Kayıt & Ön İnceleme</h6>
                <p>İtiraz veya şikayet formu Kalite Birimi'ne ulaştığı an kayıt altına alınır ve takip numarası verilir.</p>
              </div>

              <div className="appeal-step-item">
                <span className="step-badge-num">2</span>
                <h6>1 Hafta İçinde Teyit</h6>
                <p>Başvurunun işleme alındığı ve incelemenin başlatıldığı başvuru sahibine yazılı olarak en geç 1 hafta içinde tebliğ edilir.</p>
              </div>

              <div className="appeal-step-item">
                <span className="step-badge-num">3</span>
                <h6>Bağımsız Heyet Tetkiki</h6>
                <p>Muayeneyi yapan veya raporu imzalayan personelden tamamen bağımsız tarafsız mühendisler heyeti konuyu soruşturur.</p>
              </div>

              <div className="appeal-step-item">
                <span className="step-badge-num">4</span>
                <h6>En Geç 1 Ayda Karar</h6>
                <p>Nihai karar en geç 30 gün içinde gerekçeli olarak yazılı bildirilir; haklı itirazlarda düzeltici faaliyet derhal devreye girer.</p>
              </div>
            </div>
          </div>

          {/* TEMEL GÜVENCELER KUTUSU */}
          <div className="appeals-guarantees-banner">
            <div className="guarantee-icon">
              <ShieldAlert size={24} />
            </div>
            <div className="guarantee-text">
              <h6 className="font-semibold text-white">Ayrımcılık Yapmama ve Müşteri Hakları Güvencesi:</h6>
              <p className="font-regular">
                İtiraz veya şikayette bulunan müşterilerimize karşı kesinlikle ayrımcı bir muamele uygulanamaz. İtiraz süreci devam ederken veya sonuçlandıktan sonra bu durum, müşterinin diğer muayene işlemlerine hiçbir surette negatif olarak yansıtılamaz. İtirazda haklı bulunan durumlarda, ilgili personel bir daha o müşterinin muayenesinde görevlendirilmez.
              </p>
            </div>
          </div>

        </div>
      ) : (
        /* ONLİNE BAŞVURU FORMU */
        <div className="appeals-form-container">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="appeals-actual-form">
              <h4 className="form-head-title font-semibold">Online İtiraz / Şikayet Başvuru Formu</h4>
              <p className="form-head-sub font-regular">
                Lütfen detayları eksiksiz giriniz. Başvurunuz doğrudan Bağımsız Kalite ve İtiraz Komitesi'ne iletilecektir.
              </p>

              <div className="appeals-form-grid">
                <div>
                  <label className="city-input-label">Başvuru Türü</label>
                  <select 
                    className="city-select-field"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="İtiraz (Muayene Kararına İtiraz)">İtiraz (Muayene Kararına / Uygunsuzluğa İtiraz)</option>
                    <option value="Şikayet (Hizmet / Personel Memnuniyetsizliği)">Şikayet (Hizmet Süreci / Personel Memnuniyetsizliği)</option>
                    <option value="Görüş / Öneri">Görüş ve Gelişim Önerisi</option>
                  </select>
                </div>

                <div>
                  <label className="city-input-label">Ad Soyad / Yetkili</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Adınız Soyadınız"
                    className="city-input-field"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div>
                  <label className="city-input-label">Firma / Tesis Unvanı</label>
                  <input 
                    type="text" 
                    placeholder="Firma Adı veya Bina Yönetimi"
                    className="city-input-field"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

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

                <div>
                  <label className="city-input-label">E-Posta Adresi</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="ornek@firma.com"
                    className="city-input-field"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="city-input-label">Varsa Muayene Rapor / Dosya No</label>
                  <input 
                    type="text" 
                    placeholder="Örn: BKR-2026-0814"
                    className="city-input-field"
                    value={formData.reportNo}
                    onChange={(e) => setFormData({ ...formData, reportNo: e.target.value })}
                  />
                </div>

                <div className="form-full-width">
                  <label className="city-input-label">İtiraz / Şikayet Detayları ve Gerekçesi</label>
                  <textarea 
                    rows="4" 
                    required
                    placeholder="Lütfen itiraz ettiğiniz kararı veya şikayete konu olan durumu ayrıntılı olarak açıklayınız..."
                    className="city-textarea-field"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="city-submit-btn" style={{ maxWidth: '320px', marginTop: '12px' }}>
                <Send size={16} />
                <span>Resmi Başvuruyu Gönder</span>
              </button>
            </form>
          ) : (
            <div className="appeals-form-success">
              <CheckCircle2 size={48} className="check-icon-green" />
              <h4 className="font-bold text-white" style={{ fontSize: '22px' }}>
                Başvurunuz Kayıt Altına Alındı
              </h4>
              <p className="font-regular" style={{ color: '#a0a0ad', maxWidth: '500px' }}>
                Sayın <strong>{formData.fullName}</strong>, başvurunuz resmi olarak <strong>surmelibacaraporu@gmail.com</strong> adresine iletilmiştir. ISO 17020 Madde 7.5 prosedürü uyarınca en geç <strong>1 hafta içinde</strong> yazılı teyit mektubu tarafınıza ulaştırılacak ve en geç <strong>30 gün içinde</strong> bağımsız heyet kararı tebliğ edilecektir.
              </p>
              <button 
                type="button" 
                className="region-tab-btn"
                onClick={() => setIsSubmitted(false)}
              >
                Yeni Başvuru Yap
              </button>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
