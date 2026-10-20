import { Link } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import SeoHead from '../components/Common/SeoHead';
import { absUrl } from '../seo/site';
import './NotFoundPage.css';

export default function NotFoundPage({ onOpenAppointment }) {
  return (
    <div className="not-found-layout">
      <SeoHead
        title="Sayfa Bulunamadı | Baca Raporu"
        description="Aradığınız sayfa bulunamadı. Baca raporu, sızdırmazlık testi ve 81 il hizmet sayfalarına ana menüden ulaşabilirsiniz."
        canonicalUrl={absUrl('/')}
        noindex
      />
      <Navbar onOpenAppointment={onOpenAppointment} />
      <main className="not-found-main">
        <p className="not-found-code">404</p>
        <h1 className="not-found-title font-bold">Sayfa bulunamadı</h1>
        <p className="not-found-text font-regular">
          Bu adres sitede yok veya taşınmış olabilir. Baca raporu hizmetlerimize aşağıdaki bağlantılardan devam edin.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="not-found-primary">Ana Sayfa</Link>
          <Link to="/iller" className="not-found-secondary">81 İl Hizmetleri</Link>
          <Link to="/hizmetler/baca-sizdirmazlik-testi" className="not-found-secondary">Sızdırmazlık Testi</Link>
        </div>
      </main>
      <Footer onOpenAppointment={onOpenAppointment} />
    </div>
  );
}
