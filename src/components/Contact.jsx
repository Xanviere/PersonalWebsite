import React, { useState } from 'react';
import { personalInfo } from '../data';
import SpotlightCard from './SpotlightCard';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(null);

  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const emailList = [
    {
      label: "Permanent / Primary Email",
      address: personalInfo.email,
      note: "Recommended for research collaborations & prospective graduate advising"
    },
    {
      label: "Institutional Email",
      address: personalInfo.institutionalEmail,
      note: "Official university correspondence (VIT)"
    }
  ];

  return (
    <section id="contact" className="section contact-section slide-up">
      <div className="container">
        <div className="section-header-block">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle-text">
            I'm always open to discussing new research problems, reviewing paper drafts, or exploring graduate opportunities.
          </p>
        </div>

        <div className="contact-grid">
          {/* Email Cards */}
          <div className="contact-cards-column">
            {emailList.map((item, idx) => (
              <SpotlightCard key={idx} className="email-spotlight-card">
                <div className="email-card-content">
                  <div className="email-meta-row">
                    <span className="email-card-label">{item.label}</span>
                    <span className="email-card-note">{item.note}</span>
                  </div>

                  <div className="email-display-row">
                    <a 
                      href={`mailto:${item.address}`}
                      className="email-address-link"
                    >
                      {item.address}
                    </a>

                    <div className="email-action-buttons">
                      <button 
                        onClick={() => copyToClipboard(item.address)}
                        className="copy-btn"
                        title="Copy to clipboard"
                        aria-label={`Copy ${item.address} to clipboard`}
                      >
                        {copiedEmail === item.address ? (
                          <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                            <span>Copy</span>
                          </>
                        )}
                      </button>

                      <a 
                        href={`mailto:${item.address}`} 
                        className="mailto-pill"
                        title="Open email client"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                        <span>Send Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* Social / Direct Links Aside */}
          <div className="contact-sidebar-card">
            <SpotlightCard className="sidebar-spotlight">
              <h3 className="sidebar-title">Profiles & Documents</h3>
              <p className="sidebar-text">
                Connect on LinkedIn, inspect code repositories, or view my complete curriculum vitae.
              </p>
              <div className="sidebar-links">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="sidebar-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
                <a 
                  href={personalInfo.cv} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="sidebar-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                  <span>Curriculum Vitae (PDF)</span>
                </a>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
