/* ==========================================================================
   BÖLÜM: ÜST NAVİGASYON VE LOGO (HEADER / NAVBAR)
   Açıklama: Sitenin en üstünde yer alan marka logosu ("Baca Rapor") ve
   çoklu ekran (multi-screen) sayfa/bölüm menü bağlantılarını barındırır.
   Hizmetler menüsü fare ile üzerine gelindiğinde (hover) aşağı açılır ve
   3 temel hizmeti listeler.
   ========================================================================== */

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ShieldCheck, 
  Menu, 
  X, 
  ArrowUpRight, 
  ChevronDown, 
  Gauge, 
  FileCheck2, 
  Camera 
} from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenAppointment }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(true);
  const dropdownTimeoutRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3 Temel Hizmetin Veri Listesi
  const serviceItems = [
    {
      id: 'sizdirmazlik',
      title: 'Baca Sızdırmazlık Testi',
      subtitle: 'EN 1443 Basınç Doğrulaması',
      path: '/hizmetler/baca-sizdirmazlik-testi',
      icon: Gauge,
    },
    {
      id: 'proje-montaj',
      title: 'Proje ve Montaj Uygunluk',
      subtitle: 'CAD & Lazer Ölçüm Kontrolü',
      path: '/hizmetler/proje-ve-montaj-uygunluk-muayenesi',
      icon: FileCheck2,
    },
    {
      id: 'periyodik-kontrol',
      title: 'Periyodik Baca Kontrolleri',
      subtitle: '360° Robotik Kamera Taraması',
      path: '/hizmetler/periyodik-baca-kontrolleri',
      icon: Camera,
    },
  ];

  // Fare menü üzerine geldiğinde açma
  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsServicesDropdownOpen(true);
  };

  // Fare menüden ayrıldığında gecikmeli kapatma (kullanıcı konforu için)
  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150);
  };

  // Hizmet seçimi ve yönlendirme
  const handleServiceSelect = (path) => {
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  // Sayfa veya bölüm içi navigasyon yöneticisi
  const handleNavClick = (target) => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);

    if (target === 'home') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else if (target === 'corporate') {
      navigate('/kurumsal');
    } else if (target === 'iller') {
      navigate('/iller');
    } else if (target === 'hizmetler') {
      if (location.pathname === '/') {
        const el = document.getElementById('hizmetler');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/#hizmetler');
      }
    } else {
      if (location.pathname === '/') {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/#${target}`);
      }
    }
  };

  const isCorporatePage = location.pathname.startsWith('/kurumsal');
  const isServicesPage = location.pathname.startsWith('/hizmetler');
  const isCitiesPage = location.pathname.startsWith('/iller');
  const isHomePage = location.pathname === '/';

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        
        {/* ----- 1. LOGO ALANI ("BACA RAPOR") ----- */}
        <button 
          type="button" 
          className="navbar-brand-btn" 
          onClick={() => handleNavClick('home')}
          title="Baca Rapor - Ana Sayfa"
        >
          <div className="brand-icon-box">
            <ShieldCheck size={22} className="brand-svg-icon" />
          </div>
          <span className="brand-text">
            BACA <span className="brand-text-accent">RAPOR</span>
          </span>
        </button>

        {/* ----- 2. MASAÜSTÜ ÇOKLU SAYFA MENÜ LİNKLERİ ----- */}
        <nav className="navbar-nav-links">
          <button 
            type="button"
            className={`nav-link ${isHomePage ? 'nav-link-active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Ana Sayfa
          </button>

          <button 
            type="button"
            className={`nav-link ${isCorporatePage ? 'nav-link-active' : ''}`}
            onClick={() => handleNavClick('corporate')}
          >
            Kurumsal
          </button>

          {/* ----- HİZMETLER VE AÇILIR DROPDOWN MENÜSÜ ----- */}
          <div 
            className="nav-dropdown-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              type="button"
              className={`nav-link nav-dropdown-trigger ${isServicesPage ? 'nav-link-active' : ''}`}
              onClick={() => handleNavClick('hizmetler')}
              aria-haspopup="true"
              aria-expanded={isServicesDropdownOpen}
            >
              <span>Hizmetler</span>
              <ChevronDown 
                size={14} 
                className={`dropdown-chevron ${isServicesDropdownOpen ? 'chevron-rotated' : ''}`} 
              />
            </button>

            {/* AÇILIR KUTU (DROPDOWN PANELİ) */}
            <div className={`nav-dropdown-panel ${isServicesDropdownOpen ? 'panel-visible' : ''}`}>
              <div className="dropdown-panel-content">
                <div className="dropdown-panel-header">
                  <span className="dropdown-tag">// MÜHENDİSLİK HİZMETLERİMİZ</span>
                </div>
                
                <div className="dropdown-items-list">
                  {serviceItems.map((item) => {
                    const IconComp = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        className={`dropdown-item-row ${isActive ? 'item-row-active' : ''}`}
                        onClick={() => handleServiceSelect(item.path)}
                      >
                        <div className="item-icon-box">
                          <IconComp size={16} />
                        </div>
                        <div className="item-texts">
                          <span className="item-title">{item.title}</span>
                          <span className="item-sub">{item.subtitle}</span>
                        </div>
                        <ArrowUpRight size={14} className="item-arrow" />
                      </button>
                    );
                  })}
                </div>

                <div className="dropdown-panel-footer">
                  <button
                    type="button"
                    className="dropdown-all-link"
                    onClick={() => {
                      setIsServicesDropdownOpen(false);
                      navigate('/kurumsal#saha-hazirlik');
                    }}
                  >
                    <span>Saha Hazırlık Kılavuzu (BKR-T-03)</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button 
            type="button"
            className={`nav-link ${isCitiesPage ? 'nav-link-active' : ''}`}
            onClick={() => handleNavClick('iller')}
          >
            İller
          </button>

          <button 
            type="button"
            className="nav-link"
            onClick={() => handleNavClick('iletisim')}
          >
            İletişim
          </button>
        </nav>

        {/* ----- 3. SAĞ AKSİYON BUTONU (RANDEVU AL) ----- */}
        <div className="navbar-actions">
          <button 
            type="button" 
            className="navbar-cta-btn" 
            onClick={onOpenAppointment}
            title="Online Randevu Oluştur"
          >
            <span>Randevu Al</span>
            <ArrowUpRight size={16} />
          </button>

          {/* Mobil Hamburger Menü Butonu */}
          <button 
            type="button" 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menüyü Aç / Kapat"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ----- 4. MOBİL AÇILIR MENÜ ALANI ----- */}
      {isMobileMenuOpen && (
        <div className="mobile-dropdown-menu">
          <button 
            type="button"
            className={`mobile-nav-link ${isHomePage ? 'mobile-nav-active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Ana Sayfa
          </button>
          
          <button 
            type="button"
            className={`mobile-nav-link ${isCorporatePage ? 'mobile-nav-active' : ''}`}
            onClick={() => handleNavClick('corporate')}
          >
            Kurumsal
          </button>

          {/* Mobil Hizmetler ve Alt Menü */}
          <div className="mobile-services-section">
            <button 
              type="button"
              className={`mobile-nav-link mobile-services-toggle ${isServicesPage ? 'mobile-nav-active' : ''}`}
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              <span>Hizmetler</span>
              <ChevronDown size={16} className={isMobileServicesOpen ? 'chevron-rotated' : ''} />
            </button>

            {isMobileServicesOpen && (
              <div className="mobile-sub-services-list">
                {serviceItems.map((item) => {
                  const IconComp = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`mobile-sub-item ${isActive ? 'mobile-sub-active' : ''}`}
                      onClick={() => handleServiceSelect(item.path)}
                    >
                      <IconComp size={15} />
                      <span>{item.title}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button 
            type="button"
            className={`mobile-nav-link ${isCitiesPage ? 'mobile-nav-active' : ''}`}
            onClick={() => handleNavClick('iller')}
          >
            İller (Hizmet Bölgeleri)
          </button>

          <button 
            type="button"
            className="mobile-nav-link"
            onClick={() => handleNavClick('iletisim')}
          >
            İletişim
          </button>

          <button 
            type="button"
            className="mobile-cta-btn" 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenAppointment();
            }}
          >
            Randevu Al
          </button>
        </div>
      )}
    </header>
  );
}
