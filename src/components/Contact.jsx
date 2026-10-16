import React, { useState } from 'react';
import { personalInfo } from '../data';

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
    <section id="contact" className="section broadsheet-section contact-section slide-up">
      <div className="container">
        <div className="section-header-block">
          <h2 className="section-title">Contact & Links</h2>
          <div className="broadsheet-section-divider"></div>
        </div>

        <div className="broadsheet-contact-grid">
          <div className="broadsheet-contact-emails">
            {emailList.map((item, idx) => (
              <div key={idx} className="broadsheet-email-row">
                <span className="fact-label">{item.label}</span>
                <div className="broadsheet-email-line">
                  <a href={`mailto:${item.address}`} className="email-address-link">
                    {item.address}
                  </a>
                  <button
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

          <div className="broadsheet-contact-profiles">
            <span className="fact-label">Profiles & Documents</span>
            <div className="broadsheet-profile-links">
              <a href={personalInfo.cv} target="_blank" rel="noreferrer" className="broadsheet-profile-link">
                Curriculum Vitae (PDF) ↗
              </a>
              {personalInfo.orcid && (
                <a href={personalInfo.orcid} target="_blank" rel="noreferrer" className="broadsheet-profile-link">
                  ORCID (0009-0000-7044-8781) ↗
                </a>
              )}
              {personalInfo.github && (
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="broadsheet-profile-link">
                  GitHub ↗
                </a>
              )}
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="broadsheet-profile-link">
                  LinkedIn ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
