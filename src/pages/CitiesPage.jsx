/* ==========================================================================
   SAYFA: HİZMET BÖLGELERİMİZ / 81 İL VİTRİNİ (CITIESPAGE.JSX)
   Açıklama: Türkiye'nin 81 iline yönelik akredite baca kontrol hizmetlerinin
   ana vitrini. Etkileşimli hizmet ağı haritası, anlık arama, bölge filtresi
   ve 81 ilin alfabetik tıklanabilir ızgarasını barındırır.
   ========================================================================== */

import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  MapPin, 
  Search, 
  ArrowUpRight
} from 'lucide-react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import SeoHead from '../components/Common/SeoHead';
import { REGIONS_LIST, searchCities } from '../data/citiesData';
import './CitiesPage.css';

export default function CitiesPage({ onOpenAppointment }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Tümü');

  // Filtrelenmiş iller listesi
  const filteredCities = useMemo(() => {
    return searchCities(searchQuery, selectedRegion);
  }, [searchQuery, selectedRegion]);

  // Türkiye haritasında öne çıkan ana lojistik merkezler (SVG koordinatları)
  const majorHubs = [
    { name: 'İstanbul', slug: 'istanbul', cx: 215, cy: 75, plate: '34' },
    { name: 'Bursa', slug: 'bursa', cx: 210, cy: 110, plate: '16' },
    { name: 'İzmir', slug: 'izmir', cx: 135, cy: 175, plate: '35' },
    { name: 'Ankara', slug: 'ankara', cx: 380, cy: 115, plate: '06', hub: true },
    { name: 'Antalya', slug: 'antalya', cx: 275, cy: 235, plate: '07' },
    { name: 'Konya', slug: 'konya', cx: 375, cy: 195, plate: '42' },
    { name: 'Samsun', slug: 'samsun', cx: 505, cy: 65, plate: '55' },
    { name: 'Adana', slug: 'adana', cx: 480, cy: 225, plate: '01' },
    { name: 'Trabzon', slug: 'trabzon', cx: 660, cy: 70, plate: '61' },
    { name: 'Gaziantep', slug: 'gaziantep', cx: 575, cy: 220, plate: '27' },
    { name: 'Diyarbakır', slug: 'diyarbakir', cx: 690, cy: 185, plate: '21' },
    { name: 'Erzurum', slug: 'erzurum', cx: 730, cy: 110, plate: '25' },
    { name: 'Van', slug: 'van', cx: 830, cy: 165, plate: '65' },
  ];

  return (
    <div className="cities-page-layout">
      {/* 81 İl SEO Başlık ve Meta Tanımları */}
      <SeoHead
        title="81 İl Baca Raporu | Yetkili Baca Sızdırmazlık Testi ve Muayene Hizmetleri"
        description="Türkiye'nin 81 ilinde gaz dağıtım kuruluşları (İGDAŞ, Başkentgaz, İzmirgaz vb.) onaylı yetkili baca raporu, baca sızdırmazlık testi ve kontrol hizmetleri."
        keywords="81 il baca raporu, türkiye baca raporu, yetkili baca raporu, baca sızdırmazlık testi, gaz açım baca raporu, doğalgaz baca uygunluk belgesi"
        canonicalUrl="https://bacaraporu.com.tr/iller"
      />

      {/* 1. ÜST NAVİGASYON */}
      <Navbar onOpenAppointment={onOpenAppointment} />

      <main className="cities-page-main">
        
        {/* 2. EKMEK KIRINTISI */}
        <div className="cities-breadcrumb-bar">
          <div className="container">
            <nav className="cities-breadcrumb" aria-label="Ekmek Kırıntısı">
              <button 
                type="button" 
                className="cities-breadcrumb-link"
                onClick={() => navigate('/')}
              >
                <Home size={13} />
                <span>Ana Sayfa</span>
              </button>
              <ChevronRight size={13} className="cities-breadcrumb-separator" />
              <span className="cities-breadcrumb-current font-medium">Hizmet Bölgelerimiz (81 İl)</span>
            </nav>
          </div>
        </div>

        {/* 3. TEPE HERO BÖLÜMÜ */}
        <section className="cities-hero-section">
          <div className="container">
            
            <div className="cities-hero-header">
              <div className="cities-hero-badge">
                <MapPin size={14} />
                <span>81 İLDE RESMİ VE AKREDİTE SAHA DENETİMİ</span>
              </div>
              
              <h1 className="cities-hero-title font-bold">
                Türkiye'nin 81 İline <br />
                <span className="text-secondary font-regular">Kesintisiz Baca Muayene Hizmeti</span>
              </h1>

              <p className="cities-hero-lead font-regular">
                Bulunduğunuz ili seçerek size özel hizmetlerimizi, yetkili gaz dağıtım mevzuatını ve randevu detaylarını inceleyin.
              </p>
            </div>

            {/* ETKİLEŞİMLİ TÜRKİYE HİZMET AĞI VİTRİNİ */}
            <div className="turkey-network-showcase">
              
              {/* Metrik Göstergeleri */}
              <div className="network-stats-row">
                <div className="network-stat-box">
                  <span className="stat-box-val font-bold">81 İl</span>
                  <span className="stat-box-label font-medium">Aktif Hizmet Kapsamı</span>
                </div>
                <div className="network-stat-box">
                  <span className="stat-box-val font-bold">%100</span>
                  <span className="stat-box-label font-medium">Resmi Mevzuat Uyumu</span>
                </div>
                <div className="network-stat-box">
                  <span className="stat-box-val font-bold">24 Saat</span>
                  <span className="stat-box-label font-medium">Saha Ekibi Yönlendirme</span>
                </div>
                <div className="network-stat-box">
                  <span className="stat-box-val font-bold">15 Dk</span>
                  <span className="stat-box-label font-medium">Ortalama Teklif Süresi</span>
                </div>
              </div>

              {/* Etkileşimli Ağ Haritası Kanvası */}
              <div className="network-map-canvas">
                <svg 
                  className="network-map-svg" 
                  viewBox="0 0 920 300" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Ağ Bağlantı Hatları */}
                  <path 
                    d="M 215 75 L 380 115 L 210 110 L 135 175 L 275 235 L 375 195 L 380 115 L 505 65 L 660 70 L 730 110 L 830 165 L 690 185 L 575 220 L 480 225 L 375 195" 
                    stroke="rgba(255,255,255,0.12)" 
                    strokeWidth="1.5" 
                    strokeDasharray="4 4"
                  />
                  <path 
                    d="M 215 75 L 505 65 M 380 115 L 480 225 M 380 115 L 730 110 M 575 220 L 690 185" 
                    stroke="rgba(255,255,255,0.07)" 
                    strokeWidth="1"
                  />

                  {/* Türkiye Haritası Şematik Çevre Çizgisi */}
                  <path
                    d="M 120 70 Q 210 40 340 55 Q 520 40 730 65 Q 860 110 870 170 Q 820 220 670 240 Q 510 260 370 245 Q 230 260 120 200 Q 100 130 120 70 Z"
                    fill="rgba(255, 255, 255, 0.015)"
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="1"
                  />

                  {/* Merkez Düğümler (Noktalar & Nabız) */}
                  {majorHubs.map((hub) => (
                    <g 
                      key={hub.slug} 
                      className="map-node"
                      onClick={() => navigate(`/iller/${hub.slug}`)}
                    >
                      {/* Nabız Çemberi */}
                      <circle 
                        cx={hub.cx} 
                        cy={hub.cy} 
                        r="6" 
                        fill="none" 
                        stroke="#ffffff" 
                        strokeWidth="1" 
                        className="map-pulse"
                      />
                      {/* Merkez Nokta */}
                      <circle 
                        cx={hub.cx} 
                        cy={hub.cy} 
                        r={hub.hub ? '6' : '4.5'} 
                        fill={hub.hub ? '#ffffff' : '#b0b0bc'} 
                      />
                      {/* Etiket */}
                      <text 
                        x={hub.cx} 
                        y={hub.cy - 12} 
                        fill="#d1d1dc" 
                        fontSize="10" 
                        fontWeight="600"
                        textAnchor="middle"
                        letterSpacing="0.04em"
                      >
                        {hub.name} ({hub.plate})
                      </text>
                    </g>
                  ))}
                </svg>

                <div className="map-overlay-badge">
                  <span className="map-live-dot"></span>
                  <span>Canlı Mobil Saha Ekipleri Aktif</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 4. İLLER LİSTESİ & FİLTRELEME BÖLÜMÜ */}
        <section className="cities-directory-section">
          <div className="container">
            
            {/* ARAMA VE BÖLGE FİLTRE BARI */}
            <div className="cities-filter-toolbar">
              
              {/* İl Arama Inputu */}
              <div className="cities-search-box">
                <Search size={18} className="search-input-icon" />
                <input
                  type="text"
                  placeholder="İl adı veya plaka kodu ile arayın (Örn: Ankara, 06, İzmir, Bursa...)"
                  className="cities-search-input font-regular"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    type="button" 
                    className="search-clear-btn"
                    onClick={() => setSearchQuery('')}
                  >
                    Temizle
                  </button>
                )}
              </div>

              {/* Coğrafi Bölge Sekmeleri */}
              <div className="region-tabs-row">
                {REGIONS_LIST.map((reg) => (
                  <button
                    key={reg}
                    type="button"
                    className={`region-tab-btn ${selectedRegion === reg ? 'region-tab-active' : ''}`}
                    onClick={() => setSelectedRegion(reg)}
                  >
                    {reg}
                  </button>
                ))}
              </div>

              {/* Sonuç Sayacı */}
              <div className="cities-results-count font-medium">
                <span>
                  Toplam <strong>{filteredCities.length}</strong> il listeleniyor
                  {selectedRegion !== 'Tümü' && ` (${selectedRegion} Bölgesi)`}
                </span>
                {searchQuery && (
                  <span>"{searchQuery}" için sonuçlar</span>
                )}
              </div>

            </div>

            {/* 81 İL ALFABETİK IZGARASI */}
            {filteredCities.length > 0 ? (
              <div className="cities-grid">
                {filteredCities.map((city) => (
                  <div
                    key={city.slug}
                    className="city-card-item"
                    onClick={() => navigate(`/iller/${city.slug}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        navigate(`/iller/${city.slug}`);
                      }
                    }}
                  >
                    <div className="city-card-left">
                      <div className="city-plate-badge">
                        {city.plate}
                      </div>
                      <div className="city-info-col">
                        <span className="city-name-text">{city.name}</span>
                        <span className="city-meta-text">{city.region} • {city.gasCompany}</span>
                      </div>
                    </div>

                    <div className="city-arrow-icon">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="cities-empty-state">
                <Search size={36} style={{ color: '#6a6a75', marginBottom: '12px' }} />
                <h4>Aramanızla eşleşen il bulunamadı</h4>
                <p>Lütfen arama terimini kontrol edin veya filtreleri temizleyin.</p>
                <button
                  type="button"
                  className="region-tab-btn"
                  style={{ marginTop: '16px' }}
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedRegion('Tümü');
                  }}
                >
                  Tüm İlleri Göster
                </button>
              </div>
            )}

            {/* ALT ÇAĞRI BANNERI */}
            <div className="cities-cta-strip">
              <div className="cities-cta-content">
                <h3>Bulunduğunuz Şehir İçin Aynı Gün Denetim Planlayın</h3>
                <p>
                  81 ilin tamamında akredite mühendis kadromuz ve kalibreli dijital cihazlarımızla resmi gaz açma ve onaylı baca uygunluk raporlarınızı hazırlıyoruz.
                </p>
              </div>
              <button 
                type="button" 
                className="cities-cta-btn"
                onClick={onOpenAppointment}
              >
                <span>Hemen Randevu ve Fiyat Teklifi Alın</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

          </div>
        </section>

      </main>

      {/* 5. FOOTER */}
      <Footer onOpenAppointment={onOpenAppointment} />
    </div>
  );
}
