import { useState } from 'react';

export default function Stores({ lang }) {
  const t = (key) => {
    const dict = {
      en: {
        storesLabel: 'Local Stores',
        storesTitle: 'Discover neighborhood shops',
        storesDesc: 'Find the best stores near you, all in one place.',
        filterAll: 'All',
        filterOpen: '🟢 Open',
        filterNear: '📍 Near',
        filterFast: '⚡ Fast',
        badgeOpen: '● Open',
        badgeClosed: '● Closed',
      },
      hi: {
        storesLabel: 'स्थानीय दुकानें',
        storesTitle: 'पड़ोस की दुकानें खोजें',
        storesDesc: 'अपने आस-पास की सबसे अच्छी दुकानें ढूंढें, सभी एक ही जगह।',
        filterAll: 'सभी',
        filterOpen: '🟢 खुला',
        filterNear: '📍 निकट',
        filterFast: '⚡ तेज़',
        badgeOpen: '● खुला',
        badgeClosed: '● बंद',
      }
    };
    return dict[lang]?.[key] || key;
  };

  const stores = [
    { name: 'The Little Stationery', category: 'Cards, Art & Crafts', icon: '✏️', rating: '5.0',
      reviews: 1, distance: '0.7 km', time: '30-45 mins', open: true },
    { name: 'Fresh Mart Grocery', category: 'Fruits, Vegetables & Dairy', icon: '🛒', rating: '4.8',
      reviews: 23, distance: '1.2 km', time: '20-30 mins', open: true },
    { name: 'HealthPlus Pharmacy', category: 'Medicines & Wellness', icon: '💊', rating: '4.9',
      reviews: 12, distance: '0.5 km', time: '15-20 mins', open: true },
    { name: 'TechZone Electronics', category: 'Gadgets & Accessories', icon: '📱', rating: '4.6',
      reviews: 8, distance: '2.1 km', time: '35-45 mins', open: false },
    { name: 'Daily Needs Store', category: 'Household & Essentials', icon: '🧴', rating: '4.7',
      reviews: 15, distance: '0.9 km', time: '25-35 mins', open: true },
    { name: 'Fashion Hub', category: 'Clothing & Accessories', icon: '👗', rating: '4.4', reviews: 6,
      distance: '1.8 km', time: '40-50 mins', open: false },
  ];

  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? stores :
    filter === 'open' ? stores.filter(s => s.open) :
    filter === 'near' ? stores.filter(s => parseFloat(s.distance) < 1) :
    filter === 'fast' ? stores.filter(s => parseInt(s.time) < 30) :
    stores;

  return (
    <section className="stores-section">
      <div className="container">
        <div className="section-title">
          <span className="label"><i className="fas fa-store"></i> {t('storesLabel')}</span>
          <h2>{t('storesTitle')}</h2>
          <p>{t('storesDesc')}</p>
        </div>

        <div className="stores-filter">
          {['all', 'open', 'near', 'fast'].map((f) => (
            <button
              key={f}
              className={filter === f ? 'active' : ''}
              onClick={() => setFilter(f)}
            >
              {f === 'all' && t('filterAll')}
              {f === 'open' && t('filterOpen')}
              {f === 'near' && t('filterNear')}
              {f === 'fast' && t('filterFast')}
            </button>
          ))}
        </div>

        <div className="stores-grid">
          {filtered.map((store, i) => (
            <div className="store-card" key={i}>
              <div className="store-top">
                <div className="icon-box">{store.icon}</div>
                {store.open && <span className="badge-open">{t('badgeOpen')}</span>}
                {!store.open && <span className="badge-open" style={{ background: '#f8d7da', color: '#721c24' }}>{t('badgeClosed')}</span>}
              </div>
              <h4>{store.name}</h4>
              <div className="store-category">{store.category}</div>
              <div className="store-meta">
                <span className="rating">⭐ {store.rating}({store.reviews})</span>
                <span><i className="fas fa-location-dot"></i> {store.distance}</span>
                <span><i className="fas fa-clock"></i> {store.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}