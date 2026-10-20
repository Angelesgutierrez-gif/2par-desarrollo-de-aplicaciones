import React from 'react';
import HeroIllustration from '../components/HeroIllustration';
import OnboardingCTA from '../components/OnboardingCTA';

export const OnboardingPage = () => {
  return (
    <div style={{ backgroundColor: '#000000', color: '#FFFFFF', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <header style={{ padding: '16px 24px 0 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
          <span>09:41</span>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        <div style={{ fontSize: '32px', fontWeight: '800', marginTop: '8px' }}>
          Crypt<span style={{ color: '#6C5CE7' }}>X</span>
        </div>
      </header>

      <HeroIllustration 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png" 
        alt="CryptX 3D Graphic" 
      />

      <OnboardingCTA
        title="Jump start your crypto portfolio"
        subtitle="Take your investment portfolio to next level"
        buttonText="Get Started"
      />
    </div>
  );
};

export default OnboardingPage;
