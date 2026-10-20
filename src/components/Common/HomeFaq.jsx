import { HOME_FAQ } from '../../seo/schema';
import './HomeFaq.css';

export default function HomeFaq() {
  return (
    <section id="sss" className="home-faq-section" aria-labelledby="home-faq-title">
      <div className="container">
        <div className="home-faq-header">
          <span className="home-faq-kicker">SIK SORULAN SORULAR</span>
          <h2 id="home-faq-title" className="home-faq-title font-bold">
            Baca Raporu Hakkında <span className="text-secondary font-regular">Merak Edilenler</span>
          </h2>
          <p className="home-faq-lead font-regular">
            Gaz açımı, sızdırmazlık testi ve periyodik muayene süreçlerinde en çok sorulan soruların net cevapları.
          </p>
        </div>

        <div className="home-faq-list">
          {HOME_FAQ.map((item) => (
            <details key={item.question} className="home-faq-item">
              <summary className="home-faq-question font-semibold">{item.question}</summary>
              <p className="home-faq-answer font-regular">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
