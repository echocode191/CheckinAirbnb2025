import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const phoneNumber = "0782614845";
  const emailAddress = "echoworld191@gmail.com";
  const whatsappLink = `https://wa.me/254782614845?text=Hi! I'm interested in booking a stay with Check in Airbnb.`;
  const echobuizLink = `https://wa.me/254782614845?text=Hi%20Echobuiz!%20I%20saw%20your%20website%20services%20👋`;
  const currentYear = new Date().getFullYear();

  // Pink and purple color palette
  const glassStyle = {
    background: 'linear-gradient(135deg, rgba(255, 105, 180, 0.15), rgba(147, 112, 219, 0.1))',
    backdropFilter: 'blur(16px)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(255, 105, 180, 0.15)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  };

  const linkStyle = {
    color: '#9370DB',
    textDecoration: 'none',
    fontSize: '16px',
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: '600',
    transition: 'all 0.3s ease',
    position: 'relative',
    display: 'inline-block',
  };

  const headingStyle = {
    fontSize: '20px',
    marginBottom: '15px',
    color: '#9370DB',
    fontFamily: "'Playfair Display', serif",
    fontWeight: '600',
    position: 'relative',
    display: 'inline-block'
  };

  const headingAfter = {
    content: '""',
    position: 'absolute',
    bottom: '-5px',
    left: '0',
    width: '40px',
    height: '3px',
    background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
    borderRadius: '2px'
  };

  return (
    <footer style={{
      ...glassStyle,
      padding: '40px 20px',
      marginTop: '50px',
      color: '#555',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(255, 105, 180, 0.1), rgba(147, 112, 219, 0.1))',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-70px',
        left: '-70px',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(147, 112, 219, 0.1), rgba(255, 105, 180, 0.1))',
        zIndex: 0
      }}></div>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Brand Info */}
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ 
            ...headingStyle,
            fontSize: '28px',
            marginBottom: '10px'
          }}>
            CheckIn Stays
          </h3>
          <div style={{ 
            width: '80px', 
            height: '3px', 
            background: 'linear-gradient(45deg, #FF69B4, #9370DB)', 
            margin: '0 auto 20px',
            borderRadius: '2px'
          }}></div>
          <p style={{ 
            fontSize: '16px', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Your premium accommodation destination in Nairobi and Thika. Experience comfort, elegance, and exceptional hospitality.
          </p>
        </div>
        
        {/* Links Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px'
        }}>
          
          {/* Quick Links */}
          <div>
            <h3 style={{ ...headingStyle }}>
              Quick Links
              <span style={headingAfter}></span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link 
                to="/" 
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = '#FF69B4';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#9370DB';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                Home
              </Link>
              <Link 
                to="/accommodation" 
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = '#FF69B4';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#9370DB';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                Rooms
              </Link>
              <Link 
                to="/offers" 
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = '#FF69B4';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#9370DB';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                Offers
              </Link>
              <Link 
                to="/menu" 
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = '#FF69B4';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#9370DB';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                Menu
              </Link>
            </div>
          </div>
          
          {/* More Links */}
          <div>
            <h3 style={{ ...headingStyle }}>
              Explore
              <span style={headingAfter}></span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link 
                to="/gallery" 
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = '#FF69B4';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#9370DB';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                Gallery
              </Link>
              <Link 
                to="/about" 
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = '#FF69B4';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#9370DB';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                About
              </Link>
              <Link 
                to="/location" 
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = '#FF69B4';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#9370DB';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                Location
              </Link>
              <Link 
                to="/contact" 
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = '#FF69B4';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#9370DB';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        
          {/* Contact Info */}
          <div>
            <h3 style={{ ...headingStyle }}>
              Contact Us
              <span style={headingAfter}></span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a 
                href={`tel:${phoneNumber}`} 
                style={{
                  ...linkStyle,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#FF69B4';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#9370DB';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                <span>📞</span> {phoneNumber}
              </a>
              <a 
                href={`mailto:${emailAddress}`} 
                style={{
                  ...linkStyle,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#FF69B4';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#9370DB';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                <span>✉️</span> {emailAddress}
              </a>
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  ...linkStyle,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#FF69B4';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#9370DB';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                <span>💬</span> WhatsApp
              </a>
            </div>
          </div>
          
          {/* Locations */}
          <div>
            <h3 style={{ ...headingStyle }}>
              Our Locations
              <span style={headingAfter}></span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a 
                href="https://maps.app.goo.gl/PrzcedkJXQSksjRu7?g_st=ipc" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  ...linkStyle,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#FF69B4';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#9370DB';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                <span>📍</span> Fedha (Amana Heights)
              </a>
              <a 
                href="https://maps.google.com/?q=-1.044600,37.094864" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  ...linkStyle,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#FF69B4';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#9370DB';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                <span>📍</span> Thika (Pilot Estate)
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div style={{
        textAlign: 'center',
        marginTop: '40px',
        paddingTop: '25px',
        borderTop: '1px solid rgba(255, 105, 180, 0.2)',
        fontSize: '14px',
        position: 'relative',
        zIndex: 1
      }}>
        <p style={{ marginBottom: '10px' }}>© {currentYear} CheckIn Stays. All rights reserved.</p>
        <p>
          Powered by{" "}
          <a 
            href={echobuizLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              color: '#9370DB', 
              textDecoration: 'none', 
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#FF69B4';
              e.target.style.textDecoration = 'underline';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#9370DB';
              e.target.style.textDecoration = 'none';
            }}
          >
            Echobuiz (Kim)
          </a>
        </p>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Nunito+Sans:wght@400;600;700&display=swap');
      `}</style>
    </footer>
  );
};

export default Footer;