import React from 'react';
import { personalInfo, research } from '../data';

export default function Hero() {
  return (
    <section id="about" className="section hero-broadsheet slide-up">
      <div className="container">
        <div className="broadsheet-header-kicker">
          <span className="broadsheet-badge">
            {personalInfo.title}
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

            <div className="broadsheet-hero-actions">
              <a href={personalInfo.cv} target="_blank" rel="noreferrer" className="btn btn-primary">
                Curriculum Vitae (PDF)
              </a>
              <a href="#research" className="btn btn-secondary">
                Research & Preprints
              </a>
              <a href={`mailto:${personalInfo.email}`} className="btn btn-secondary">
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div className="broadsheet-meta-column">
            <div className="broadsheet-quick-facts">
              <div className="quick-facts-heading">Selected Preprints & Work</div>
              {research.map((paper) => (
                <div key={paper.id} className="fact-item">
                  <div className="fact-meta-line">
                    <span className="fact-venue-pill">{paper.shortVenue}</span>
                    <span className="fact-status-text">
                      {paper.statusNote ? 'Rebuttal Stage' : paper.status}
                    </span>
                  </div>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noreferrer"
                    className="fact-paper-title"
                  >
                    {paper.shortTitle || paper.topic}
                  </a>
                  <div className="fact-inline-links">
                    {paper.links.map((l, idx) => (
                      <a
                        key={idx}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="fact-mini-link"
                      >
                        [{l.type === 'pdf' ? 'PDF' : 'OpenReview'}]
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
