import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const VALUES = [
  { title: 'Clarity',      desc: 'Simplifying complex data into actionable insight' },
  { title: 'Practicality', desc: 'Solutions that work within real SME constraints' },
  { title: 'Results',      desc: 'Focused on measurable business outcomes' },
  { title: 'Trust',        desc: 'Long-term partnerships built on transparency' },
];

export default function About({ showCta = false }) {
  const navigate = useNavigate();

  return (
    <section id="about" className="about">
      <div className="about__grid">
        <div className="about__left reveal">
          <span className="section-label">About</span>
          <h2>Helping SMEs Grow<br />with <em>Clarity</em></h2>
        </div>

        <div className="about__right reveal reveal-delay-2">
          <p>
            I work with Kenyan small and medium enterprises to improve
            profitability through better cash flow management, 
            practical strategy, and data-driven decision making. 
            My goal is to simplify business data into clear insights that help entrepreneurs
            increase revenue, control costs, and grow sustainably.
          </p>

          <div className="about__values">
            {VALUES.map(({ title, desc }) => (
              <div key={title} className="about__value-item">
                <strong>{title}</strong>
                <span>{desc}</span>
              </div>
            ))}
          </div>

          {showCta && (
            <div className="section-cta">
              <button className="btn-secondary" onClick={() => navigate('/about')}>
                More About Me →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
