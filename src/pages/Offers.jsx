import React, { useState } from 'react';

const Offers = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const phoneNumber = "0721635810";
  const whatsappLink = `https://wa.me/254721635810?text=Hi! I'm interested in booking a stay with Check in Airbnb.`;

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
  };

  const buttonStyle = {
    background: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    padding: '12px 20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '16px'
  };

  const whatsappButtonStyle = {
    background: 'linear-gradient(45deg, #25D366, #128C7E)',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    padding: '12px 20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px'
  };

  const offers = [
    {
      id: 1,
      title: "Studio Short Stay (Fedha)",
      description: "Comfortable studio for short stays",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      options: [
        { name: "Less than 4 hrs", price: "KES 1500", note: "Day Time" },
        { name: "Less than 8 hrs", price: "KES 1800", note: "Day Time" },
        { name: "Less than 10-12 hrs", price: "KES 2000" },
        { name: "Less than 13-17hrs", price: "KES 2200" },
        { name: "Less than 18-24 hrs", price: "KES 2500" },
        { name: "2 days", price: "KES 4500", note: "10am check out" },
        { name: "2 days", price: "KES 5000", note: "past 10am check out" },
        { name: "3 days", price: "KES 7000", note: "24hrs" },
        { name: "Per month", price: "KES 50,000", note: "utilities on you" }
      ]
    },
    {
      id: 2,
      title: "1 Bedroom Short Stay (Fedha & Thika)",
      description: "Spacious 1 bedroom for short stays",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      options: [
        { name: "Less than 4 hrs", price: "KES 1800", note: "Day Time" },
        { name: "Less than 8 hrs", price: "KES 2200", note: "Day Time" },
        { name: "Less than 10-12 hrs", price: "KES 2500" },
        { name: "Less than 13-17hrs", price: "KES 3000" },
        { name: "Less than 18-24 hrs", price: "KES 3500" },
        { name: "2 days", price: "KES 6500", note: "24 hrs" },
        { name: "3 days", price: "KES 10,000", note: "24hrs" },
        { name: "Per month", price: "KES 75,000", note: "utilities on you" }
      ]
    },
    {
      id: 3,
      title: "1br Party Packages",
      description: "Perfect venue for your parties",
      image: "https://images.unsplash.com/photo-1519671489658-6ec9c11d86a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      options: [
        { name: "Below 10 people", price: "KES 12,000" },
        { name: "Below 15 people", price: "KES 16,000" },
        { name: "Below 20 people", price: "KES 20,000" }
      ]
    },
    {
      id: 4,
      title: "Nyayo Gate B",
      description: "Comfortable apartments in Nyayo",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      options: [
        { name: "2/3br", price: "KES 8500" },
        { name: "Per month", price: "KES 140,000" }
      ]
    }
  ];

  const openOfferDetails = (offer) => {
    setSelectedOffer(offer);
  };

  const closeOfferDetails = () => {
    setSelectedOffer(null);
  };

  const bookOffer = (offerTitle, optionName) => {
    const message = `Hi! I'm interested in booking the ${offerTitle} - ${optionName}. Please provide more information.`;
    const url = `https://wa.me/254721635810?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ padding: '0 15px' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '30px', textAlign: 'center' }}>Special Offers</h1>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        {offers.map(offer => (
          <div 
            key={offer.id} 
            style={{
              ...glassStyle,
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <img src={offer.image} alt={offer.title} style={{ 
                width: '120px', 
                height: '120px', 
                objectFit: 'cover',
                flexShrink: 0
              }} />
              <div style={{ padding: '15px', flex: 1 }}>
                <h2 style={{ fontSize: '18px', marginBottom: '5px' }}>{offer.title}</h2>
                <p style={{ fontSize: '14px', marginBottom: '15px' }}>{offer.description}</p>
                <button 
                  onClick={() => openOfferDetails(offer)}
                  style={{ ...buttonStyle, width: '100%', fontSize: '14px' }}
                >
                  View Options
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Booking Section */}
      <div style={{ ...glassStyle, padding: '25px', marginTop: '40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Quick Booking</h2>
        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          Have questions or ready to book? Contact us directly!
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            style={whatsappButtonStyle}
          >
            💬 WhatsApp Booking
          </a>
          <a 
            href={`tel:${phoneNumber}`}
            style={{ ...buttonStyle, textDecoration: 'none' }}
          >
            📞 Call Us
          </a>
        </div>
      </div>

      {/* Offer Details Modal */}
      {selectedOffer && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000,
          padding: '20px'
        }}>
          <div style={{ 
            ...glassStyle, 
            maxWidth: '500px', 
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <div style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h2 style={{ fontSize: '20px' }}>{selectedOffer.title}</h2>
                <button 
                  onClick={closeOfferDetails}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: 'white', 
                    fontSize: '24px',
                    cursor: 'pointer'
                  }}
                >
                  ×
                </button>
              </div>
              
              <img src={selectedOffer.image} alt={selectedOffer.title} style={{ 
                width: '100%', 
                borderRadius: '8px', 
                marginBottom: '15px',
                height: '180px',
                objectFit: 'cover'
              }} />
              
              <p style={{ fontSize: '16px', lineHeight: '1.4', marginBottom: '20px' }}>
                {selectedOffer.description}
              </p>
              
              <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>Pricing Options:</h3>
              <div style={{ marginBottom: '25px' }}>
                {selectedOffer.options.map((option, index) => (
                  <div key={index} style={{ 
                    padding: '12px', 
                    marginBottom: '10px', 
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{option.name}</div>
                      {option.note && <div style={{ fontSize: '12px', opacity: 0.8 }}>{option.note}</div>}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{option.price}</div>
                      <button 
                        onClick={() => bookOffer(selectedOffer.title, option.name)}
                        style={{
                          background: 'linear-gradient(45deg, #25D366, #128C7E)',
                          border: 'none',
                          borderRadius: '6px',
                          color: 'white',
                          padding: '6px 10px',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          fontSize: '12px'
                        }}
                      >
                        Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                style={whatsappButtonStyle}
              >
                💬 Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offers;