import React from 'react';
import { interests } from '../data';

export default function Interests() {
  if (!interests || interests.length === 0) return null;
  return (
    <section id="interests" className="section broadsheet-section slide-up">
      <div className="container">
        <div className="section-header-block">
          <h2 className="section-title">Research Focus & Theoretical Domains</h2>
          <p className="section-subtitle-text">
            Core mathematical fields, optimization questions, and dynamical systems I actively investigate.
          </p>
          <div className="broadsheet-section-divider"></div>
        </div>

        <div className="broadsheet-domains-grid">
          {interests.map((item, index) => (
            <div key={index} className="broadsheet-domain-block">
              <div className="broadsheet-domain-head">
                <span className="broadsheet-domain-subtitle">{item.subtitle}</span>
                <h3 className="broadsheet-domain-title">{item.title}</h3>
              </div>
              <p className="broadsheet-domain-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
