export default function Contact({ lang }) {
  const t = (key) => {
    const dict = {
      en: {
        contactLabel: 'Contact',
        contactTitle: 'Get in touch',
        contactDesc: "Have questions? We'd love to hear from you.",
        contactInfoTitle1: "We're here to help you",
        contactInfoTitle2: 'get started',
        contactInfoDesc: "Whether you're a customer, seller, or delivery partner — our team is here to help you get started.",
        contactEmail: 'Email us',
        contactWebsite: 'Website',
        contactLocation: 'Location',
        contactLocationVal: 'Your Neighborhood, Delivered',
        contactFormTitle: 'Send us a message',
        contactFormDesc: "We'll get back to you within 24 hours.",
        contactNamePlaceholder: 'Your Name',
        contactEmailPlaceholder: 'Your Email',
        contactMsgPlaceholder: 'Tell us how we can help...',
        contactBtnSend: 'Send Message',
      },
      hi: {
        contactLabel: 'संपर्क करें',
        contactTitle: 'संपर्क में रहें',
        contactDesc: 'कोई सवाल? हम आपकी बात सुनना पसंद करेंगे।',
        contactInfoTitle1: 'हम आपकी मदद के लिए यहाँ हैं',
        contactInfoTitle2: 'शुरू करें',
        contactInfoDesc: 'चाहे आप ग्राहक हों, विक्रेता हों, या डिलीवरी पार्टनर — हमारी टीम आपको शुरू करने में मदद के लिए यहाँ है।',
        contactEmail: 'हमें ईमेल करें',
        contactWebsite: 'वेबसाइट',
        contactLocation: 'स्थान',
        contactLocationVal: 'आपका पड़ोस, आपके दरवाज़ पर',
        contactFormTitle: 'हमें संदेश भेजें',
        contactFormDesc: 'हम 24 घंटे के भीतर आपसे संपर्क करेंगे।',
        contactNamePlaceholder: 'आपका नाम',
        contactEmailPlaceholder: 'आपका ईमेल',
        contactMsgPlaceholder: 'हमें बताएं कि हम कैसे मदद कर सकते हैं...',
        contactBtnSend: 'संदेश भेजें',
      }
    };
    return dict[lang]?.[key] || key;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title">
          <span className="label"><i className="fas fa-envelope"></i> {t('contactLabel')}</span>
          <h2>{t('contactTitle')}</h2>
          <p>{t('contactDesc')}</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h2>
              {t('contactInfoTitle1')} <br />
              <span className="orange">{t('contactInfoTitle2')}</span>
            </h2>
            <p>{t('contactInfoDesc')}</p>

            <div className="contact-item">
              <div className="icon-circle"><i className="fas fa-envelope"></i></div>
              <div className="text">
                {t('contactEmail')}
                <span>support@quicklick.co.in</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-circle orange"><i className="fas fa-globe"></i></div>
              <div className="text">
                {t('contactWebsite')}
                <span>quicklick.co.in</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-circle" style={{ background: '#e8f0fe', color: '#1a56db' }}>
                <i className="fas fa-map-pin"></i>
              </div>
              <div className="text">
                {t('contactLocation')}
                <span>{t('contactLocationVal')}</span>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h4>{t('contactFormTitle')}</h4>
            <p>{t('contactFormDesc')}</p>
            <input type="text" placeholder={t('contactNamePlaceholder')} />
            <input type="email" placeholder={t('contactEmailPlaceholder')} />
            <textarea placeholder={t('contactMsgPlaceholder')}></textarea>
            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <i className="fas fa-paper-plane"></i> {t('contactBtnSend')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}