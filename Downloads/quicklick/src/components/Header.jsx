import { useState, useEffect } from 'react';
import logo from '../logo.png'; // ✅ import from assets

export default function Header({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === 'en' ? 'hi' : 'en');

  const t = (key) => {
    const dict = {
      en: {
        navFeatures: 'Features',
        navHowItWorks: 'How It Works',
        navForEveryone: 'For Everyone',
        navContact: 'Contact',
        navGetApp: 'Get the App',
        langLabel: 'EN',
        langFlag: '🇮🇳',
      },
      hi: {
        navFeatures: 'विशेषताएँ',
        navHowItWorks: 'यह कैसे काम करता है',
        navForEveryone: 'सभी के लिए',
        navContact: 'संपर्क करें',
        navGetApp: 'ऐप प्राप्त करें',
        langLabel: 'हिंदी',
        langFlag: '🇬🇧',
      }
    };
    return dict[lang]?.[key] || key;
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <div className="logo">
          {!imgError ? (
            <img
              src={logo}
              alt="Quicklick"
              style={{ height: '40px', width: 'auto', marginRight: '8px' }}
              onError={() => setImgError(true)}
              onLoad={() => console.log('✅ Logo loaded from assets')}
            />
          ) : null}
          <span className="quick">Quick</span>
          <span className="lick">lick</span>
          <span className="dot">.</span>
        </div>

        <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <li><a href="#features">{t('navFeatures')}</a></li>
          <li><a href="#how-it-works">{t('navHowItWorks')}</a></li>
          <li><a href="#for-everyone">{t('navForEveryone')}</a></li>
          <li><a href="#contact">{t('navContact')}</a></li>
          <li>
            <a href="#" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
              <i className="fas fa-download"></i> {t('navGetApp')}
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="lang-toggle" onClick={toggleLang}>
            <span className="flag">{t('langFlag')}</span> {t('langLabel')}
          </button>
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}