import React from 'react';
import { useNavigate } from 'react-router-dom';

const FULL_SERVICES = [
  {
    icon: '📊',
    title: 'Financial Tracking & Reporting',
    desc:  'Design and implement simple financial tracking systems that give you a clear picture of income, expenses, cash flow, and profit — on a schedule that works for your business.',
    value: 'Know exactly where your money is at any point in the month. Make faster, more confident financial decisions without needing an accountant on call.',
  },
  {
    icon: '👥',
    title: 'Customer Segmentation & Insights',
    desc:  'Analyse your customer base to identify your most valuable segments, understand buying behaviour, and tailor your offers and marketing to the right audience.',
    value: 'Spend less on acquiring the wrong customers and more on retaining the right ones. Improve conversion rates and marketing ROI.',
  },
  {
    icon: '💼',
    title: 'Sales & Commission Analysis',
    desc:  'Track sales performance by rep, product, channel, or region. Identify what is driving revenue and what is holding it back. Build transparent commission and incentive structures.',
    value: 'Motivate your sales team with fair, data-backed incentives. Identify your top performers and replicate their approach across the team.',
  },
  {
    icon: '⚙️',
    title: 'Operational Data Analysis',
    desc:  'Examine operational data — from inventory to staff productivity to supplier performance — to identify inefficiencies, reduce waste, and improve throughput.',
    value: 'Cut hidden operational costs and improve service delivery without needing to hire more staff or invest in expensive systems.',
  },
  {
    icon: '🔍',
    title: 'Data Audit & Strategy',
    desc:  'Review your existing data collection practices, tools, and reporting to identify gaps. Build a simple data strategy that is practical, affordable, and aligned with your business goals.',
    value: 'Stop flying blind. Build a foundation for smarter decision-making that grows with your business.',
  },
];

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page-hero">
        <div className="page-hero__inner">
          <div className="page-hero__eyebrow reveal">Services</div>
          <h1 className="reveal reveal-delay-1">
            Practical Solutions<br />for <em>Real Businesses</em>
          </h1>
          <p className="reveal reveal-delay-2">
            Every service is designed for the realities of running a Kenyan SME —
            affordable, actionable, and focused on measurable results.
          </p>
        </div>
      </div>

      <div className="page-content">

        <div className="card-grid reveal">
          {FULL_SERVICES.map(({ icon, title, desc, value }, i) => (
            <div key={title} className={`card-item reveal reveal-delay-${(i % 3) + 1}`}>
              <div style={{ fontSize: '1.4rem', marginBottom: '14px' }}>{icon}</div>
              <h3>{title}</h3>
              <p style={{ marginBottom: '14px' }}>{desc}</p>
              <p style={{
                fontSize: '0.8rem',
                color: 'var(--ink)',
                fontWeight: 500,
                borderTop: '1px solid var(--border-light)',
                paddingTop: '12px',
                marginTop: '12px',
              }}>
                <span style={{ display: 'block', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-light)', marginBottom: '4px' }}>Business Value</span>
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="page-section reveal" style={{ textAlign: 'center', marginTop: '64px' }}>
          <button className="btn-primary" onClick={() => navigate('/contact')}>
            Book a Consultation
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
