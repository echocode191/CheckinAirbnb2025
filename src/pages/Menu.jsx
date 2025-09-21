import React, { useEffect, useState } from 'react';

const Menu = () => {
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const onScroll = () => {
      document.querySelectorAll('.menu-section').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
          setVisible((v) => ({ ...v, [el.dataset.id]: true }));
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const glass = {
    background: 'rgba(255,255,255,0.12)',
    backdropFilter: 'blur(14px)',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.25)',
    boxShadow: '0 8px 28px rgba(0,0,0,0.25)',
    transition: 'transform 0.3s ease, opacity 0.6s ease',
  };

  const btnBase = {
    border: 'none',
    borderRadius: '12px',
    color: '#fff',
    padding: '12px 18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '15px',
    width: '100%',
  };

  const whatsappBtn = {
    ...btnBase,
    background:
      'linear-gradient(45deg, #ff7eb9, #ff65a3, #fbb1bd)', // warm rose-pink gradient
  };

  const handleOrder = (item, price) => {
    const msg = `Hi! I'd like to order: ${item} - ${price}`;
    window.open(`https://wa.me/254782614845?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const menu = [
    {
      category: 'Beverages',
      items: [
        { name: 'Milk Tea', price: 'KES 80' },
        { name: 'Black Tea', price: 'KES 50' },
        { name: 'White Coffee', price: 'KES 150' },
      ],
    },
    {
      category: 'Smoothies',
      items: [
        { name: 'Mango Smoothie', price: 'KES 250' },
        { name: 'Avocado Smoothie', price: 'KES 250' },
      ],
    },
    {
      category: 'Cereals & Porridge',
      items: [
        { name: 'Cooked Cereals', price: 'KES 300' },
        { name: 'Millet Porridge', price: 'KES 150' },
      ],
    },
    {
      category: 'Bites & Sides',
      items: [
        { name: 'Sausage', price: 'KES 60' },
        { name: '2 Pancakes', price: 'KES 150' },
        { name: '2 Waffles', price: 'KES 300' },
      ],
    },
  ];

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: '0 auto', color: '#fff' }}>
      <h1
        style={{
          fontSize: 34,
          textAlign: 'center',
          marginBottom: 30,
          background: 'linear-gradient(45deg,#ff9a9e,#fecfef)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Breakfast Menu
      </h1>

      <div style={{ ...glass, padding: 16, textAlign: 'center', marginBottom: 30 }}>
        <p style={{ fontSize: 18, fontWeight: 'bold', color: '#ffb7c5', margin: 0 }}>
          ⏰ Morning Bliss Only ⏰
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
        {menu.map((cat, i) => (
          <div
            key={i}
            data-id={i}
            className="menu-section"
            style={{
              ...glass,
              padding: 20,
              opacity: visible[i] ? 1 : 0,
              transform: visible[i] ? 'translateY(0)' : 'translateY(40px)',
            }}
          >
            <h2
              style={{
                fontSize: 22,
                marginBottom: 20,
                textAlign: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                paddingBottom: 10,
              }}
            >
              {cat.category}
            </h2>

            {cat.items.map((item, j) => (
              <div
                key={j}
                style={{
                  marginBottom: 18,
                  paddingBottom: 14,
                  borderBottom:
                    j < cat.items.length - 1
                      ? '1px solid rgba(255,255,255,0.1)'
                      : 'none',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.02)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 10,
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: 16 }}>{item.name}</h3>
                  <span style={{ fontSize: 16, fontWeight: '600', color: '#ffb7c5' }}>
                    {item.price}
                  </span>
                </div>
                <button
                  style={whatsappBtn}
                  onClick={() => handleOrder(item.name, item.price)}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.85)}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
                >
                  💬 Order Now
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Custom Order */}
      <div style={{ ...glass, padding: 24, textAlign: 'center', marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 15 }}>Need a Personal Touch?</h2>
        <p style={{ fontSize: 16, marginBottom: 20 }}>
          Special requests or bulk? We’ve got you.
        </p>
        <a
          href="https://wa.me/254782614845?text=Hi! I have a special breakfast request."
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...whatsappBtn, textDecoration: 'none', display: 'inline-block' }}
        >
          💬 Custom Order
        </a>
      </div>

      {/* Delivery */}
      <div style={{ ...glass, padding: 24, textAlign: 'center', marginTop: 25 }}>
        <h2 style={{ fontSize: 22, marginBottom: 15 }}>Breakfast Delivery</h2>
        <p style={{ fontSize: 16, marginBottom: 20 }}>
          Enjoy in the comfort of your room—just ask!
        </p>
        <a
          href="https://wa.me/254782614845?text=Hi! I’d like breakfast delivery to my room."
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...whatsappBtn, textDecoration: 'none', display: 'inline-block' }}
        >
          🚚 Request Delivery
        </a>
      </div>
    </div>
  );
};

export default Menu;
