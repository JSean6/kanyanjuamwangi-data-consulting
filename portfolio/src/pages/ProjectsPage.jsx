import React from 'react';
import { useNavigate } from 'react-router-dom';
import SpendingScore from '../assets/SpendingScore.png';
import SVM from '../assets/SVM.png';
import FarmTracking from '../assets/FarmTracking.jpeg';

const CASE_STUDIES = [
  {
    tag:     'Customer Segmentation',
    title:   'Customer Segmentation for Retail Businesses',
    summary: 'Applied K-Means clustering to retail transaction data to reveal distinct customer spending groups, enabling more targeted marketing and inventory decisions.',
    challenge: 'The client had years of transaction data but no systematic way to understand which customers were most valuable, how different groups behaved, or how to tailor offers to specific segments.',
    approach:  'Cleaned and normalised transaction data, applied K-Means clustering across recency, frequency, and monetary value (RFM) dimensions, and visualised spending score distributions to make segments interpretable by non-technical stakeholders.',
    role:      'End-to-end analysis: data cleaning, feature engineering, model selection, visualisation, and presentation of findings to the business owner.',
    image:     SpendingScore,
    results: [
      { val: '4',    label: 'Distinct Segments Identified' },
      { val: '23%',  label: 'Top Segment Revenue Share' },
      { val: 'High', label: 'Retention Opportunity' },
    ],
    business_value: 'The business redirected marketing spend toward the highest-value segment, reducing acquisition costs and improving repeat purchase rates within two months of implementation.',
  },
  {
    tag:     'Predictive Modelling',
    title:   'SVM Customer Behaviour Prediction',
    summary: 'Built a Support Vector Machine classifier to predict whether a customer would make a high-value purchase, enabling proactive outreach and inventory planning.',
    challenge: 'The client was losing high-value customers to competitors because follow-up was reactive rather than predictive. They needed a way to identify who was likely to convert before they did, not after.',
    approach:  'Feature selection from historical purchase and engagement data, SVM model training with cross-validation, and threshold tuning to balance precision and recall for the business context.',
    role:      'Data preparation, model development, validation, and documentation of the model logic in plain language for the client team.',
    image:     SVM,
    results: [
      { val: '84%',    label: 'Model Accuracy' },
      { val: '78%',    label: 'Precision Score' },
      { val: 'Proactive', label: 'Outreach Enabled' },
    ],
    business_value: 'The sales team could now prioritise outreach to flagged customers two weeks before their typical purchase window, increasing conversion rates on targeted campaigns.',
  },
  {
    tag:     'Cash Flow & Profit Forecasting',
    title:   'Tea Farm – Financial Tracking & Cash Flow Management',
    summary: 'Developed a quarterly financial reporting system for a family-owned tea farm to track capital injections, operating costs, and projected returns — giving the owners clear visibility into profitability and cash flow for the first time.',
    challenge: 'The farm had no structured financial tracking. Capital injections, farm expenses, and seasonal revenue were managed informally, making it impossible to understand true profitability or plan for lean seasons.',
    approach:  'Designed a simple but robust quarterly reporting template. Documented all capital inflows and outflows. Built a cash flow projection model using historical yield and price data. Presented findings in a format accessible to non-financial stakeholders.',
    role:      'Financial system design, data collection, modelling, and quarterly reporting delivery with narrative commentary.',
    image:     FarmTracking,
    results: [
      { val: '0.7%',   label: 'Positive Cash Buffer Maintained' },
      { val: '67.6%',  label: 'Projected Net Profit Retention' },
      { val: '4',      label: 'Quarters Tracked' },
      { val: 'Clear',  label: 'Seasonal Planning Visibility' },
    ],
    business_value: 'The owners gained confidence in their numbers, identified the most cost-intensive phase of the growing cycle, and were able to plan capital injections more precisely — reducing the risk of cash shortfalls mid-season.',
  },
];

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page-hero">
        <div className="page-hero__inner">
          <div className="page-hero__eyebrow reveal">Case Studies</div>
          <h1 className="reveal reveal-delay-1">
            Work That<br /><em>Delivers Results</em>
          </h1>
          <p className="reveal reveal-delay-2">
            Detailed breakdowns of real engagements — the challenges, the approach,
            and the measurable business outcomes achieved.
          </p>
        </div>
      </div>

      <div className="page-content">
        {CASE_STUDIES.map(({ tag, title, summary, challenge, approach, role, image, results, business_value }, idx) => (
          <div key={title} className={`case-study reveal reveal-delay-${idx + 1}`}>

            {/* Header */}
            <div className="case-study__header">
              <span className="case-study__tag">{tag}</span>
              <h2>{title}</h2>
              <p>{summary}</p>
            </div>

            <div style={{ padding: '0 36px' }}>
              <div className="img-placeholder">
                <img class='project-img' src={image} alt={title} />
              </div>
            </div>

            <div className="case-study__body">
              <div className="case-study__section">
                <h3>The Challenge</h3>
                <p>{challenge}</p>
              </div>
              <div className="case-study__section">
                <h3>My Approach</h3>
                <p>{approach}</p>
              </div>
              <div className="case-study__section">
                <h3>My Role</h3>
                <p>{role}</p>
              </div>
            </div>

            {/* Results */}
            <div className="case-study__full">
              <h3>Results & Impact</h3>
              <div className="metric-cards">
                {results.map(({ val, label }) => (
                  <div key={label} className="metric-card">
                    <span className="metric-card__val">{val}</span>
                    <span className="metric-card__label">{label}</span>
                  </div>
                ))}
              </div>

              {business_value && (
                <div style={{ marginTop: '28px' }}>
                  <h3>Business Value</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', lineHeight: 1.78, marginTop: '10px', maxWidth: '700px' }}>
                    {business_value}
                  </p>
                </div>
              )}
            </div>

          </div>
        ))}

        <div className="page-section reveal" style={{ textAlign: 'center' }}>
          <button className="btn-primary" onClick={() => navigate('/contact')}>
            Start a Project
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
