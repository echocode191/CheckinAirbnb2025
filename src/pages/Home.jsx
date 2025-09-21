import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [jokeIndex, setJokeIndex] = useState(0);
  
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
    
    // Auto-rotate featured offers
    const offerInterval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % 3);
    }, 5000);
    
    // Auto-rotate banner slides
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 5);
    }, 4000);
    
    // Auto-rotate jokes
    const jokeInterval = setInterval(() => {
      setJokeIndex(prev => (prev + 1) % jokes.length);
    }, 8000);
    
    return () => {
      clearInterval(timeInterval);
      clearInterval(offerInterval);
      clearInterval(slideInterval);
      clearInterval(jokeInterval);
    };
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
    padding: '14px 28px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    textAlign: 'center',
    fontFamily: "'Nunito Sans', sans-serif",
    boxShadow: '0 4px 15px rgba(255, 105, 180, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
  };

  const whatsappLink = `https://wa.me/254721635810?text=Hi! I'm interested in booking a stay with Check in Airbnb.`;

  // Banner slides
  const bannerSlides = [
    {
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80",
      title: "Luxury Stays",
      subtitle: "Experience premium comfort"
    },
    {
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1920&q=80",
      title: "Stylish Interiors",
      subtitle: "Beautifully designed spaces"
    },
    {
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1920&q=80",
      title: "Modern Living",
      subtitle: "Contemporary amenities"
    },
    {
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1920&q=80",
      title: "Spacious Comfort",
      subtitle: "Room to relax and unwind"
    },
    {
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1920&q=80",
      title: "Prime Locations",
      subtitle: "Stay in the heart of the city"
    }
  ];

  const featuredOffers = [
    {
      id: 1,
      name: "Studio Short Stay",
      location: "Fedha",
      price: "From KES 1500",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      description: "Cozy and modern studio perfect for short stays"
    },
    {
      id: 2,
      name: "1 Bedroom Short Stay",
      location: "Fedha & Thika",
      price: "From KES 1800",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      description: "Spacious one-bedroom with all amenities"
    },
    {
      id: 3,
      name: "Nyayo Gate B",
      location: "Nairobi",
      price: "From KES 8500",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      description: "Luxurious apartment in prime Nairobi location"
    }
  ];

  const testimonials = [
    {
      text: "The most comfortable stay I've had in Nairobi. The attention to detail was exceptional!",
      author: "Sarah M.",
      location: "Nyayo Gate B"
    },
    {
      text: "Perfect location, beautiful decor, and the host was incredibly accommodating.",
      author: "Jessica K.",
      location: "Fedha Studio"
    },
    {
      text: "Felt like a home away from home. Will definitely book again on my next visit.",
      author: "Amanda O.",
      location: "Thika 1 Bedroom"
    }
  ];

  const jokes = [
    {
      setup: "Why did the hotel manager get promoted?",
      punchline: "Because she had outstanding hospitality!"
    },
    {
      setup: "What do you call a fancy Airbnb?",
      punchline: "A BnBelle!"
    },
    {
      setup: "Why did the guest bring a ladder to the hotel?",
      punchline: "Because they heard the room was on the top floor!"
    },
    {
      setup: "What's a hotel's favorite type of music?",
      punchline: "Suite music!"
    },
    {
      setup: "Why did the hotel employee bring a blanket to work?",
      punchline: "In case there was a cover charge!"
    }
  ];

  return (
    <div style={{ 
      fontFamily: "'Nunito Sans', sans-serif", 
      lineHeight: 1.6,
      background: 'linear-gradient(145deg, #fff0f5, #f3e5ff)',
      borderRadius: '24px',
      overflow: 'hidden',
      position: 'relative'
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
      
      {/* Sliding Banner Carousel */}
      <div style={{
        position: 'relative',
        height: '500px',
        overflow: 'hidden',
        borderRadius: '0 0 24px 24px',
        marginBottom: '40px'
      }}>
        {bannerSlides.map((slide, index) => (
          <div 
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: currentSlide === index ? 1 : 0
            }}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              background: 'linear-gradient(to top, rgba(255, 105, 180, 0.8), rgba(147, 112, 219, 0.4), transparent)',
              padding: '60px 20px 30px',
              color: 'white',
              textAlign: 'center'
            }}>
              <h2 style={{ 
                fontSize: 'clamp(28px, 6vw, 48px)', 
                marginBottom: '10px',
                fontFamily: "'Playfair Display', serif",
                fontWeight: '700',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
              }}>
                {slide.title}
              </h2>
              <p style={{ 
                fontSize: 'clamp(16px, 3vw, 24px)',
                fontWeight: '300',
                textShadow: '0 1px 5px rgba(0, 0, 0, 0.3)'
              }}>
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
        
        {/* Carousel indicators */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          zIndex: 3
        }}>
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: currentSlide === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: 'clamp(20px, 5vw, 40px) 20px',
        marginBottom: '40px',
        position: 'relative',
        zIndex: 1
      }}>
        <h1 style={{ 
          fontSize: 'clamp(32px, 8vw, 52px)', 
          marginBottom: '20px', 
          color: '#9370DB',
          fontFamily: "'Playfair Display', serif",
          fontWeight: '700',
          textShadow: '0 2px 10px rgba(147, 112, 219, 0.2)',
          animation: 'float 3s ease-in-out infinite'
        }}>
          Welcome to Check in Airbnb!
        </h1>
        <p style={{ 
          fontSize: 'clamp(16px, 3vw, 20px)', 
          maxWidth: '720px', 
          margin: '0 auto 30px',
          color: '#555'
        }}>
          Premium accommodations in Fedha, Thika, and Nairobi. Experience comfort, elegance, and exceptional hospitality.
        </p>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '16px', 
          alignItems: 'center',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <Link 
            to="/offers" 
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 20px rgba(255, 105, 180, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(255, 105, 180, 0.3)';
            }}
          >
            View All Offers
          </Link>
          <a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              ...buttonStyle,
              background: 'linear-gradient(45deg, #25D366, #128C7E)',
              width: '100%',
              textAlign: 'center'
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
            💬 Book via WhatsApp
          </a>
        </div>
      </section>

      {/* Featured Offers */}
      <section style={{ 
        marginBottom: '60px', 
        padding: '0 20px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ 
            fontSize: 'clamp(28px, 6vw, 36px)', 
            marginBottom: '10px', 
            color: '#9370DB',
            fontFamily: "'Playfair Display', serif",
            fontWeight: '600',
          }}>
            Featured Offers
          </h2>
          <div style={{ 
            width: '80px', 
            height: '4px', 
            background: 'linear-gradient(45deg, #FF69B4, #9370DB)', 
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {featuredOffers.map((offer, index) => (
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
                  alt={offer.name} 
                  style={{ 
                    width: '100%', 
                    height: '220px', 
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
                  {offer.price}
                </div>
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  marginBottom: '8px', 
                  color: '#333',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  {offer.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '18px', marginRight: '8px' }}>📍</span>
                  <p style={{ fontSize: '16px', margin: 0, color: '#666' }}>{offer.location}</p>
                </div>
                <p style={{ fontSize: '15px', color: '#555', marginBottom: '20px', fontStyle: 'italic' }}>
                  {offer.description}
                </p>
                <Link 
                  to="/offers" 
                  style={{ 
                    ...buttonStyle, 
                    fontSize: '14px', 
                    padding: '10px 20px',
                    width: '100%',
                    textAlign: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(255, 105, 180, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(255, 105, 180, 0.3)';
                  }}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ 
        marginBottom: '60px', 
        padding: '0 20px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ 
            fontSize: 'clamp(28px, 6vw, 36px)', 
            marginBottom: '10px', 
            color: '#9370DB',
            fontFamily: "'Playfair Display', serif",
            fontWeight: '600'
          }}>
            Guest Experiences
          </h2>
          <div style={{ 
            width: '80px', 
            height: '4px', 
            background: 'linear-gradient(45deg, #FF69B4, #9370DB)', 
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>
        
        <div style={{
          ...glassStyle,
          padding: '30px',
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative'
        }}>
          <div style={{ 
            fontSize: '60px', 
            position: 'absolute', 
            top: '10px', 
            left: '20px',
            opacity: 0.1,
            color: '#FF69B4'
          }}>
            "
          </div>
          
          <div style={{ 
            fontSize: '18px', 
            fontStyle: 'italic', 
            color: '#555',
            marginBottom: '20px',
            textAlign: 'center',
            minHeight: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {testimonials[activeIndex].text}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <p style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              color: '#9370DB',
              margin: '0 0 5px 0'
            }}>
              {testimonials[activeIndex].author}
            </p>
            <p style={{ 
              fontSize: '14px', 
              color: '#666',
              margin: 0
            }}>
              {testimonials[activeIndex].location}
            </p>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '8px' }}>
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: activeIndex === index ? '#FF69B4' : 'rgba(255, 105, 180, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Professional Jokes Section */}
      <section style={{ 
        marginBottom: '60px', 
        padding: '0 20px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ 
            fontSize: 'clamp(28px, 6vw, 36px)', 
            marginBottom: '10px', 
            color: '#9370DB',
            fontFamily: "'Playfair Display', serif",
            fontWeight: '600',
          }}>
            A Little Hospitality Humor
          </h2>
          <div style={{ 
            width: '80px', 
            height: '4px', 
            background: 'linear-gradient(45deg, #FF69B4, #9370DB)', 
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>
        
        <div style={{
          ...glassStyle,
          padding: '30px',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          minHeight: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div style={{ 
            fontSize: '60px', 
            position: 'absolute', 
            top: '10px', 
            left: '20px',
            opacity: 0.1,
            color: '#FF69B4'
          }}>
            😄
          </div>
          
          <div style={{ 
            fontSize: '18px', 
            color: '#555',
            marginBottom: '15px',
            fontStyle: 'italic'
          }}>
            {jokes[jokeIndex].setup}
          </div>
          
          <div style={{ 
            fontSize: '20px', 
            fontWeight: 'bold',
            color: '#9370DB',
            marginBottom: '20px'
          }}>
            {jokes[jokeIndex].punchline}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', gap: '8px' }}>
            {jokes.map((_, index) => (
              <button 
                key={index}
                onClick={() => setJokeIndex(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: jokeIndex === index ? '#FF69B4' : 'rgba(255, 105, 180, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                aria-label={`View joke ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section style={{ 
        ...glassStyle, 
        padding: '40px 20px', 
        margin: '0 20px 60px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ 
            fontSize: 'clamp(28px, 6vw, 36px)', 
            marginBottom: '10px', 
            color: '#9370DB',
            fontFamily: "'Playfair Display', serif",
            fontWeight: '600',
          }}>
            Our Locations
          </h2>
          <div style={{ 
            width: '80px', 
            height: '4px', 
            background: 'linear-gradient(45deg, #FF69B4, #9370DB)', 
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '20px',
            padding: '15px',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.5)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
            e.currentTarget.style.transform = 'translateX(5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
          >
            <div style={{ 
              fontSize: '28px', 
              background: 'rgba(255, 105, 180, 0.1)',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              📍
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ 
                fontSize: '20px', 
                marginBottom: '5px', 
                color: '#333',
                fontFamily: "'Playfair Display', serif"
              }}>
                Fedha (Amana Heights)
              </h3>
              <p style={{ fontSize: '15px', color: '#666', margin: '0 0 10px 0' }}>
                Modern studios in a serene neighborhood
              </p>
              <a 
                href="https://maps.app.goo.gl/PrzcedkJXQSksjRu7?g_st=ipc" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: '#9370DB', 
                  fontSize: '15px', 
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.target.style.textDecoration = 'none';
                }}
              >
                View on Map <span>→</span>
              </a>
            </div>
          </div>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '20px',
            padding: '15px',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.5)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
            e.currentTarget.style.transform = 'translateX(5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
          >
            <div style={{ 
              fontSize: '28px', 
              background: 'rgba(147, 112, 219, 0.1)',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              📍
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ 
                fontSize: '20px', 
                marginBottom: '5px', 
                color: '#333',
                fontFamily: "'Playfair Display', serif",
              }}>
                Thika (Pilot Estate)
              </h3>
              <p style={{ fontSize: '15px', color: '#666', margin: '0 0 10px 0' }}>
                Spacious one-bedroom apartments
              </p>
              <a 
                href="https://maps.google.com/?q=-1.044600,37.094864" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: '#9370DB', 
                  fontSize: '15px', 
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.target.style.textDecoration = 'none';
                }}
              >
                View on Map <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        ...glassStyle,
        padding: '50px 20px',
        margin: '0 20px 40px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        background: 'linear-gradient(135deg, rgba(255, 105, 180, 0.2), rgba(147, 112, 219, 0.15))'
      }}>
        <h2 style={{ 
          fontSize: 'clamp(28px, 6vw, 36px)', 
          marginBottom: '15px', 
          color: '#9370DB',
          fontFamily: "'Playfair Display', serif",
          fontWeight: '600',
        }}>
          Ready for Your Stay?
        </h2>
        <p style={{ 
          fontSize: 'clamp(16px, 3vw, 18px)', 
          marginBottom: '30px', 
          maxWidth: '600px', 
          marginInline: 'auto',
          color: '#555'
        }}>
          Book your perfect room today and experience comfort like never before. Our team is dedicated to making your stay unforgettable.
        </p>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '16px', 
          alignItems: 'center',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <Link 
            to="/offers" 
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 20px rgba(255, 105, 180, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(255, 105, 180, 0.3)';
            }}
          >
            View All Offers
          </Link>
          <a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              ...buttonStyle,
              background: 'linear-gradient(45deg, #25D366, #128C7E)',
              width: '100%',
              textAlign: 'center'
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
            💬 Quick WhatsApp Booking
          </a>
        </div>
      </section>

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
        
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Nunito+Sans:wght@400;600;700&display=swap');
      `}</style>
    </div>
  );
};

export default Home;