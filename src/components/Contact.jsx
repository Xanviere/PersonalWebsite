import React from 'react';
import { personalInfo } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="section slide-up" style={{ paddingBottom: '20px' }}>
      <div className="container">
        <h2 className="section-title">Get in touch</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 400px' }}>
            <p className="card-text" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              I'm always open to new collaborations, interesting problems, and friendly conversations about machine learning, gene expression, and theoretical computer science. Whether you want to talk about a paper, look over a research draft, or just build something cool together, I'd love to connect.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={personalInfo.email.startsWith('mailto:') ? personalInfo.email : `mailto:${personalInfo.email}`} className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
                Email Me
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.75rem 2rem' }}>
                LinkedIn
              </a>
            </div>
          </div>
          
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
             <div>
                <span style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.25rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Direct Contact
                </span>
                <a 
                  href={personalInfo.email.startsWith('mailto:') ? personalInfo.email : `mailto:${personalInfo.email}`}
                  style={{ 
                    fontSize: '1.5rem', 
                    color: 'var(--text-main)', 
                    fontFamily: 'var(--font-serif)',
                    fontWeight: '500',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                >
                  {personalInfo.email.replace('mailto:', '')}
                </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
