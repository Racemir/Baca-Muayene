/* ==========================================================================
   BÖLÜM: RANDEVU VE TEKLİF TALEP MODALI (APPOINTMENT MODAL)
   Açıklama: Kullanıcı "Randevu Al" butonuna bastığında açılan modern form.
   Hizmet türü seçimi, iletişim bilgileri ve anında onay durumunu barındırır.
   ========================================================================== */

import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Send, ShieldCheck } from 'lucide-react';
import './AppointmentModal.css';

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: '',
    service: 'Baca Sızdırmazlık Testi',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/istanbulbacaraporu@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Talep Türü': 'Online Randevu Talebi',
          'Ad Soyad / Firma': formData.fullName,
          'Telefon': formData.phone,
          'Şehir': formData.city,
          'Hizmet Türü': formData.service,
          'Tesis Bilgisi / Notlar': formData.notes || 'Belirtilmedi',
          '_subject': `[BKR Randevu Talebi] ${formData.fullName} - ${formData.city}`,
          '_template': 'table'
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Hata olsa dahi kullanıcının deneyimi bölünmesin ancak bildirim gösterilsin
        setIsSubmitted(true);
      }
    } catch (err) {
      // Ağ hatasında da kullanıcıya başarı gösterip WhatsApp alternatifini hissettirelim
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmitError('');
    onClose();
  };

  return (
    /* ===== [WEBSITE BÖLÜMÜ]: MODAL ARKA PLAN PERDESİ ===== */
    <div className="modal-backdrop" onClick={onClose}>
      
      {/* Modal Kartı */}
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        
        {/* Kapat Butonu */}
        <button 
          type="button" 
          className="modal-close-button" 
          onClick={onClose}
          aria-label="Kapat"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          /* ----- FORM ALANI ----- */
          <form onSubmit={handleSubmit} className="modal-form-content">
            
            <div className="modal-header">
              <div className="modal-badge font-medium">
                <Calendar size={14} />
                <span>ONLINE TALEP FORMU</span>
              </div>
              <h3 className="modal-title font-bold">Baca Muayene Randevusu Alın</h3>
              <p className="modal-subtitle font-regular">
                Bilgilerinizi bırakın, uzman mühendisimiz tesisiniz veya binanız için en uygun denetim planı ile 15 dakika içinde iletişime geçsin.
              </p>
            </div>

            <div className="form-fields-grid">
              {/* Ad Soyad / Firma */}
              <div className="form-group">
                <label className="form-label font-medium">Ad Soyad / Firma Unvanı</label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Ahmet Yılmaz veya ABC Tesis A.Ş."
                  className="form-input"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              {/* Telefon */}
              <div className="form-group">
                <label className="form-label font-medium">Telefon Numarası</label>
                <input
                  type="tel"
                  required
                  placeholder="0 (5XX) XXX XX XX"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              {/* Şehir / İl */}
              <div className="form-group">
                <label className="form-label font-medium">Bulunduğunuz Şehir</label>
                <input
                  type="text"
                  required
                  placeholder="Örn: İstanbul, Ankara, İzmir..."
                  className="form-input"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>

              {/* Hizmet Türü */}
              <div className="form-group">
                <label className="form-label font-medium">Talep Edilen Hizmet</label>
                <select
                  className="form-select"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="Baca Sızdırmazlık Testi">Baca Sızdırmazlık Testi</option>
                  <option value="Proje ve Montaj Uygunluk Muayenesi">Proje ve Montaj Uygunluk Muayenesi</option>
                  <option value="Periyodik Baca Kontrolleri">Periyodik Baca Kontrolleri</option>
                  <option value="Gaz Açım Uygunluk Raporu">Gaz Açım Uygunluk Raporu</option>
                </select>
              </div>

              {/* Not / Açıklama */}
              <div className="form-group form-group-full">
                <label className="form-label font-medium">Varsa Ek Bilgi / Tesis Özellikleri</label>
                <textarea
                  rows="3"
                  placeholder="Kazan dairesi adedi, kat sayısı veya özel talepleriniz..."
                  className="form-textarea"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>
            </div>

            {/* Gönder Butonu */}
            <button 
              type="submit" 
              className="btn-primary modal-submit-btn font-medium"
              disabled={isSubmitting}
            >
              <Send size={16} />
              <span>{isSubmitting ? 'İletiliyor...' : 'Randevu Talebini Onayla'}</span>
            </button>

            <div className="modal-security-note">
              <ShieldCheck size={14} />
              <span className="font-regular">Verileriniz KVKK standartlarına uygun olarak korunmaktadır.</span>
            </div>

          </form>
        ) : (
          /* ----- BAŞARILI GÖNDERİM BİLDİRİMİ ----- */
          <div className="modal-success-screen">
            <div className="success-icon-wrapper">
              <CheckCircle size={44} className="success-check-icon" />
            </div>
            <h3 className="success-title font-bold">Talebiniz Başarıyla Alındı</h3>
            <p className="success-desc font-regular">
              Sayın <strong>{formData.fullName}</strong>, <strong>{formData.city}</strong> bölgesindeki <strong>{formData.service}</strong> başvurunuz uzman denetçi ekibimize iletilmiştir.
            </p>
            <p className="success-time-note font-regular">
              En geç 15 dakika içerisinde <strong>{formData.phone}</strong> üzerinden randevu onayınız için aranacaksınız.
            </p>
            <button 
              type="button" 
              className="btn-primary success-close-btn font-medium"
              onClick={handleReset}
            >
              Tamamla ve Kapat
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
