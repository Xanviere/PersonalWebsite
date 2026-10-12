import React from 'react';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section id="about" className="section hero-broadsheet slide-up">
      <div className="container">
        <div className="broadsheet-header-kicker">
          <span className="broadsheet-badge">
            <span className="pulse-dot"></span>
            Prospective PhD Applicant · Theoretical Computer Science
          </span>
          <span className="broadsheet-affiliation">{personalInfo.university}</span>
        </div>

        <div className="broadsheet-hero-main">
          <h1 className="broadsheet-name">{personalInfo.name}</h1>
          <p className="broadsheet-tagline">{personalInfo.tagline}</p>
        </div>

        <div className="broadsheet-bio-rule"></div>

        <div className="broadsheet-hero-grid">
          <div className="broadsheet-bio-column">
            <div className="broadsheet-about-text">
              {personalInfo.about.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="broadsheet-meta-column">
            <div className="broadsheet-quick-facts">
              <div className="fact-item">
                <span className="fact-label">Focus</span>
                <span className="fact-value">Theoretical Computer Science</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Status</span>
                <span className="fact-value">3 Peer Manuscripts (1 Published, 2 Under Review)</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Degree</span>
                <span className="fact-value">B.Tech CSE (Bioinformatics), GPA 9.1 / 10.0</span>
              </div>
            </div>

            <div className="broadsheet-hero-actions">
              <a href="#research" className="btn btn-primary">
                View Publications
              </a>
              <a href={personalInfo.cv} target="_blank" rel="noreferrer" className="btn btn-secondary">
                Curriculum Vitae (PDF)
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
