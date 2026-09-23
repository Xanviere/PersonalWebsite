import React from 'react';
import { personalInfo } from '../data';

export default function Contact() {
  const cleanEmail = personalInfo.email.replace('mailto:', '');
  const mailtoUrl = personalInfo.email.startsWith('mailto:') ? personalInfo.email : `mailto:${personalInfo.email}`;

  return (
    <section id="contact" className="section contact-section slide-up">
      <div className="container">
        <h2 className="section-title">Get in touch</h2>
        <div className="contact-grid">
          <div className="contact-main">
            <p className="card-text contact-description">
              I'm always open to new collaborations, interesting problems, and friendly conversations about machine learning, bandits, gene expression networks, and theoretical computer science. Whether you want to discuss a paper, look over a research draft, or explore a joint project, I'd love to connect.
            </p>
            <div className="contact-actions">
              <a href={mailtoUrl} className="btn btn-primary">
                Email Me
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="contact-aside">
            <span className="contact-label">Direct Contact</span>
            <a 
              href={mailtoUrl}
              className="contact-email-link"
            >
              {cleanEmail}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
