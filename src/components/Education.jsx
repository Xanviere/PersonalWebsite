import React from 'react';
import SpotlightCard from './SpotlightCard';
import { education } from '../data';

export default function Education() {
  if (!education || education.length === 0) return null;
  return (
    <section id="education" className="section slide-up">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="card-list">
          {education.map(edu => (
            <SpotlightCard key={edu.id}>
              <div className="card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <h3 className="card-title">{edu.degree}</h3>
                  {edu.gpa && (
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      padding: '0.15rem 0.5rem',
                      background: 'var(--text-main)',
                      color: 'var(--bg)',
                      borderRadius: '4px',
                      display: 'inline-block',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>
                <div className="card-meta" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}>{edu.duration}</div>
              </div>
              <div className="card-subtitle" style={{ fontFamily: 'var(--font-sans)' }}>{edu.institution}</div>
              <p className="card-text">{edu.details}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
