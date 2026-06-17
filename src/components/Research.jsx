import React from 'react';
import { research } from '../data';

export default function Research() {
  if (!research || research.length === 0) return null;
  return (
    <section id="research" className="section">
      <div className="container">
        <h2 className="section-title">Research</h2>
        <div className="card-list">
          {research.map(item => (
            <div key={item.id} className="minimal-card">
              <div className="card-header">
                {/* Fallback to 'Research Project' if topic is not provided */}
                <h3 className="card-title">{item.topic || item.title || 'Research Project'}</h3>
                <div className="card-meta">{item.duration}</div>
              </div>
              {item.pi && <div className="pi-tag" style={{marginTop: '0.5rem'}}>Under the guidance of {item.pi}</div>}
              <p className="card-text">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
