import React from 'react';
import SpotlightCard from './SpotlightCard';
import { achievements } from '../data';

export default function Achievements() {
  if (!achievements || achievements.length === 0) return null;
  return (
    <section id="achievements" className="section slide-up">
      <div className="container">
        <div className="section-header-block">
          <h2 className="section-title">Honors & Recognition</h2>
          <p className="section-subtitle-text">
            Academic scholarships and institutional recognitions.
          </p>
        </div>

        <div className="honors-list">
          {achievements.map((item) => (
            <SpotlightCard key={item.id} className="honor-card">
              <div className="honor-header">
                <div>
                  <h3 className="card-title honor-title">{item.title}</h3>
                  <div className="honor-org">{item.organization}</div>
                </div>
                <div className="card-meta honor-year">{item.year}</div>
              </div>
              <p className="card-text honor-description">{item.description}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
