import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Research from './components/Research';
import Achievements from './components/Achievements';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';

import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check system preference or local storage on load (default to dark if preferred)
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <AnimatedBackground theme={theme} />
      <div className="grid-overlay"></div>
      
      <div className="app-container">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <Education />
          <Research />
          <Achievements />
          <Interests />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
