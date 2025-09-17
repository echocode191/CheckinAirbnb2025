import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(12px)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
  };

  const buttonStyle = {
    background: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    padding: '12px 22px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '15px',
    textAlign: 'center',
  };

  const whatsappLink = `https://wa.me/254721635810?text=Hi! I'm interested in booking a stay with Check in Airbnb.`;

  const featuredOffers = [
    {
      id: 1,
      name: "Studio Short Stay",
      location: "Fedha",
      price: "From KES 1500",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      name: "1 Bedroom Short Stay",
      location: "Fedha & Thika",
      price: "From KES 1800",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      name: "Nyayo Gate B",
      location: "Nairobi",
      price: "From KES 8500",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6 }}>
      
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: '60px 20px',
        marginBottom: '40px'
      }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '15px' }}>Welcome to Check in Airbnb!</h1>
        <p style={{ fontSize: '1rem', maxWidth: '720px', margin: '0 auto 25px' }}>
          Premium accommodations in Fedha, Thika, and Nairobi
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <Link to="/offers" style={buttonStyle}>
            View All Offers
          </Link>
          <a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              ...buttonStyle,
              background: 'linear-gradient(45deg, #25D366, #128C7E)',
            }}
          >
            Book via WhatsApp
          </a>
        </div>
      </section>

      {/* Featured Offers */}
      <section style={{ marginBottom: '50px', padding: '0 20px' }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '20px', textAlign: 'center' }}>Featured Offers</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {featuredOffers.map(offer => (
            <div key={offer.id} style={{ ...glassStyle, overflow: 'hidden' }}>
              <img 
                src={offer.image} 
                alt={offer.name} 
                style={{ width: '100%', height: '180px', objectFit: 'cover' }} 
              />
              <div style={{ padding: '15px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{offer.name}</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '8px', opacity: 0.8 }}>{offer.location}</p>
                <p style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '12px' }}>{offer.price}</p>
                <Link to="/offers" style={{ ...buttonStyle, fontSize: '14px', padding: '8px 15px' }}>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Locations Section */}
      <section style={{ ...glassStyle, padding: '30px 20px', margin: '0 20px 50px' }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '20px', textAlign: 'center' }}>Our Locations</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ fontSize: '22px' }}>📍</div>
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Fedha (Amana Heights)</h3>
              <a 
                href="https://maps.app.goo.gl/PrzcedkJXQSksjRu7?g_st=ipc" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#4facfe', fontSize: '0.9rem', textDecoration: 'none' }}
              >
                View on Map
              </a>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ fontSize: '22px' }}>📍</div>
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Thika (Pilot Estate)</h3>
              <a 
                href="https://maps.google.com/?q=-1.044600,37.094864" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#4facfe', fontSize: '0.9rem', textDecoration: 'none' }}
              >
                View on Map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        ...glassStyle,
        padding: '40px 20px',
        margin: '0 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '15px' }}>Ready for Your Stay?</h2>
        <p style={{ fontSize: '1rem', marginBottom: '20px', maxWidth: '600px', marginInline: 'auto' }}>
          Book your perfect room today and experience comfort like never before.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <Link to="/offers" style={buttonStyle}>
            View All Offers
          </Link>
          <a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              ...buttonStyle,
              background: 'linear-gradient(45deg, #25D366, #128C7E)',
            }}
          >
            Quick WhatsApp Booking
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
