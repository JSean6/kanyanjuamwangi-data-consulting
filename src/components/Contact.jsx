import React from 'react';
import './Contact.css';

const CONTACT_DETAILS = [
  { label: 'Email',    value: 'kanyanjuamwangi@gmail.com',      href: 'mailto:kanyanjuamwangi@gmail.com' },
  { label: 'Phone',    value: '+254 710 473 244',          href: 'tel:+254710473244' },
  { label: 'Location', value: 'Nairobi, Kenya',            href: null },
  { label: 'LinkedIn', value: 'linkedin.com/in/kanyanjua', href: 'https://www.linkedin.com/in/kanyanjua-mwangi-113a77190/' },
];

const HOURS = [
  { day: 'Monday – Friday', time: '8:00 AM – 5:00 PM' },
  { day: 'Saturday',        time: 'By Appointment' },
  { day: 'Sunday',          time: 'Closed' },
];

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kanyanjua-mwangi-113a77190/' },
  { label: 'Twitter',  href: '#' },
  { label: 'Email',    href: 'mailto:kanyanjuamwangi@gmail.com' },
];

// hideHeading=true when rendered inside ContactPage (page already has its own hero)
export default function Contact({ hideHeading = false }) {
  return (
    <section id="contact" className="contact">
      {!hideHeading && (
        <div className="contact__header reveal">
          <span className="section-label">Get in Touch</span>
          <h2>
            Let's Improve Your<br />
            <em>Business Performance</em>
          </h2>
          <p>
            Ready to improve your cash flow, strengthen profitability, and make
            smarter business decisions? Let's talk about practical solutions for
            your business.
          </p>
        </div>
      )}

      <div className="contact__grid">

        {/* Card 1 — Brand + social */}
        <div className="contact__card reveal">
          <span className="contact__card-title">About</span>
          <div className="contact__brand-name">
            Kanyanjua<br />Mwangi
          </div>
          <p className="contact__brand-stmt">
            Practical business consulting for Kenyan SMEs — helping you achieve
            financial clarity, stronger cash flow, and sustainable growth.
          </p>
          <div className="contact__social-links">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="contact__social-link"
                 target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Card 2 — Contact details */}
        <div className="contact__card reveal reveal-delay-2">
          <span className="contact__card-title">Contact Details</span>
          <ul className="contact__info-list">
            {CONTACT_DETAILS.map(({ label, value, href }) => (
              <li key={label} className="contact__info-item">
                <span className="contact__info-label">{label}</span>
                <span className="contact__info-value">
                  {href
                    ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                         rel="noopener noreferrer">{value}</a>
                    : value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 3 — Business hours */}
        <div className="contact__card reveal reveal-delay-4">
          <span className="contact__card-title">Business Hours</span>
          <ul className="contact__hours-list">
            {HOURS.map(({ day, time }) => (
              <li key={day} className="contact__hours-row">
                <span className="contact__hours-day">{day}</span>
                <span className="contact__hours-time">{time}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
