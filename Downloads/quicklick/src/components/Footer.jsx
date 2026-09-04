export default function Footer({ lang }) {
  const t = (key) => {
    const dict = {
      en: {
        footerTagline: 'Your neighborhood, delivered. Connecting local stores, customers, and delivery partners to build stronger communities.',
        footerProduct: 'Product',
        footerCompany: 'Company',
        footerLegal: 'Legal',
        footerSupport: 'Support',
        footerBlog: 'Blog',
        footerPrivacy: 'Privacy Policy',
        footerTerms: 'Terms of Service',
        footerCookie: 'Cookie Policy',
        footerCopyright: '© 2026 Quicklick. All rights reserved.',
        footerMade: 'Made with ♥ in India',
        navFeatures: 'Features',
        navHowItWorks: 'How It Works',
        navForEveryone: 'For Everyone',
        navContact: 'Contact',
      },
      hi: {
        footerTagline: 'आपका पड़ोस, आपके दरवाज़ पर। स्थानीय दुकानों, ग्राहकों और डिलीवरी पार्टनरों को जोड़कर मजबूत समुदाय बनाना।',
        footerProduct: 'उत्पाद',
        footerCompany: 'कंपनी',
        footerLegal: 'कानूनी',
        footerSupport: 'सहायता',
        footerBlog: 'ब्लॉग',
        footerPrivacy: 'गोपनीयता नीति',
        footerTerms: 'सेवा की शर्तें',
        footerCookie: 'कुकी नीति',
        footerCopyright: '© 2026 Quicklick. सर्वाधिकार सुरक्षित।',
        footerMade: '♥ के साथ भारत में बनाया गया',
        navFeatures: 'विशेषताएँ',
        navHowItWorks: 'यह कैसे काम करता है',
        navForEveryone: 'सभी के लिए',
        navContact: 'संपर्क करें',
      }
    };
    return dict[lang]?.[key] || key;
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span className="quick">Quick</span>
              <span className="lick">lick</span>
              <span className="dot" style={{ color: 'rgba(255,255,255,0.6)' }}>.</span>
            </div>
            <p>{t('footerTagline')}</p>
          </div>

          <div className="footer-col">
            <h5>{t('footerProduct')}</h5>
            <ul>
              <li><a href="#features">{t('navFeatures')}</a></li>
              <li><a href="#how-it-works">{t('navHowItWorks')}</a></li>
              <li><a href="#for-everyone">{t('navForEveryone')}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>{t('footerCompany')}</h5>
            <ul>
              <li><a href="#contact">{t('navContact')}</a></li>
              <li><a href="#">{t('footerSupport')}</a></li>
              <li><a href="#">{t('footerBlog')}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>{t('footerLegal')}</h5>
            <ul>
              <li><a href="#">{t('footerPrivacy')}</a></li>
              <li><a href="#">{t('footerTerms')}</a></li>
              <li><a href="#">{t('footerCookie')}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t('footerCopyright')}</span>
          <span>{t('footerMade')}</span>
        </div>
      </div>
    </footer>
  );
}