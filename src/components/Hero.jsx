import React from 'react';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section id="about" className="section hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm {personalInfo.name}.</h1>
          <h2 className="hero-subtitle">{personalInfo.title}</h2>
          <p className="hero-about">{personalInfo.about}</p>
          <div className="hero-links">
            <a href={personalInfo.email.startsWith('mailto:') ? personalInfo.email : `mailto:${personalInfo.email}`} className="btn btn-primary">Get in Touch</a>
            <a href={personalInfo.cv} target="_blank" rel="noreferrer" className="btn btn-secondary">View Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}
