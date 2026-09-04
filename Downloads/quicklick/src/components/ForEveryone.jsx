export default function ForEveryone({ lang }) {
  const t = (key) => {
    const dict = {
      en: {
        forEveryoneLabel: 'For Everyone',
        forEveryoneTitle: 'One app, three experiences',
        forEveryoneDesc: 'Quicklick seamlessly connects three sides of local commerce in a single, unified platform.',
        roleCustomer: 'Customers',
        roleCustomerTag: 'Shop smarter, shop local',
        roleSeller: 'Sellers',
        roleSellerTag: 'Grow your business digitally',
        roleDeliveryPartner: 'Delivery Partners',
        roleDeliveryTag: 'Earn on your own schedule',
        customerFeat1: 'Discover stores within walking distance',
        customerFeat2: 'Real-time delivery tracking on map',
        customerFeat3: '27+ categories to choose from',
        customerFeat4: 'Save favorite stores & products',
        customerFeat5: 'Manage multiple delivery addresses',
        customerFeat6: 'Order history & reordering',
        sellerFeat1: '5-step store creation wizard',
        sellerFeat2: 'Real-time order dashboard',
        sellerFeat3: 'Product variants & image management',
        sellerFeat4: 'Configurable store hours & zones',
        sellerFeat5: 'Delivery partner management',
        sellerFeat6: 'Inventory tracking & analytics',
        deliveryFeat1: 'Flexible online/offline toggle',
        deliveryFeat2: 'Real-time delivery notifications',
        deliveryFeat3: 'Smart queue management',
        deliveryFeat4: 'GPS navigation integration',
        deliveryFeat5: 'Earnings tracking & history',
        deliveryFeat6: 'Performance analytics',
      },
      hi: {
        forEveryoneLabel: 'सभी के लिए',
        forEveryoneTitle: 'एक ऐप, तीन अनुभव',
        forEveryoneDesc: 'Quicklick स्थानीय वाणिज्य के तीन पहलुओं को एक ही मंच पर जोड़ता है।',
        roleCustomer: 'ग्राहक',
        roleCustomerTag: 'स्मार्ट खरीदारी, स्थानीय खरीदारी',
        roleSeller: 'विक्रेता',
        roleSellerTag: 'अपने व्यवसाय को डिजिटल रूप से बढ़ाएँ',
        roleDeliveryPartner: 'डिलीवरी पार्टनर',
        roleDeliveryTag: 'अपने शेड्यूल पर कमाएँ',
        customerFeat1: 'पैदल दूरी के भीतर दुकानें खोजें',
        customerFeat2: 'मानचित्र पर रीयल-टाइम डिलीवरी ट्रैकिंग',
        customerFeat3: '27+ श्रेणियाँ चुनने के लिए',
        customerFeat4: 'पसंदीदा दुकानें और उत्पाद सहेजें',
        customerFeat5: 'एकाधिक डिलीवरी पते प्रबंधित करें',
        customerFeat6: 'ऑर्डर इतिहास और पुनः ऑर्डर',
        sellerFeat1: '5-चरणीय दुकान निर्माण विज़ार्ड',
        sellerFeat2: 'रीयल-टाइम ऑर्डर डैशबोर्ड',
        sellerFeat3: 'उत्पाद वैरिएंट और छवि प्रबंधन',
        sellerFeat4: 'कॉन्फ़िगर करने योग्य दुकान घंटे और ज़ोन',
        sellerFeat5: 'डिलीवरी पार्टनर प्रबंधन',
        sellerFeat6: 'इन्वेंटरी ट्रैकिंग और एनालिटिक्स',
        deliveryFeat1: 'लचीला ऑनलाइन/ऑफलाइन टॉगल',
        deliveryFeat2: 'रीयल-टाइम डिलीवरी सूचनाएँ',
        deliveryFeat3: 'स्मार्ट क्यू प्रबंधन',
        deliveryFeat4: 'GPS नेविगेशन एकीकरण',
        deliveryFeat5: 'कमाई ट्रैकिंग और इतिहास',
        deliveryFeat6: 'प्रदर्शन एनालिटिक्स',
      }
    };
    return dict[lang]?.[key] || key;
  };

  const data = [
    {
      roleKey: 'roleCustomer',
      icon: 'fa-user',
      color: 'teal',
      tagKey: 'roleCustomerTag',
      features: ['customerFeat1','customerFeat2','customerFeat3','customerFeat4','customerFeat5','customerFeat6']
    },
    {
      roleKey: 'roleSeller',
      icon: 'fa-store',
      color: 'orange',
      tagKey: 'roleSellerTag',
      features: ['sellerFeat1','sellerFeat2','sellerFeat3','sellerFeat4','sellerFeat5','sellerFeat6']
    },
    {
      roleKey: 'roleDeliveryPartner',
      icon: 'fa-truck',
      color: 'blue',
      tagKey: 'roleDeliveryTag',
      features: ['deliveryFeat1','deliveryFeat2','deliveryFeat3','deliveryFeat4','deliveryFeat5','deliveryFeat6']
    }
  ];

  return (
    <section id="for-everyone" className="for-everyone">
      <div className="container">
        <div className="section-title">
          <span className="label"><i className="fas fa-users"></i> {t('forEveryoneLabel')}</span>
          <h2>{t('forEveryoneTitle')}</h2>
          <p>{t('forEveryoneDesc')}</p>
        </div>

        <div className="role-grid">
          {data.map((item, i) => (
            <div className="role-card" key={i}>
              <div className="role-header">
                <div className={`avatar ${item.color}`}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div>
                  <h3><span className={item.color}>{t(item.roleKey)}</span></h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--gray)' }}>
                    {t(item.tagKey)}
                  </div>
                </div>
              </div>
              <ul>
                {item.features.map((f, j) => (
                  <li key={j}>
                    <i className={`fas fa-check ${item.color === 'blue' ? 'orange' : item.color}`}></i> {t(f)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}