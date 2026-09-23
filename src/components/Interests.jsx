import React from 'react';
import SpotlightCard from './SpotlightCard';
import { interests } from '../data';

export default function Interests() {
  if (!interests || interests.length === 0) return null;
  return (
    <section id="interests" className="section slide-up">
      <div className="container">
        <div className="section-header-block">
          <h2 className="section-title">Research Focus & Domains</h2>
          <p className="section-subtitle-text">
            Core mathematical fields and biological questions I actively investigate.
          </p>
        </div>

        <div className="interests-grid">
          {interests.map((item, index) => (
            <SpotlightCard 
              key={index} 
              className="interest-card"
            >
              <div className="interest-card-inner">
                <div className="interest-header">
                  <span className="interest-number">0{index + 1}</span>
                  <h3 className="interest-title">{item.title}</h3>
                </div>
                <div className="interest-subtitle">{item.subtitle}</div>
                <p className="interest-description">{item.description}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
