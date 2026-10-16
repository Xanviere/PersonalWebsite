import React from 'react';
import { personalInfo } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-links">
          <a href={personalInfo.cv} target="_blank" rel="noreferrer">CV</a>
          {personalInfo.orcid && (
            <a href={personalInfo.orcid} target="_blank" rel="noreferrer">ORCID</a>
          )}
          {personalInfo.github && (
            <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
          )}
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`}>Email</a>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </div>
      </div>
    </footer>
  );
}
