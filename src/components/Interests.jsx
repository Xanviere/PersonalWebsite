import React from 'react';
import { interests } from '../data';

export default function Interests() {
  if (!interests || interests.length === 0) return null;
  return (
    <section id="interests" className="section">
      <div className="container">
        <h2 className="section-title">Research Interests</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {interests.map(interest => (
            <span key={interest} className="pi-tag" style={{ margin: 0, fontSize: '0.95rem' }}>
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
