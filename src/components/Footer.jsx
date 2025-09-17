import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const phoneNumber = "0782614845";
  const emailAddress = "echoworld191@gmail.com";
  const whatsappLink = `https://wa.me/254782614845?text=Hi! I'm interested in booking a stay with Check in Airbnb.`;
  const echobuizLink = `https://wa.me/254782614845?text=Hi%20Echobuiz!%20I%20saw%20your%20website%20services%20👋`;
  const currentYear = new Date().getFullYear();

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
  };

  return (
    <footer style={{
      ...glassStyle,
      padding: '30px 20px',
      marginTop: '50px',
      color: '#fff'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        {/* Brand Info */}
        <div>
          <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Check in Airbnb</h3>
          <p style={{ fontSize: '16px' }}>
            Your premium accommodation destination in Nairobi and Thika.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>Quick Links</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Home</Link>
            <Link to="/accommodation" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Rooms</Link>
            <Link to="/offers" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Offers</Link>
            <Link to="/gallery" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Gallery</Link>
            <Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>About</Link>
            <Link to="/location" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Location</Link>
            <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Contact</Link>
          </div>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>Contact Us</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href={`tel:${phoneNumber}`} style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>
              📞 {phoneNumber}
            </a>
            <a href={`mailto:${emailAddress}`} style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>
              ✉️ {emailAddress}
            </a>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
        
        {/* Locations */}
        <div>
          <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>Our Locations</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a 
              href="https://maps.app.goo.gl/PrzcedkJXQSksjRu7?g_st=ipc" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}
            >
              📍 Fedha (Amana Heights)
            </a>
            <a 
              href="https://maps.google.com/?q=-1.044600,37.094864" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}
            >
              📍 Thika (Pilot Estate)
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div style={{
        textAlign: 'center',
        marginTop: '30px',
        paddingTop: '20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        fontSize: '14px'
      }}>
        <p>© {currentYear} Check in Airbnb. All rights reserved.</p>
        <p>
          Powered by{" "}
          <a 
            href={echobuizLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4facfe', textDecoration: 'none', fontWeight: 'bold' }}
          >
            Echobuiz (Kim)
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
