import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

// On the homepage we use anchor scroll; on sub-pages we route
const HOME_ANCHORS = [
  { label: 'Home',     anchor: '#home' },
  { label: 'Services', anchor: '#services' },
  { label: 'Work',     anchor: '#work' },
  { label: 'About',    anchor: '#about' },
];

const PAGE_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Work',     to: '/projects' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const location  = useLocation();
  const navigate  = useNavigate();
  const isHome    = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const closeMenu = () => setMenuOpen(false);

  // If on homepage use anchor scroll; otherwise navigate to page
  const handleNavClick = (e, anchor, to) => {
    e.preventDefault();
    closeMenu();
    if (isHome) {
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(to);
    }
  };

  const handleBrand = (e) => {
    e.preventDefault();
    closeMenu();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleContact = (e) => {
    e.preventDefault();
    closeMenu();
    if (isHome) {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <a href="/" className="navbar__brand" onClick={handleBrand}>
          Kanyanjua <span>Mwangi</span>
        </a>

        <ul className="navbar__links">
          {HOME_ANCHORS.map(({ label, anchor }, i) => (
            <li key={label}>
              <a
                href={isHome ? anchor : PAGE_LINKS[i]?.to || '/'}
                className={`navbar__link ${
                  !isHome && location.pathname === (PAGE_LINKS[i]?.to || '/')
                    ? 'navbar__link--active' : ''
                }`}
                onClick={(e) => handleNavClick(e, anchor, PAGE_LINKS[i]?.to || '/')}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={isHome ? '#contact' : '/contact'}
              className="navbar__link navbar__link--cta"
              onClick={handleContact}
            >
              Book a Consultation
            </a>
          </li>
        </ul>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div
        className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {HOME_ANCHORS.map(({ label, anchor }, i) => (
          <a
            key={label}
            href={isHome ? anchor : PAGE_LINKS[i]?.to || '/'}
            onClick={(e) => handleNavClick(e, anchor, PAGE_LINKS[i]?.to || '/')}
          >
            {label}
          </a>
        ))}
        <a
          href={isHome ? '#contact' : '/contact'}
          className="navbar__mobile-cta"
          onClick={handleContact}
        >
          Book a Consultation
        </a>
      </div>
    </>
  );
}
