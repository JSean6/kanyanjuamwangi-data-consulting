import React from 'react';
import './Skills.css';

const SKILLS = [
  'Financial Analysis',
  'Cash Flow Forecasting',
  'Revenue Analysis',
  'Profitability Modeling',
  'Business Reporting',
  'SME Consulting',
  'Data Interpretation',
  'Strategic Planning',
  'Excel & Spreadsheets',
  'KPI Dashboards',
  'Cost Optimization',
  'Market Positioning',
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <span className="section-label reveal">Expertise</span>
        <h2 className="skills__heading reveal reveal-delay-1">
          Tools &amp; <em>Expertise</em>
        </h2>

        <div className="skills__badges">
          {SKILLS.map((skill, i) => (
            <span
              key={skill}
              className={`skills__badge reveal reveal-delay-${(i % 4) + 1}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
