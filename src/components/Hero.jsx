import React from 'react';
import { personalInfo } from '../data';

/**
 * Top academic masthead with biography, action links, and a compact summary definition list.
 */
export default function Hero() {
  return (
    <section id="about" className="section masthead-section">
      <div className="container">
        <div className="masthead-header">
          <h1 className="masthead-name">{personalInfo.name}</h1>
          <p className="masthead-role">
            Undergraduate Researcher in Theoretical Computer Science · {personalInfo.university}
          </p>
        </div>

        <div className="masthead-rule"></div>

        <div className="masthead-grid">
          <div className="masthead-bio">
            <div className="masthead-about">
              {personalInfo.about.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="masthead-actions">
              <a href={personalInfo.cv} target="_blank" rel="noreferrer" className="btn btn-primary">
                Curriculum Vitae (PDF)
              </a>
              <div className="masthead-inline-links">
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                <span aria-hidden="true">·</span>
                <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
                <span aria-hidden="true">·</span>
                <a href={personalInfo.orcid} target="_blank" rel="noreferrer">ORCID</a>
                <span aria-hidden="true">·</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>

          <aside className="masthead-summary" aria-label="Academic Summary">
            <dl className="masthead-dl">
              <div className="masthead-dl-row">
                <dt>Research Focus</dt>
                <dd>Online Learning (Multi-Armed Bandits, MDPs), Stochastic Optimization, Systems & Computational Biology</dd>
              </div>
              <div className="masthead-dl-row">
                <dt>Degree</dt>
                <dd>B.Tech. CSE (Bioinformatics), VIT (2023 – 2027)</dd>
              </div>
              <div className="masthead-dl-row">
                <dt>Academic Standing</dt>
                <dd className="tabular-meta">CGPA 9.1 / 10.0 · Ranked 6th / 148</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
