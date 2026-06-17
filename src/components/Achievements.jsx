import React from 'react';
import { achievements } from '../data';

export default function Achievements() {
  if (!achievements || achievements.length === 0) return null;
  return (
    <section id="achievements" className="section slide-up">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-timeline">
          {achievements.map((item, index) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index !== achievements.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-content minimal-card">
                <div className="card-header">
                  <h3 className="card-title">{item.title}</h3>
                  <div className="card-meta">{item.year}</div>
                </div>
                <div className="card-subtitle">{item.organization}</div>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
