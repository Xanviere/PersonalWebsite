import React from 'react';
import { education } from '../data';

export default function Education() {
  if (!education || education.length === 0) return null;
  return (
    <section id="education" className="section slide-up">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="card-list">
          {education.map(edu => (
            <div key={edu.id} className="minimal-card">
              <div className="card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <h3 className="card-title">{edu.degree}</h3>
                  {edu.gpa && (
                    <span style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      padding: '0.2rem 0.6rem',
                      background: 'var(--accent)',
                      color: 'var(--accent-text)',
                      borderRadius: '6px',
                      display: 'inline-block'
                    }}>
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>
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
