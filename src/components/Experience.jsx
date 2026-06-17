import React from 'react';
import { experience } from '../data';

export default function Experience() {
  if (!experience) return null;
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience & Research</h2>
        <div className="experience-list">
          {experience.map(exp => (
            <div key={exp.id} className="glass-card">
              <div className="card-header">
                <div>
                  <h3 className="card-title">{exp.title}</h3>
                  <div className="card-subtitle">{exp.venue}</div>
                </div>
                <div className="card-meta">{exp.duration}</div>
              </div>
              <p className="card-text">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
