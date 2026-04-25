import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';

const LINKS = [
  { label: 'Home',     to: '/',         anchor: '#home' },
  { label: 'About',    to: '/about',    anchor: '#about' },
  { label: 'Services', to: '/services', anchor: '#services' },
  { label: 'Work',     to: '/projects', anchor: '#work' },
  { label: 'Contact',  to: '/contact',  anchor: '#contact' },
];

export default function Footer() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const isHome    = location.pathname === '/';
  const year      = new Date().getFullYear();

  const handleLink = (e, to, anchor) => {
    e.preventDefault();
    if (isHome) {
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(to);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__top">
          <div className="footer__brand">
            Kanyanjua Mwangi
            <span>Business Consulting</span>
          </div>

          <nav className="footer__links" aria-label="Footer navigation">
            {LINKS.map(({ label, to, anchor }) => (
              <a
                key={label}
                href={isHome ? anchor : to}
                onClick={(e) => handleLink(e, to, anchor)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            © {year} Kanyanjua Mwangi Business Consulting. All rights reserved.
          </span>
          <span className="footer__copy">Nairobi, Kenya</span>
        </div>

      </div>
    </footer>
  );
}
