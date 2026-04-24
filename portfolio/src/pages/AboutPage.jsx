import React from 'react';
import { useNavigate } from 'react-router-dom';

const VALUES = [
  {
    title: 'Clarity & Simplicity',
    desc:  'Complex data translated into plain language your team can act on immediately.',
  },
  {
    title: 'Practical & Fast Results',
    desc:  'No lengthy engagements. Prioritising quick wins alongside longer-term improvements.',
  },
  {
    title: 'Business-Focused Outcomes',
    desc:  'Every recommendation is measured against real business impact — revenue, cost, or growth.',
  },
  {
    title: 'Tailored & Honest Recommendations',
    desc:  'No one-size-fits-all solutions. Advice shaped around your specific situation and constraints.',
  },
  {
    title: 'Right Tools for the Job',
    desc:  'Using whatever works best — from spreadsheets to advanced analytics — based on your needs.',
  },
  {
    title: 'Knowledge Transfer',
    desc:  'Building your team\'s capability so you are not dependent on external help forever.',
  },
];

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero__inner">
          <div className="page-hero__eyebrow reveal">About Me</div>
          <h1 className="reveal reveal-delay-1">
            Data Specialist<br />for <em>Kenyan SMEs</em>
          </h1>
          <p className="reveal reveal-delay-2">
            Nairobi-based. Practical-minded. Focused on turning your numbers
            into decisions that move your business forward.
          </p>
        </div>
      </div>

      <div className="page-content">

        {/* Introduction */}
        <div className="page-section reveal">
          <span className="section-label">Introduction</span>
          <h2>Who I <em>Am</em></h2>
          <p>
            I am a Nairobi-based Data Specialist dedicated to helping Kenyan
            SMEs turn their data into clear, actionable insights for smarter
            decisions, better marketing, improved cash flow, and sustainable
            growth.
          </p>
          <p>
            With experience in financial tracking, customer segmentation, sales
            analysis, and operational reporting, I deliver practical solutions
            that are easy to understand and quick to implement.
          </p>
          <p>
            My approach is simple: provide transparent, reliable support that
            gives business owners clarity and confidence in their numbers. Your
            success is my priority.
          </p>
          <p style={{ marginTop: '24px', fontStyle: 'italic', color: 'var(--ink-light)', fontSize: '0.9rem' }}>
            Currently open to new projects.
          </p>
        </div>

        {/* Mission */}
        <div className="page-section reveal">
          <span className="section-label">Mission</span>
          <h2>Why I <em>Do This</em></h2>
          <p>
            To empower Kenyan SMEs with simple, actionable data insights that
            improve decision-making, optimize cash flow, and drive sustainable
            business growth.
          </p>
        </div>

        {/* Vision */}
        <div className="page-section reveal">
          <span className="section-label">Vision</span>
          <h2>Where We're <em>Going</em></h2>
          <p>
            To become the trusted data partner for small and medium businesses
            across Kenya — making professional data analysis accessible,
            understandable, and valuable to every SME owner.
          </p>
        </div>

        {/* Values */}
        <div className="page-section reveal">
          <span className="section-label">My Approach & Values</span>
          <h2>How I <em>Work</em></h2>

          <div className="card-grid">
            {VALUES.map(({ title, desc }, i) => (
              <div key={title} className={`card-item reveal reveal-delay-${(i % 3) + 1}`}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back CTA */}
        <div className="page-section reveal" style={{ textAlign: 'center' }}>
          <button className="btn-primary" onClick={() => navigate('/contact')}>
            Work With Me
          </button>
          <button
            className="btn-secondary"
            style={{ marginLeft: '16px' }}
            onClick={() => navigate('/')}
          >
            ← Back to Home
          </button>
        </div>

      </div>
    </>
  );
}
