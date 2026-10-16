import React from 'react';
import { education } from '../data';

export default function Education() {
  if (!education || education.length === 0) return null;
  return (
    <section id="education" className="section broadsheet-section slide-up">
      <div className="container">
        <div className="section-header-block">
          <h2 className="section-title">Education & Honors</h2>
          <div className="broadsheet-section-divider"></div>
        </div>

        <div className="broadsheet-academic-list">
          {education.map(edu => (
            <div key={edu.id} className="broadsheet-entry">
              <div className="broadsheet-entry-header">
                <div>
                  <h3 className="broadsheet-entry-title">{edu.degree}</h3>
                  <div className="broadsheet-entry-sub">{edu.institution}</div>
                </div>
                <div className="broadsheet-entry-meta">
                  <span className="broadsheet-year">{edu.duration}</span>
                  {edu.gpa && (
                    <span className="broadsheet-gpa-badge">
                      CGPA {edu.gpa}
                    </span>
                  )}
                  {edu.rank && (
                    <span className="broadsheet-gpa-badge">
                      {edu.rank}
                    </span>
                  )}
                </div>
              </div>
              {edu.honors && (
                <p className="broadsheet-entry-body">{edu.honors}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
