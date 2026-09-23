import React from 'react';
import { personalInfo, highlights } from '../data';

export default function Hero() {
  return (
    <section id="about" className="section hero slide-up">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-status-row">
            <span className="status-live-indicator">
              <span className="pulse-dot"></span>
              <span>Available for Research Collaborations</span>
            </span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">{personalInfo.name}</span>.
          </h1>

          <p className="hero-tagline">
            {personalInfo.tagline}
          </p>

          {/* Quick Publication Spotlight Pills */}
          <div className="hero-publications-preview">
            {highlights.map((h, i) => (
              <a key={i} href={h.link} className={`hero-pub-tag ${h.badge.toLowerCase().replace(' ', '-')}`}>
                <span className={`hero-pub-dot ${h.badge.toLowerCase().replace(' ', '-')}`}></span>
                <span className="hero-pub-venue">{h.venue}</span>
                <span className="hero-pub-divider">/</span>
                <span className="hero-pub-badge">{h.badge}</span>
              </a>
            ))}
          </div>

          <p className="hero-about">{personalInfo.about}</p>

          <div className="hero-links">
            <a href="#research" className="btn btn-primary">
              View Publications
            </a>
            <a href={personalInfo.cv} target="_blank" rel="noreferrer" className="btn btn-secondary">
              View Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
