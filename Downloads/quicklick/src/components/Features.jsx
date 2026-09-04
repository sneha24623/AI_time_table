export default function Features({ lang }) {
  const t = (key) => {
    const dict = {
      en: {
        featuresLabel: 'Features',
        featuresTitle: 'Everything you need,',
        featuresTitleHighlight: 'right in your pocket',
        featuresDesc: 'From discovering local stores to tracking your delivery in real-time — Quicklick brings the entire hyperlocal experience to your fingertips.',
        statStoreCategories: 'Store Categories',
        statUserRoles: 'User Roles',
        statRealTime: 'Real-time Tracking',
        statAvailable: 'Available',
      },
      hi: {
        featuresLabel: 'विशेषताएँ',
        featuresTitle: 'आपको जो चाहिए,',
        featuresTitleHighlight: 'आपकी जेब में',
        featuresDesc: 'स्थानीय दुकानों की खोज से लेकर आपके डिलीवरी को रीयल-टाइम में ट्रैक करने तक — Quicklick आपके हाइपरलोकल अनुभव को आपकी उंगलियों पर लाता है।',
        statStoreCategories: 'दुकान श्रेणियाँ',
        statUserRoles: 'उपयोगकर्ता भूमिकाएँ',
        statRealTime: 'रीयल-टाइम ट्रैकिंग',
        statAvailable: 'उपलब्ध',
      }
    };
    return dict[lang]?.[key] || key;
  };

  const stats = [
    { icon: 'fa-store', number: '27+', labelKey: 'statStoreCategories', color: 'teal' },
    { icon: 'fa-users', number: '3', labelKey: 'statUserRoles', color: 'orange' },
    { icon: 'fa-location-dot', number: '100%', labelKey: 'statRealTime', color: 'teal' },
    { icon: 'fa-clock', number: '24/7', labelKey: 'statAvailable', color: 'orange' },
  ];

  return (
    <section id="features" className="features-stats">
      <div className="container">
        <div className="section-title">
          <span className="label"><i className="fas fa-star"></i> {t('featuresLabel')}</span>
          <h2>
            {t('featuresTitle')} <br />
            <span className="teal">{t('featuresTitleHighlight')}</span>
          </h2>
          <p>{t('featuresDesc')}</p>
        </div>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-card" key={i}>
              <div className={`icon ${s.color}`}>
                <i className={`fas ${s.icon}`}></i>
              </div>
              <div className="number">
                <span className={s.color}>{s.number}</span>
              </div>
              <div className="label">{t(s.labelKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}