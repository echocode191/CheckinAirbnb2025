import React, { useState, useEffect } from 'react';

const Offers = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const phoneNumber = "0782614845";
  const whatsappLink = `https://wa.me/25782614845?text=Hi! I'm interested in booking a stay with Check in Airbnb.`;

  useEffect(() => {
    setIsVisible(true);
    
    // Update time every second
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setCurrentDate(now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    };
    
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    
    return () => clearInterval(timeInterval);
  }, []);

  // Pink and purple color palette
  const glassStyle = {
    background: 'linear-gradient(135deg, rgba(255, 105, 180, 0.15), rgba(147, 112, 219, 0.1))',
    backdropFilter: 'blur(16px)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(255, 105, 180, 0.15)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    opacity: isVisible ? 1 : 0,
  };

  const buttonStyle = {
    background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
    border: 'none',
    borderRadius: '50px',
    color: 'white',
    padding: '14px 24px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '16px',
    fontFamily: "'Nunito Sans', sans-serif",
    boxShadow: '0 4px 15px rgba(255, 105, 180, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
  };

  const whatsappButtonStyle = {
    background: 'linear-gradient(45deg, #25D366, #128C7E)',
    border: 'none',
    borderRadius: '50px',
    color: 'white',
    padding: '14px 24px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    fontFamily: "'Nunito Sans', sans-serif",
    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
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
    <div style={{ 
      padding: '0 15px',
      background: 'linear-gradient(145deg, #fff0f5, #f3e5ff)',
      borderRadius: '24px',
      overflow: 'hidden',
      position: 'relative',
      minHeight: '100vh'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(255, 105, 180, 0.1), rgba(147, 112, 219, 0.1))',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        left: '-150px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(147, 112, 219, 0.1), rgba(255, 105, 180, 0.1))',
        zIndex: 0
      }}></div>
      
      {/* Woman-owned badge */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '50px',
        fontSize: '14px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        zIndex: 2
      }}>
        <span>♀️</span> Woman-Owned Business
      </div>
      
      {/* Real-time clock display */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        padding: '12px 20px',
        boxShadow: '0 4px 15px rgba(255, 105, 180, 0.2)',
        zIndex: 2,
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#9370DB' }}>{currentTime}</div>
        <div style={{ fontSize: '14px', color: '#FF69B4' }}>{currentDate}</div>
      </div>
      
      <div style={{ position: 'relative', zIndex: 1, padding: '20px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ 
            fontSize: 'clamp(28px, 6vw, 42px)', 
            marginBottom: '15px', 
            color: '#9370DB',
            fontFamily: "'Playfair Display', serif",
            fontWeight: '700',
            textShadow: '0 2px 10px rgba(147, 112, 219, 0.2)',
            animation: 'float 3s ease-in-out infinite'
          }}>
            Special Offers
          </h1>
          <p style={{ 
            fontSize: 'clamp(16px, 3vw, 18px)', 
            maxWidth: '600px', 
            margin: '0 auto',
            color: '#555'
          }}>
            Discover our exclusive offers designed to make your stay unforgettable
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '25px'
        }}>
          {offers.map((offer, index) => (
            <div 
              key={offer.id} 
              style={{
                ...glassStyle,
                overflow: 'hidden',
                transitionDelay: `${0.1 * index}s`,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 105, 180, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 105, 180, 0.15)';
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'rgba(255, 105, 180, 0.8)',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  {offer.options[0].price}
                </div>
              </div>
              <div style={{ padding: '20px' }}>
                <h2 style={{ 
                  fontSize: '20px', 
                  marginBottom: '8px', 
                  color: '#333',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  {offer.title}
                </h2>
                <p style={{ fontSize: '15px', color: '#555', marginBottom: '20px' }}>
                  {offer.description}
                </p>
                <button 
                  onClick={() => openOfferDetails(offer)}
                  style={{ ...buttonStyle, width: '100%' }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(255, 105, 180, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(255, 105, 180, 0.3)';
                  }}
                >
                  View Options
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Booking Section */}
        <div style={{ 
          ...glassStyle, 
          padding: '30px', 
          marginTop: '50px', 
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(255, 105, 180, 0.2), rgba(147, 112, 219, 0.15))'
        }}>
          <h2 style={{ 
            fontSize: 'clamp(24px, 5vw, 32px)', 
            marginBottom: '15px', 
            color: '#9370DB',
            fontFamily: "'Playfair Display', serif",
            fontWeight: '600'
          }}>
            Quick Booking
          </h2>
          <p style={{ 
            fontSize: 'clamp(16px, 3vw, 18px)', 
            marginBottom: '25px', 
            maxWidth: '600px', 
            marginInline: 'auto',
            color: '#555'
          }}>
            Have questions or ready to book? Contact us directly and our team will assist you promptly!
          </p>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '15px', 
            alignItems: 'center',
            maxWidth: '400px',
            margin: '0 auto'
          }}>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              style={whatsappButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
              }}
            >
              💬 WhatsApp Booking
            </a>
            <a 
              href={`tel:${phoneNumber}`}
              style={{ 
                ...buttonStyle, 
                textDecoration: 'none',
                width: '100%',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 20px rgba(255, 105, 180, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(255, 105, 180, 0.3)';
              }}
            >
              📞 Call Us
            </a>
          </div>
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
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000,
          padding: '20px',
          animation: 'fadeIn 0.3s ease'
        }}>
          <div style={{ 
            ...glassStyle, 
            maxWidth: '600px', 
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            animation: 'slideUp 0.4s ease'
          }}>
            <div style={{ padding: '25px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ 
                  fontSize: '24px', 
                  color: '#9370DB',
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: '600'
                }}>
                  {selectedOffer.title}
                </h2>
                <button 
                  onClick={closeOfferDetails}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: '#9370DB', 
                    fontSize: '28px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 105, 180, 0.1)';
                    e.currentTarget.style.transform = 'rotate(90deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'rotate(0deg)';
                  }}
                >
                  ×
                </button>
              </div>
              
              <img 
                src={selectedOffer.image} 
                alt={selectedOffer.title} 
                style={{ 
                  width: '100%', 
                  borderRadius: '16px', 
                  marginBottom: '20px',
                  height: '220px',
                  objectFit: 'cover'
                }} 
              />
              
              <p style={{ 
                fontSize: '16px', 
                lineHeight: '1.6', 
                marginBottom: '25px',
                color: '#555'
              }}>
                {selectedOffer.description}
              </p>
              
              <h3 style={{ 
                fontSize: '20px', 
                marginBottom: '20px', 
                color: '#9370DB',
                fontFamily: "'Playfair Display', serif",
                fontWeight: '600'
              }}>
                Pricing Options:
              </h3>
              <div style={{ marginBottom: '30px' }}>
                {selectedOffer.options.map((option, index) => (
                  <div 
                    key={index} 
                    style={{ 
                      padding: '16px', 
                      marginBottom: '15px', 
                      background: 'rgba(255,255,255,0.6)',
                      borderRadius: '16px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.5)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.8)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.6)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div>
                      <div style={{ 
                        fontSize: '16px', 
                        fontWeight: 'bold', 
                        color: '#333',
                        fontFamily: "'Nunito Sans', sans-serif"
                      }}>
                        {option.name}
                      </div>
                      {option.note && <div style={{ 
                        fontSize: '14px', 
                        color: '#666',
                        marginTop: '4px'
                      }}>
                        {option.note}
                      </div>}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <div style={{ 
                        fontSize: '18px', 
                        fontWeight: 'bold', 
                        color: '#FF69B4',
                        background: 'rgba(255, 105, 180, 0.1)',
                        padding: '6px 12px',
                        borderRadius: '20px'
                      }}>
                        {option.price}
                      </div>
                      <button 
                        onClick={() => bookOffer(selectedOffer.title, option.name)}
                        style={{
                          background: 'linear-gradient(45deg, #25D366, #128C7E)',
                          border: 'none',
                          borderRadius: '50px',
                          color: 'white',
                          padding: '8px 16px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontFamily: "'Nunito Sans', sans-serif",
                          boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
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
                style={{
                  ...whatsappButtonStyle,
                  width: '100%',
                  textAlign: 'center',
                  display: 'block'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
                }}
              >
                💬 Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer with signature */}
      <div style={{
        textAlign: 'center',
        padding: '30px 20px',
        color: '#666',
        fontSize: '14px',
        fontFamily: "'Playfair Display', serif",
        fontStyle: 'italic',
        borderTop: '1px solid rgba(255, 105, 180, 0.2)',
        position: 'relative',
        zIndex: 1
      }}>
        Creating memorable experiences with care and attention to detail
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Nunito+Sans:wght@400;600;700&display=swap');
      `}</style>
    </div>
  );
};

export default Offers;