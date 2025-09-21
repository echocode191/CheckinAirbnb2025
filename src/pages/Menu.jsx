import React, { useState, useEffect } from 'react';

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  // Pink & purple glass style
  const glassStyle = {
    background: 'linear-gradient(135deg, rgba(139, 95, 191, 0.2), rgba(255, 182, 193, 0.15))',
    backdropFilter: 'blur(16px)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(139, 95, 191, 0.15)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    opacity: isVisible ? 1 : 0,
  };

  const buttonBase = {
    border: 'none',
    borderRadius: '50px',
    color: 'white',
    padding: '12px 20px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '14px',
    width: '100%',
    fontFamily: "'Nunito Sans', sans-serif",
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
  };

  const whatsappButton = {
    ...buttonBase,
    background: 'linear-gradient(45deg, #8B5FBF, #FF8ACD)',
    boxShadow: '0 4px 15px rgba(139, 95, 191, 0.3)',
  };

  const handleOrder = (itemName, price) => {
    const msg = `Hi! I would like to order: ${itemName} - ${price}`;
    window.open(`https://wa.me/254782614845?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const breakfastMenu = [
    {
      category: 'Beverages',
      icon: '☕',
      items: [
        { name: 'Milk Tea', price: 'KES 80' },
        { name: 'Black Tea', price: 'KES 50' },
        { name: 'White Coffee', price: 'KES 150' },
      ],
    },
    {
      category: 'Smoothies',
      icon: '🥤',
      items: [
        { name: 'Mango Smoothie', price: 'KES 250' },
        { name: 'Avocado Smoothie', price: 'KES 250' },
      ],
    },
    {
      category: 'Cereals & Porridge',
      icon: '🥣',
      items: [
        { name: 'Cooked Cereals', price: 'KES 300' },
        { name: 'Millet Porridge', price: 'KES 150' },
      ],
    },
    {
      category: 'Bites & Sides',
      icon: '🍳',
      items: [
        { name: 'Sausage', price: 'KES 60' },
        { name: '2 Pancakes', price: 'KES 150' },
        { name: '2 Waffles', price: 'KES 300' },
      ],
    },
  ];

  return (
    <div style={{
      padding: 'clamp(20px,5vw,40px)',
      maxWidth: '1000px',
      margin: '0 auto',
      background: 'linear-gradient(145deg, #fdf0ff, #f0e6ff)',
      borderRadius: '24px',
      fontFamily: "'Nunito Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* decorative soft pink/purple bubbles */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(139,95,191,0.1), rgba(255,182,193,0.1))',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-70px',
        left: '-70px',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(255,182,193,0.1), rgba(139,95,191,0.1))',
        zIndex: 0
      }} />

      <div style={{ textAlign: 'center', marginBottom: 40, position: 'relative', zIndex: 1 }}>
        <h1 style={{
          fontSize: 'clamp(28px,6vw,42px)',
          marginBottom: 15,
          color: '#8B5FBF',
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          textShadow: '0 2px 10px rgba(139,95,191,0.2)',
          animation: 'float 3s ease-in-out infinite'
        }}>
          Breakfast Menu
        </h1>
      </div>

      <div style={{
        ...glassStyle,
        padding: 20,
        marginBottom: 40,
        textAlign: 'center',
        transitionDelay: '0.2s'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: 'rgba(255,182,193,0.2)',
          padding: '10px 20px',
          borderRadius: '50px',
          border: '1px dashed rgba(255,182,193,0.4)'
        }}>
          <span style={{ fontSize: 20 }}>⏰</span>
          <p style={{
            fontSize: 'clamp(16px,3vw,18px)',
            fontWeight: 'bold',
            color: '#FF8ACD',
            margin: 0
          }}>
            BREAKFAST ONLY • 7AM - 11AM
          </p>
        </div>
      </div>

      {/* menu categories */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 30, position: 'relative', zIndex: 1 }}>
        {breakfastMenu.map((cat, i) => (
          <div
            key={i}
            style={{
              ...glassStyle,
              padding: 25,
              transitionDelay: `${0.3 + i * 0.1}s`
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(139,95,191,0.25)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(139,95,191,0.15)';
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 15,
              marginBottom: 20,
              paddingBottom: 15,
              borderBottom: '1px solid rgba(139,95,191,0.2)'
            }}>
              <span style={{ fontSize: 28 }}>{cat.icon}</span>
              <h2 style={{
                fontSize: 'clamp(20px,4vw,24px)',
                margin: 0,
                color: '#8B5FBF',
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600
              }}>
                {cat.category}
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 20 }}>
              {cat.items.map((item, j) => (
                <div key={j}
                  style={{
                    background: 'rgba(255,255,255,0.6)',
                    borderRadius: 16,
                    padding: 16,
                    border: '1px solid rgba(255,255,255,0.5)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.8)';
                    e.currentTarget.style.transform = 'scale(1.03)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.6)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                    <h3 style={{ fontSize: 16, margin: 0, color: '#333', fontWeight: 600 }}>{item.name}</h3>
                    <span style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#FF8ACD',
                      background: 'rgba(255,182,193,0.1)',
                      padding: '4px 10px',
                      borderRadius: 20
                    }}>
                      {item.price}
                    </span>
                  </div>
                  <button
                    onClick={() => handleOrder(item.name, item.price)}
                    style={whatsappButton}
                  >
                    💬 Order Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* global animation keyframes */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Nunito+Sans:wght@400;600;700&display=swap');
      `}</style>
    </div>
  );
};

export default Menu;
