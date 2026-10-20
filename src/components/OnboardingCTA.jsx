import React from 'react';

export const OnboardingCTA = ({ title, subtitle, buttonText, onStart }) => {
  const buttonStyle = {
    width: '100%',
    padding: '16px 24px',
    backgroundColor: '#6C5CE7',
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: '16px',
    border: 'none',
    borderRadius: '16px',
    cursor: 'pointer',
    marginTop: '12px'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', padding: '0 24px 32px 24px', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#FFFFFF', margin: 0 }}>
          {title}
        </h1>
        <p style={{ color: '#A0AEC0', fontSize: '15px', margin: 0 }}>
          {subtitle}
        </p>
      </div>

      <button onClick={onStart} style={buttonStyle}>
        {buttonText}
      </button>
    </div>
  );
};

export default OnboardingCTA;
