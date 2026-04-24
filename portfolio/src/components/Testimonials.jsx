import React from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    quote:
      'Kanyanjua helped us understand our numbers in a way that immediately improved our business decisions. The clarity he brought to our financial data was invaluable.',
    name: 'SME Client',
    org:  'Nairobi, Kenya',
    initial: 'S',
  },
  {
    quote:
      'The financial visibility and forecasting process gave us confidence to plan for growth. We finally understood where our money was going and how to improve our margins.',
    name: 'Agribusiness Client',
    org:  'Central Kenya',
    initial: 'A',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="section-header reveal">
        <span className="section-label">Testimonials</span>
        <h2>What Clients <em>Say</em></h2>
      </div>

      <div className="testimonials__grid">
        {TESTIMONIALS.map(({ quote, name, org, initial }, i) => (
          <div
            key={name}
            className={`testimonials__card reveal reveal-delay-${i * 2}`}
          >
            <blockquote className="testimonials__quote">{quote}</blockquote>

            <div className="testimonials__author">
              <div className="testimonials__avatar" aria-hidden="true">
                {initial}
              </div>
              <div className="testimonials__author-info">
                <strong>{name}</strong>
                <span>{org}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
