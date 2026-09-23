import React from 'react';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section id="about" className="section hero slide-up">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-status-row">
            <span className="status-live-indicator">
              <span className="pulse-dot"></span>
              <span>Prospective PhD Applicant · Seeking Graduate Research Opportunities</span>
            </span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">{personalInfo.name}</span>.
          </h1>

          <p className="hero-tagline">
            {personalInfo.tagline}
          </p>

          <p className="hero-about">{personalInfo.about}</p>

          <div className="hero-links">
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
    </section>
  );
}
