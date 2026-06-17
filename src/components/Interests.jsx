import React from 'react';
import SpotlightCard from './SpotlightCard';
import { interests } from '../data';

export default function Interests() {
  if (!interests || interests.length === 0) return null;
  return (
    <section id="interests" className="section slide-up">
      <div className="container">
        <h2 className="section-title">Research Interests</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
          gridAutoFlow: 'dense'
        }}>
          {interests.map((interest, index) => (
            <SpotlightCard 
              key={index} 
              className="bento-item"
            >
              <div style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontFamily: 'var(--font-sans)',
                fontWeight: '500',
                color: 'var(--text-main)',
                minHeight: '80px'
              }}>
                {interest}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
