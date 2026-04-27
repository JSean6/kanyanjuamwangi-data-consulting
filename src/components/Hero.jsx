import React from 'react';
import './Hero.css';
import heroImg from '../assets/heroImg.png'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__grid-bg" aria-hidden="true" />

      <div className="hero__layout">
        <div className="hero__inner">
          <div className="hero__eyebrow">Data Consultant — Nairobi, Kenya</div>

          <h1 className="hero__name">
            Hi, I'm <em>Kanyanjua</em>
            <br />Mwangi.
          </h1>

          <p className="hero__tagline">
            I help Kenyan SMEs achieve stronger cash flow, better decisions, and
            sustainable profitability by turning their data into clear, actionable
            insights.
          </p>

          <p className="hero__desc">
            Practical business data consulting for startups and small enterprises —
            strategy, operations, revenue growth, and cash flow solutions that
            deliver real results without big budgets.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn-primary">Book a Consultation</a>
            <a href="#work" className="btn-secondary">View My Work →</a>
          </div>
        </div>

        <div className="hero__image-wrap">
          <img src={heroImg} alt="Kanyanjua Mwangi" className="hero__image" />
        </div>
      </div>

      <div className="hero__stats" aria-hidden="true">
        <div className="hero__stat">
          <span className="hero__stat-num">67%+</span>
          <span className="hero__stat-label">Profit retention</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-num">3+</span>
          <span className="hero__stat-label">SMEs helped</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-num">6</span>
          <span className="hero__stat-label">Core services</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;