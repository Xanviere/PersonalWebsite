import React from 'react';
import { education } from '../data';

export default function Education() {
  if (!education || education.length === 0) return null;
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="card-list">
          {education.map(edu => (
            <div key={edu.id} className="minimal-card">
              <div className="card-header">
                <h3 className="card-title">{edu.degree}</h3>
                <div className="card-meta">{edu.duration}</div>
              </div>
              <div className="card-subtitle">{edu.institution}</div>
              <p className="card-text">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
