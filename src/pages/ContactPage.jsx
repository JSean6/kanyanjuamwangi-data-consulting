import React from 'react';
import { useNavigate } from 'react-router-dom';
import Contact from '../components/Contact';

export default function ContactPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page-hero">
        <div className="page-hero__inner">
          <div className="page-hero__eyebrow reveal">Contact</div>
          <h1 className="reveal reveal-delay-1">
            Let's Improve Your<br /><em>Business Performance</em>
          </h1>
          <p className="reveal reveal-delay-2">
            Ready to improve your cash flow, strengthen profitability, and make
            smarter business decisions? Reach out and let's talk.
          </p>
        </div>
      </div>

      {/* Reuse the existing Contact section — it already has the 3-col layout */}
      <Contact hideHeading />

      <div style={{ padding: '40px var(--side-pad)', textAlign: 'center' }}>
        <button className="btn-secondary" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </div>
    </>
  );
}
