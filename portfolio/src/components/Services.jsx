import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const SERVICES = [
  {
    icon: '💰',
    title: 'Cash Flow Management',
    desc: 'Help businesses understand where money is going, improve liquidity, and maintain healthy operating cash.',
  },
  {
    icon: '📊',
    title: 'Profitability Analysis',
    desc: 'Identify revenue leaks, cost inefficiencies, and opportunities to improve margins.',
  },
  {
    icon: '🎯',
    title: 'Business Strategy Consulting',
    desc: 'Support SMEs with practical strategies for sustainable growth, market positioning, and operational improvements.',
  },
  {
    icon: '📈',
    title: 'Data Insights & Reporting',
    desc: 'Transform raw business data into simple reports and actionable recommendations.',
  },
  {
    icon: '🚀',
    title: 'Revenue Growth Planning',
    desc: 'Design data-backed plans to improve sales performance and expand profitability.',
  },
  {
    icon: '⚙️',
    title: 'Operational Efficiency',
    desc: 'Streamline business processes to reduce waste and improve performance.',
  },
];

export { SERVICES };

export default function Services({ showCta = false }) {
  const navigate = useNavigate();

  return (
    <section id="services" className="services">
      <div className="section-header reveal">
        <span className="section-label">What I Do</span>
        <h2>Services <em>Designed</em> for SMEs</h2>
        <p>Practical solutions tailored to the realities of Kenyan startups and small enterprises.</p>
      </div>

      <div className="services__grid">
        {SERVICES.map(({ icon, title, desc }, i) => (
          <div key={title} className={`services__card reveal reveal-delay-${(i % 3) + 1}`}>
            <div className="services__icon" aria-hidden="true">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <span className="services__arrow" aria-hidden="true">Learn more →</span>
          </div>
        ))}
      </div>

      {showCta && (
        <div className="section-cta section-cta--centered">
          <button className="btn-secondary" onClick={() => navigate('/services')}>
            View All Services →
          </button>
        </div>
      )}
    </section>
  );
}
