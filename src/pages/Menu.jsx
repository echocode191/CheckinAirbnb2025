import React from 'react';

const Menu = () => {
  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(12px)',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease',
  };

  const buttonBase = {
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    padding: '10px 14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '14px',
    width: '100%',
  };

  const whatsappButton = {
    ...buttonBase,
    background: 'linear-gradient(45deg, #25D366, #128C7E)',
  };

  const handleOrder = (itemName, price) => {
    const message = `Hi! I would like to order: ${itemName} - ${price}`;
    const url = `https://wa.me/254782614845?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const breakfastMenu = [
    {
      category: 'Beverages',
      items: [
        { name: 'Milk Tea', price: 'KES 80' },
        { name: 'Black Tea', price: 'KES 50' },
        { name: 'Black Coffee', price: 'KES 100' },
        { name: 'White Coffee', price: 'KES 150' },
        { name: 'Cardamom Tea', price: 'KES 100' },
        { name: 'Ginger Tea', price: 'KES 100' },
        { name: 'Special Tea', price: 'KES 150' },
        { name: 'Cold Milk', price: 'KES 70' },
        { name: 'Warm Milk', price: 'KES 70' },
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
        { name: 'Raw Cereals', price: 'KES 250' },
        { name: 'Millet Porridge', price: 'KES 150' },
      ],
    },
    {
      category: 'Bites & Sides',
      items: [
        { name: 'Sausage', price: 'KES 60' },
        { name: 'Smokies', price: 'KES 50' },
        { name: '2 Fried Eggs', price: 'KES 100' },
        { name: '2 Boiled Eggs', price: 'KES 100' },
        { name: '2 Omelettes', price: 'KES 150' },
        { name: '2 Pancakes', price: 'KES 150' },
        { name: '2 Queen Cakes', price: 'KES 150' },
        { name: '4 Slices Toasted Bread', price: 'KES 250' },
        { name: '4 Slices Sandwich Bread', price: 'KES 300' },
        { name: '2 Waffles', price: 'KES 300' },
      ],
    },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '30px', textAlign: 'center', color: '#fff' }}>
        Breakfast Menu
      </h1>

      <div
        style={{
          ...glassStyle,
          padding: '15px',
          marginBottom: '30px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#ffcc00', margin: 0 }}>
          ⏰ BREAKFAST ONLY ⏰
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        {breakfastMenu.map((category, index) => (
          <div key={index} style={{ ...glassStyle, padding: '20px' }}>
            <h2
              style={{
                fontSize: '22px',
                marginBottom: '20px',
                textAlign: 'center',
                color: '#fff',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                paddingBottom: '10px',
              }}
            >
              {category.category}
            </h2>
            {category.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                style={{
                  marginBottom: '15px',
                  paddingBottom: '15px',
                  borderBottom:
                    itemIndex < category.items.length - 1
                      ? '1px solid rgba(255,255,255,0.1)'
                      : 'none',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '10px',
                  }}
                >
                  <h3 style={{ fontSize: '16px', margin: 0, color: '#fff' }}>{item.name}</h3>
                  <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#ffcc00' }}>
                    {item.price}
                  </span>
                </div>
                <button
                  onClick={() => handleOrder(item.name, item.price)}
                  style={whatsappButton}
                  onMouseEnter={(e) => (e.target.style.opacity = 0.85)}
                  onMouseLeave={(e) => (e.target.style.opacity = 1)}
                >
                  💬 Order Now
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Custom Order Section */}
      <div
        style={{
          ...glassStyle,
          padding: '20px',
          marginTop: '40px',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Need Custom Orders?</h2>
        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          For special requests or bulk orders, contact us directly.
        </p>
        <a
          href="https://wa.me/254782614845?text=Hi! I have a special request for a breakfast order."
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...whatsappButton, display: 'inline-block', textDecoration: 'none' }}
        >
          💬 Custom Order
        </a>
      </div>

      {/* Delivery Section */}
      <div
        style={{
          ...glassStyle,
          padding: '20px',
          marginTop: '25px',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Breakfast Delivery</h2>
        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          Enjoy our breakfast in the comfort of your room. Delivery available for all guests.
        </p>
        <a
          href="https://wa.me/254782614845?text=Hi! I would like to order breakfast delivery to my room."
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...whatsappButton, display: 'inline-block', textDecoration: 'none' }}
        >
          🚚 Request Delivery
        </a>
      </div>
    </div>
  );
};

export default Menu;

