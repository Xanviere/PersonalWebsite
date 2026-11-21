import React from 'react';
import { education } from '../data';

/**
 * Monograph-style two-column listing of academic degrees and honors.
 */
export default function Education() {
  if (!education || education.length === 0) return null;

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="monograph-section-grid">
          <div className="monograph-rail">
            <h2 className="section-title">Education & Honors</h2>
          </div>

          <div className="monograph-content">
            <div className="monograph-list">
              {education.map(edu => {
                const metaParts = [edu.duration];
                if (edu.gpa) metaParts.push(`CGPA ${edu.gpa}`);
                if (edu.rank) metaParts.push(edu.rank);

                return (
                  <div key={edu.id} className="entry-item">
                    <div className="entry-header">
                      <div>
                        <h3 className="entry-title">{edu.degree}</h3>
                        <div className="entry-sub">{edu.institution}</div>
                      </div>
                      <span className="entry-duration tabular-meta">
                        {metaParts.filter(Boolean).join(' · ')}
                      </span>
                    </div>
                    {edu.honors && (
                      <p className="entry-body">{edu.honors}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
