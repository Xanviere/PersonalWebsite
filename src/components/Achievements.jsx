import React from 'react';
import { achievements } from '../data';

export default function Achievements() {
  if (!achievements || achievements.length === 0) return null;
  return (
    <section id="achievements" className="section broadsheet-section slide-up">
      <div className="container">
        <div className="section-header-block">
          <h2 className="section-title">Honors & Awards</h2>
          <div className="broadsheet-section-divider"></div>
        </div>

        <div className="broadsheet-academic-list">
          {achievements.map((item) => (
            <div key={item.id} className="broadsheet-entry">
              <div className="broadsheet-entry-header">
                <div>
                  <h3 className="broadsheet-entry-title">{item.title}</h3>
                  <div className="broadsheet-entry-sub">{item.organization}</div>
                </div>
                <div className="broadsheet-entry-meta">
                  <span className="broadsheet-year">{item.year}</span>
                </div>
              </div>
              <p className="broadsheet-entry-body">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
