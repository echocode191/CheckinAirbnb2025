import React from 'react';

const About = () => {
  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
  };

  return (
    <div style={{ padding: '0 15px' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '30px', textAlign: 'center' }}>About Us</h1>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div style={glassStyle}>
          <div style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Our Story</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '15px' }}>
              Welcome to Check in Airbnb, your premier destination for quality accommodations in Nairobi and Thika. 
              We offer comfortable and affordable stays with modern amenities to make your experience memorable.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
              Our properties are strategically located in Fedha, Thika, and Nyayo Gate B, providing easy access 
              to key destinations while offering a peaceful retreat from the bustling city life.
            </p>
          </div>
        </div>

        <div style={glassStyle}>
          <div style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '22px', marginBottom: '15px', textAlign: 'center' }}>Our Values</h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px'
            }}>
              {[
                { 
                  icon: '🏠', 
                  title: 'Comfort', 
                  description: 'We prioritize your comfort in every aspect of our properties.' 
                },
                { 
                  icon: '🌟', 
                  title: 'Quality', 
                  description: 'We maintain high standards in all our services and facilities.' 
                },
                { 
                  icon: '🤝', 
                  title: 'Hospitality', 
                  description: 'Experience genuine Kenyan warmth and hospitality.' 
                }
              ].map((value, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ fontSize: '36px' }}>{value.icon}</div>
                  <div>
                    <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>{value.title}</h3>
                    <p style={{ fontSize: '14px', lineHeight: '1.4' }}>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={glassStyle}>
          <div style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '22px', marginBottom: '15px', textAlign: 'center' }}>Our Mission</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
              To provide exceptional accommodation experiences that combine comfort, convenience, and affordability. 
              We strive to make every guest feel at home while offering the best value for their money.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;