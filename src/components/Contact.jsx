import React, { useState } from 'react';
import { personalInfo } from '../data';

/**
 * Clean academic contact and external profiles aligned with the monograph layout.
 */
export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(null);

  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const emailList = [
    {
      label: "Primary Email",
      address: personalInfo.email,
    },
    {
      label: "Institutional Email (VIT)",
      address: personalInfo.institutionalEmail,
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="monograph-section-grid">
          <div className="monograph-rail">
            <h2 className="section-title">Contact & Links</h2>
          </div>

          <div className="monograph-content">
            <div className="contact-columns">
              <div className="contact-emails">
                {emailList.map((item, idx) => (
                  <div key={idx} className="contact-row">
                    <span className="contact-label">{item.label}</span>
                    <div className="contact-email-line">
                      <a href={`mailto:${item.address}`} className="email-address-link">
                        {item.address}
                      </a>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(item.address)}
                        className="copy-inline-btn"
                        title="Copy email address"
                      >
                        {copiedEmail === item.address ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-profiles">
                <span className="contact-label">Profiles & Documents</span>
                <div className="profile-links">
                  <a href={personalInfo.cv} target="_blank" rel="noreferrer" className="profile-link">
                    Curriculum Vitae (PDF)
                  </a>
                  {personalInfo.orcid && (
                    <a href={personalInfo.orcid} target="_blank" rel="noreferrer" className="profile-link">
                      ORCID (0009-0000-7044-8781)
                    </a>
                  )}
                  {personalInfo.github && (
                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="profile-link">
                      GitHub
                    </a>
                  )}
                  {personalInfo.linkedin && (
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="profile-link">
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
