import { useState } from 'react';

export default function HowItWorks({ lang }) {
  const [activeRole, setActiveRole] = useState('customer');

  const t = (key) => {
    const dict = {
      en: {
        howLabel: 'How It Works',
        howTitle: 'Simple as 1, 2, 3',
        howDesc: "Whether you're shopping, selling, or delivering — getting started is effortless.",
        roleCustomers: 'Customers',
        roleSellers: 'Sellers',
        roleDelivery: 'Delivery Partners',
        stepCustomer1Title: 'Discover Stores',
        stepCustomer1Desc: 'Open the app and browse stores near you. See ratings, delivery times, and product catalogs.',
        stepCustomer2Title: 'Shop & Checkout',
        stepCustomer2Desc: 'Add products to your cart, select variants, choose your delivery address, and place your order.',
        stepCustomer3Title: 'Track & Receive',
        stepCustomer3Desc: 'Watch your order in real-time on the map. Get notified at every step until delivery.',
        stepSeller1Title: 'Create Store',
        stepSeller1Desc: 'Use the 5-step wizard to set up your store. Add products, images, and set your store hours.',
        stepSeller2Title: 'Manage Orders',
        stepSeller2Desc: 'Get real-time order notifications. Manage inventory, track deliveries, and update product variants.',
        stepSeller3Title: 'Grow Business',
        stepSeller3Desc: 'Access analytics, configure delivery zones, manage delivery partners, and track performance.',
        stepDelivery1Title: 'Go Online',
        stepDelivery1Desc: 'Toggle your availability on/off. Get matched with orders in your area based on your location.',
        stepDelivery2Title: 'Accept & Navigate',
        stepDelivery2Desc: 'Accept delivery requests, view pickup and drop-off locations, and navigate with GPS integration.',
        stepDelivery3Title: 'Earn & Track',
        stepDelivery3Desc: 'Complete deliveries and track your earnings. View performance analytics and delivery history.',
      },
      hi: {
        howLabel: 'यह कैसे काम करता है',
        howTitle: '1, 2, 3 जितना आसान',
        howDesc: 'चाहे आप खरीदारी कर रहे हों, बेच रहे हों, या डिलीवरी कर रहे हों — शुरू करना बहुत आसान है।',
        roleCustomers: 'ग्राहक',
        roleSellers: 'विक्रेता',
        roleDelivery: 'डिलीवरी पार्टनर',
        stepCustomer1Title: 'दुकानें खोजें',
        stepCustomer1Desc: 'ऐप खोलें और अपने आस-पास की दुकानें ब्राउज़ करें। रेटिंग, डिलीवरी समय और उत्पाद सूची देखें।',
        stepCustomer2Title: 'खरीदारी करें और चेकआउट करें',
        stepCustomer2Desc: 'अपनी कार्ट में उत्पाद जोड़ें, वैरिएंट चुनें, डिलीवरी पता चुनें और ऑर्डर करें।',
        stepCustomer3Title: 'ट्रैक करें और प्राप्त करें',
        stepCustomer3Desc: 'अपने ऑर्डर को मानचित्र पर रीयल-टाइम में देखें। डिलीवरी तक हर चरण पर सूचना प्राप्त करें।',
        stepSeller1Title: 'दुकान बनाएँ',
        stepSeller1Desc: 'अपनी दुकान स्थापित करने के लिए 5-चरणीय विज़ार्ड का उपयोग करें। उत्पाद, छवियाँ जोड़ें और दुकान के घंटे सेट करें।',
        stepSeller2Title: 'ऑर्डर प्रबंधित करें',
        stepSeller2Desc: 'रीयल-टाइम ऑर्डर सूचनाएँ प्राप्त करें। इन्वेंटरी प्रबंधित करें, डिलीवरी ट्रैक करें और उत्पाद वैरिएंट अपडेट करें।',
        stepSeller3Title: 'व्यवसाय बढ़ाएँ',
        stepSeller3Desc: 'एनालिटिक्स तक पहुँचें, डिलीवरी ज़ोन कॉन्फ़िगर करें, डिलीवरी पार्टनर प्रबंधित करें और प्रदर्शन ट्रैक करें।',
        stepDelivery1Title: 'ऑनलाइन जाएँ',
        stepDelivery1Desc: 'अपनी उपलब्धता चालू/बंद करें। अपने स्थान के आधार पर अपने क्षेत्र में ऑर्डर प्राप्त करें।',
        stepDelivery2Title: 'स्वीकार करें और नेविगेट करें',
        stepDelivery2Desc: 'डिलीवरी अनुरोध स्वीकार करें, पिकअप और ड्रॉप-ऑफ स्थान देखें, और GPS एकीकरण के साथ नेविगेट करें।',
        stepDelivery3Title: 'कमाएँ और ट्रैक करें',
        stepDelivery3Desc: 'डिलीवरी पूरी करें और अपनी कमाई ट्रैक करें। प्रदर्शन एनालिटिक्स और डिलीवरी इतिहास देखें।',
      }
    };
    return dict[lang]?.[key] || key;
  };

  const roles = {
    customer: {
      labelKey: 'roleCustomers',
      tag: 'customer',
      tagLabel: 'For Customers',
      steps: [
        { number: '01', icon: 'fa-store', titleKey: 'stepCustomer1Title', descKey: 'stepCustomer1Desc' },
        { number: '02', icon: 'fa-cart-shopping', titleKey: 'stepCustomer2Title', descKey: 'stepCustomer2Desc' },
        { number: '03', icon: 'fa-map-location-dot', titleKey: 'stepCustomer3Title', descKey: 'stepCustomer3Desc' },
      ]
    },
    seller: {
      labelKey: 'roleSellers',
      tag: 'seller',
      tagLabel: 'For Sellers',
      steps: [
        { number: '01', icon: 'fa-store', titleKey: 'stepSeller1Title', descKey: 'stepSeller1Desc' },
        { number: '02', icon: 'fa-clipboard-list', titleKey: 'stepSeller2Title', descKey: 'stepSeller2Desc' },
        { number: '03', icon: 'fa-chart-line', titleKey: 'stepSeller3Title', descKey: 'stepSeller3Desc' },
      ]
    },
    delivery: {
      labelKey: 'roleDelivery',
      tag: 'delivery',
      tagLabel: 'For Delivery Partners',
      steps: [
        { number: '01', icon: 'fa-toggle-on', titleKey: 'stepDelivery1Title', descKey: 'stepDelivery1Desc' },
        { number: '02', icon: 'fa-route', titleKey: 'stepDelivery2Title', descKey: 'stepDelivery2Desc' },
        { number: '03', icon: 'fa-coin', titleKey: 'stepDelivery3Title', descKey: 'stepDelivery3Desc' },
      ]
    }
  };

  const current = roles[activeRole];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-title">
          <span className="label"><i className="fas fa-arrow-right"></i> {t('howLabel')}</span>
          <h2>{t('howTitle')}</h2>
          <p>{t('howDesc')}</p>
        </div>

        <div className="role-tabs">
          {['customer', 'seller', 'delivery'].map((key) => (
            <button
              key={key}
              className={`role-tab ${activeRole === key ? 'active' : ''} ${key === 'seller' ? 'orange' : ''}`}
              onClick={() => setActiveRole(key)}
            >
              <i className={`fas ${key === 'customer' ? 'fa-user' : key === 'seller' ? 'fa-store' : 'fa-truck'}`}></i>
              {' '}{t(roles[key].labelKey)}
            </button>
          ))}
        </div>

        <div className="steps-grid">
          {current.steps.map((step, i) => (
            <div className="step-card" key={i}>
              <div className="step-number">{step.number}</div>
              <span className="step-icon">
                <i className={`fas ${step.icon}`}></i>
              </span>
              <span className={`role-tag ${current.tag}`}>{current.tagLabel}</span>
              <h4>{t(step.titleKey)}</h4>
              <p>{t(step.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}