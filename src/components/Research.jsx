import React from 'react';
import { research } from '../data';

export default function Research() {
  if (!research || research.length === 0) return null;
  return (
    <section id="research" className="section">
      <div className="container">
        <h2 className="section-title">Research Experience</h2>
        <div className="card-list">
          {research.map(item => (
            <div key={item.id} className="minimal-card">
              <div className="card-header">
                <h3 className="card-title">{item.role}</h3>
                <div className="card-meta">{item.duration}</div>
              </div>
              <div className="card-subtitle">{item.lab}</div>
              {item.pi && <div className="pi-tag">Advisor: {item.pi}</div>}
              <p className="card-text">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
