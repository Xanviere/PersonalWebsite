import React from 'react';
import { personalInfo } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-links">
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={personalInfo.email.startsWith('mailto:') ? personalInfo.email : `mailto:${personalInfo.email}`}>Email</a>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} {personalInfo.name}. Built with React & Vite.
        </div>
      </div>
    </footer>
  );
}
