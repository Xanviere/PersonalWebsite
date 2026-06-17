import React from 'react';
import { personalInfo } from '../data';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="#" className="logo">{personalInfo?.name || "Portfolio"}</a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#research">Research</a>
          <a href="#achievements">Achievements</a>
          <a href="#interests">Interests</a>
        </nav>
      </div>
    </header>
  );
}
