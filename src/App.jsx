import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Research from './components/Research';
import Achievements from './components/Achievements';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Ambient animated background */}
      <div className="ambient-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <div className="app-container">
        <Header />
        <main>
          <Hero />
          <Education />
          <Research />
          <Achievements />
          <Interests />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
