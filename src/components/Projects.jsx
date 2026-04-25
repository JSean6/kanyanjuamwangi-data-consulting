import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const PROJECTS = [
  {
    tag: 'Pricing & Growth Insights',
    title: 'Telecom Bundle Growth Insights at BundlesSasa',
    desc: "Analyzed customer usage and sales data to identify when and why customers buy mobile bundles, enabling smarter pricing, better-timed promotions, and stronger customer acquisition in Kenya's competitive telecom market.",
    metrics: null,
  },
  {
    tag: 'Reporting & Systems Improvement',
    title: 'Data Systems & Training Insights at NextGen Health and Wellness',
    desc: 'Built simple data collection systems and analyzed training programme performance, helping the team improve client outcomes and generate clear, professional reports for decision-making.',
    metrics: null,
  },
  {
    tag: 'Cash Flow & Profit Forecasting',
    title: 'Financial Tracking & Profit Forecasting for a Family Tea Farm',
    desc: 'Developed quarterly financial reporting to track capital injections, farm expenses, and projected returns, giving the business visibility into cash flow, profitability, and long-term planning.',
    metrics: [
      { value: '0.7%',  label: 'Cash Buffer' },
      { value: '67.6%', label: 'Net Profit Retained' },
    ],
  },
];

export { PROJECTS };

export default function Projects({ showCta = false }) {
  const navigate = useNavigate();

  return (
    <section id="work" className="projects">
      <div className="section-header reveal">
        <span className="section-label">Case Studies</span>
        <h2>Brands I <em>Have Helped</em></h2>
        <p>Real results from real engagements with Kenyan businesses.</p>
      </div>

      <div className="projects__grid">
        {PROJECTS.map(({ tag, title, desc, metrics }, i) => (
          <div key={title} className={`projects__card reveal reveal-delay-${i * 2}`}>
            <span className="projects__tag">{tag}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
            {metrics && (
              <div className="projects__metrics">
                {metrics.map(({ value, label }) => (
                  <div key={label} className="projects__metric">
                    <span className="projects__metric-val">{value}</span>
                    <span className="projects__metric-label">{label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {showCta && (
        <div className="section-cta section-cta--centered">
          <button className="btn-secondary" onClick={() => navigate('/projects')}>
            See Full Projects →
          </button>
        </div>
      )}
    </section>
  );
}
