/* ==========================================================================
   BÖLÜM: HİZMET ÖZETLERİ (SERVICES SECTION - 3'LÜ KART YAPISI)
   Açıklama: Kullanıcının paylaştığı kaftechnology.com örneğindeki gibi;
   koyu zemin üzerinde yan yana 3 adet şık, 3D görselli kart yer alır.
   Kart Başlıkları:
   1. Baca Sızdırmazlık Testi
   2. Proje ve Montaj Uygunluk Muayenesi
   3. Periyodik Baca Kontrolleri
   ========================================================================== */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Gauge, FileCheck2, Camera } from 'lucide-react';
import imgSizdirmazlik from '../../assets/images/service-sizdirmazlik.jpg';
import imgProjeMontaj from '../../assets/images/service-proje-montaj.jpg';
import imgPeriyodik from '../../assets/images/service-periyodik-kontrol.jpg';
import './ServicesCards.css';

export default function ServicesCards() {
  const navigate = useNavigate();

  // 3 Temel Hizmetin Veri Yapısı ve Ayrılmış Sayfa Rotaları
  const services = [
    {
      id: 'sizdirmazlik',
      title: 'Baca Sızdırmazlık Testi',
      path: '/hizmetler/baca-sizdirmazlik-testi',
      tag: 'Basınç Analizi & Güvenlik',
      icon: Gauge,
      description: 'Pozitif ve negatif basınçlı baca hatlarında dijital manometre cihazlarıyla sızıntı tespiti ve EN standartlarında sızdırmazlık sınıfı doğrulaması.',
      image: imgSizdirmazlik,
      badge: 'EN 13384 UYUMLU',
    },
    {
      id: 'proje-montaj',
      title: 'Proje ve Montaj Uygunluk Muayenesi',
      path: '/hizmetler/proje-ve-montaj-uygunluk-muayenesi',
      tag: 'Mühendislik Denetimi',
      icon: FileCheck2,
      description: 'Baca güzergahı, çap hesapları, malzeme et kalınlığı ve yangın kompartıman geçişlerinin onaylı projeye ve yürürlükteki mevzuata uygunluk kontrolü.',
      image: imgProjeMontaj,
      badge: 'CAD & Lazer Ölçüm',
    },
    {
      id: 'periyodik-kontrol',
      title: 'Periyodik Baca Kontrolleri',
      path: '/hizmetler/periyodik-baca-kontrolleri',
      tag: 'Yıllık Yasal Muayene',
      icon: Camera,
      description: 'Yüksek çözünürlüklü endoskopik kamera robotlarıyla baca içi deformasyon, kurum birikimi ve tıkanıklıkların taranarak fotoğraflı raporlanması.',
      image: imgPeriyodik,
      badge: 'Robotik Kamera',
    },
  ];

  const handleCardClick = (item) => {
    navigate(item.path);
  };

  return (
    /* ===== [WEBSITE BÖLÜMÜ]: HİZMETLER BÖLÜMÜ (3'LÜ KART DÜZENİ) ===== */
    <section id="hizmetler" className="services-section">
      <div className="container">

        {/* ----- BÖLÜM ÜST BAŞLIĞI (HEADER) ----- */}
        <div className="services-header-area">
          <span className="services-section-subtitle font-medium">
            UZMAN MÜHENDİSLİK HİZMETLERİ
          </span>
          <h2 className="services-section-title font-bold">
            Standartlara Uygun, <br />
            <span className="text-secondary font-regular">Doğrulanabilir Baca Denetimleri</span>
          </h2>
          <p className="services-section-lead font-regular">
            İleri teknoloji test ekipmanlarımız ve uzman denetçilerimizle yasal mevzuatlara tam uyumlu 3 temel alanda hizmet veriyoruz.
          </p>
        </div>

        {/* ----- 3 ADET YAN YANA HİZMET KARTI (KAF TECHNOLOGY STİLİ) ----- */}
        <div className="services-cards-grid">
          {services.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id} 
                className="service-card"
                onClick={() => handleCardClick(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(item);
                  }
                }}
              >
                {/* Kart İçi Üst Bilgi Alanı */}
                <div className="card-top-content">
                  <div className="card-tag-row">
                    <span className="card-badge font-medium">{item.badge}</span>
                    <div className="card-icon-circle">
                      <IconComponent size={18} />
                    </div>
                  </div>

                  {/* Kart Başlığı */}
                  <h3 className="card-title font-semibold">{item.title}</h3>

                  {/* Kart Kısa Açıklaması */}
                  <p className="card-description font-regular">{item.description}</p>
                </div>

                {/* Kart Görsel Alanı (3D Render / Fotoğraf) */}
                <div className="card-image-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="card-media-image"
                    loading="lazy" 
                  />
                  <div className="card-image-gradient-overlay"></div>
                </div>

                {/* Kart Alt Çizgisi ve Etkileşim İpucu */}
                <div className="card-bottom-action">
                  <span className="card-action-text font-medium">Detaylı İncele</span>
                  <div className="card-action-arrow">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
