import React from 'react';
import './Contact.css';

import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

const CONTACT_DETAILS = [
  { 
    label: 'Email', 
    value: 'kanyanjuamwangi@gmail.com', 
    href: 'mailto:kanyanjuamwangi@gmail.com',
    icon: <FaEnvelope /> 
  },
  { 
    label: 'Phone', 
    value: '+254 710 473 244', 
    href: 'tel:+254710473244',
    icon: <FaPhoneAlt />
  },
  { 
    label: 'Location', 
    value: 'Nairobi, Kenya', 
    href: null,
    icon: <FaMapMarkerAlt />
  },
  { 
    label: 'LinkedIn', 
    value: 'linkedin.com/in/kanyanjua', 
    href: 'https://www.linkedin.com/in/kanyanjua-mwangi-113a77190/',
    icon: <FaLinkedin />
  },
  { 
    label: 'GitHub', 
    value: 'kanyanjua Mwangi', 
    href: 'https://github.com/Kanyanjua-Mwangi',
    icon: <FaGithub />
  }
];

const HOURS = [
  { day: 'Monday – Friday', time: '8:00 AM – 5:00 PM' },
  { day: 'Saturday', time: 'By Appointment' },
  { day: 'Sunday', time: 'Closed' },
];

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kanyanjua-mwangi-113a77190/', icon: <FaLinkedin /> },
  { label: 'Twitter', href: '#', icon: <FaTwitter /> },
  { label: 'Email', href: 'mailto:kanyanjuamwangi@gmail.com', icon: <FaEnvelope /> },
  { label: 'GitHub', href: 'https://github.com/Kanyanjua-Mwangi', icon: <FaGithub /> },
];

export default function Contact({ hideHeading = false }) {
  return (
    <section id="contact" className="contact">
      {!hideHeading && (
        <div className="contact__header reveal">
          <span className="section-label">Get in Touch</span>
          <h2> Let's Improve Your<br /> <em>Business Performance</em> </h2>
          <p>
            Ready to improve your cash flow, strengthen profitability, and make smarter business decisions? 
            Let's talk about practical solutions for your business.
          </p>
        </div>
      )}

      <div className="contact__grid">
        <div className="contact__card reveal">
          <span className="contact__card-title">About</span>
          <div className="contact__brand-name"> Kanyanjua<br />Mwangi </div>
          <p className="contact__brand-stmt">
            I specialize in transforming complex financial data into actionable growth strategies for Kenyan SMEs. 
            My approach goes beyond standard consulting; I work to bridge the gap between daily operations and long-term profitability. 
            By streamlining your cash flow management and identifying hidden operational inefficiencies, 
            I provide the financial clarity required to make informed, high-stakes decisions. 
            Let’s collaborate and build a more resilient, scalable future for your business.
          </p>
        </div>

        <div className="contact__card reveal reveal-delay-2">
          <span className="contact__card-title">Contact Details</span>
          <ul className="contact__info-list">
            {CONTACT_DETAILS.map(({ label, value, href, icon }) => (
              <li key={label} className="contact__info-item">
                <div className="contact__info-header">
                    <span className="contact__info-icon">{icon}</span>
                    <span className="contact__info-label">{label}</span>
                </div>
                <span className="contact__info-value">
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

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