export default function Hero({ lang }) {
  const t = (key) => {
    const dict = {
      en: {
        heroBadge: 'Powered by local sellers',
        heroTitle1: 'Your Daily',
        heroTitle2: 'Essentials',
        heroTitle3: 'Delivered!',
        heroDesc: 'Shop from local stores near you and get everything delivered to your doorstep in minutes. Groceries, essentials, and more — powered by your neighborhood sellers.',
        heroBtnExplore: 'Explore Stores',
        heroBtnHowItWorks: 'How It Works',
        appStoreSmall: 'Download on the',
        appStoreStrong: 'App Store',
        googlePlaySmall: 'Get it on',
        googlePlayStrong: 'Google Play',
        rating: '4.9 Rating',
        orderPlaced: 'Order Placed! 🎉',
      },
      hi: {
        heroBadge: 'स्थानीय विक्रेताओं द्वारा संचालित',
        heroTitle1: 'आपकी दैनिक',
        heroTitle2: 'आवश्यकताएँ',
        heroTitle3: 'आपके दरवाज़ तक!',
        heroDesc: 'अपने आस-पास की दुकानों से खरीदारी करें और सब कुछ मिनटों में अपने दरवाज़े पर पाएँ। किराना, ज़रूरी सामान, और बहुत कुछ — आपके पड़ोस के विक्रेताओं द्वारा संचालित।',
        heroBtnExplore: 'दुकानें खोजें',
        heroBtnHowItWorks: 'यह कैसे काम करता है',
        appStoreSmall: 'App Store पर डाउनलोड करें',
        appStoreStrong: 'App Store',
        googlePlaySmall: 'Google Play पर प्राप्त करें',
        googlePlayStrong: 'Google Play',
        rating: '4.9 रेटिंग',
        orderPlaced: 'ऑर्डर हो गया! 🎉',
      }
    };
    return dict[lang]?.[key] || key;
  };

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-bolt"></i> {t('heroBadge')}
          </div>
          <h1>
            {t('heroTitle1')} <br />
            <span className="highlight-teal">{t('heroTitle2')}</span>, <br />
            <span className="highlight-orange">{t('heroTitle3')}</span>
          </h1>
          <p>{t('heroDesc')}</p>
          <div className="hero-buttons">
            <a href="#" className="btn-primary">
              <i className="fas fa-store"></i> {t('heroBtnExplore')}
            </a>
            <a href="#" className="btn-secondary">
              <i className="fas fa-play"></i> {t('heroBtnHowItWorks')}
            </a>
          </div>
          <div className="app-badges" style={{ marginTop: '32px' }}>
            <div className="app-badge light">
              <div className="icon"><i className="fab fa-apple"></i></div>
              <div className="text">
                <small>{t('appStoreSmall')}</small>
                <strong>{t('appStoreStrong')}</strong>
              </div>
            </div>
            <div className="app-badge light">
              <div className="icon"><i className="fab fa-google-play"></i></div>
              <div className="text">
                <small>{t('googlePlaySmall')}</small>
                <strong>{t('googlePlayStrong')}</strong>
              </div>
            </div>
            <div className="rating-badge">
              <i className="fas fa-star"></i> {t('rating')}
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="store-badge">
              <span>📍 Sarangpur</span>
              <span className="open">● 3 open</span>
            </div>
            <div className="store-item">
              <div className="store-icon">✏️</div>
              <div className="store-info">
                <h4>The Little Stationery</h4>
                <p>Cards, Art & Crafts</p>
              </div>
              <div className="store-meta">
                <div className="rating">⭐ 5.0(1)</div>
                <div className="time">0.7 km · 30-45 mins</div>
              </div>
            </div>
            <div className="store-item">
              <div className="store-icon" style={{ background: '#fef5e7', color: '#f39c12' }}>🛒</div>
              <div className="store-info">
                <h4>Fresh Mart Grocery</h4>
                <p>Fruits, Vegetables & Dairy</p>
              </div>
              <div className="store-meta">
                <div className="rating">⭐ 4.8(23)</div>
                <div className="time">1.2 km · 20-30 mins</div>
              </div>
            </div>
            <div className="store-item">
              <div className="store-icon" style={{ background: '#e8f0fe', color: '#1a56db' }}>💊</div>
              <div className="store-info">
                <h4>HealthPlus Pharmacy</h4>
                <p>Medicines & Wellness</p>
              </div>
              <div className="store-meta">
                <div className="rating">⭐ 4.9(12)</div>
                <div className="time">0.5 km · 15-20 mins</div>
              </div>
            </div>
            <div className="order-placed">
              <i className="fas fa-check-circle"></i> {t('orderPlaced')}
            </div>
          </div>
          <div className="float-badge float-badge-1">
            <i className="fas fa-bolt"></i> 27+ Categories
          </div>
          <div className="float-badge float-badge-2">
            <i className="fas fa-truck"></i> Real-time Tracking
          </div>
        </div>
      </div>
    </section>
  );
}