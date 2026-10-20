import React from 'react';

export const HeroIllustration = ({ src, alt = "CryptX Hero Graphic" }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto 0', padding: '24px 0', width: '100%' }}>
      <div style={{ width: '280px', height: '280px' }}>
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
    </div>
  );
};

export default HeroIllustration;
