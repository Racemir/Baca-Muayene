/* ==========================================================================
   BÖLÜM: ÜST NAVİGASYON VE LOGO (HEADER / NAVBAR)
   Açıklama: Sitenin en üstünde yer alan marka logosu ("Baca Rapor") ve
   çoklu ekran (multi-screen) sayfa/bölüm menü bağlantılarını barındırır.
   Hizmetler menüsü fare ile üzerine gelindiğinde (hover) aşağı açılır ve
   3 temel hizmeti listeler.
   ========================================================================== */

import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  ChevronDown, 
  Gauge, 
  FileCheck2, 
  Camera,
  MapPin
} from 'lucide-react';
import './Navbar.css';
import Logo from './Logo';

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

  const isServicesPage = location.pathname.startsWith('/hizmetler');

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        
        {/* ----- 1. LOGO ALANI ("BACA RAPORU") ----- */}
        <Link
          to="/"
          className="navbar-brand-btn"
          title="Baca Raporu - Ana Sayfa"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Logo />
        </Link>

        {/* ----- 2. MASAÜSTÜ ÇOKLU SAYFA MENÜ LİNKLERİ ----- */}
        <nav className="navbar-nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            Ana Sayfa
          </NavLink>

          <NavLink
            to="/kurumsal"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            Kurumsal
          </NavLink>

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
                      <Link
                        key={item.id}
                        to={item.path}
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
                      </Link>
                    );
                  })}
                </div>

                <div className="dropdown-panel-footer">
                  <Link
                    to="/kurumsal#saha-hazirlik"
                    className="dropdown-all-link"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    <span>Saha Hazırlık Kılavuzu (BKR-T-03)</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <NavLink
            to="/iller"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            İller
          </NavLink>

          <a href="/#iletisim" className="nav-link">
            İletişim
          </a>

          <a 
            href="https://share.google/FlGwC154l0NluMoQO" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link nav-map-link"
            title="Google Haritalar - İstanbul İGDAŞ Baca Raporu"
          >
            <MapPin size={13} style={{ color: '#4dd0e1' }} />
            <span>Harita</span>
          </a>
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
          <NavLink
            to="/"
            end
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-nav-active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ana Sayfa
          </NavLink>
          
          <NavLink
            to="/kurumsal"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-nav-active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kurumsal
          </NavLink>

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
                    <Link
                      key={item.id}
                      to={item.path}
                      className={`mobile-sub-item ${isActive ? 'mobile-sub-active' : ''}`}
                      onClick={() => handleServiceSelect(item.path)}
                    >
                      <IconComp size={15} />
                      <span>{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <NavLink
            to="/iller"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-nav-active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            İller (Hizmet Bölgeleri)
          </NavLink>

          <a
            href="/#iletisim"
            className="mobile-nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            İletişim
          </a>

          <a 
            href="https://share.google/FlGwC154l0NluMoQO" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mobile-nav-link"
            title="Google Haritalar - İstanbul İGDAŞ Baca Raporu"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#4dd0e1' }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} />
              <span>Harita & Konum (Google)</span>
            </span>
            <ArrowUpRight size={15} />
          </a>

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
