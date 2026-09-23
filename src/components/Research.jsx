import React from 'react';
import SpotlightCard from './SpotlightCard';
import { research } from '../data';

export default function Research() {
  if (!research || research.length === 0) return null;
  return (
    <section id="research" className="section slide-up">
      <div className="container">
        <h2 className="section-title">Research & Publications</h2>
        <div className="card-list">
          {research.map(item => {
            const isPublished = item.status && item.status.toLowerCase().includes('published');
            const isUnderReview = item.status && item.status.toLowerCase().includes('review');

            return (
              <SpotlightCard key={item.id}>
                <div className="card-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <h3 className="card-title">
                      {item.link && item.link !== '#' ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          style={{ textDecoration: 'none', color: 'inherit' }}
                          onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                          onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                        >
                          {item.topic || item.title || 'Research Project'}
                        </a>
                      ) : (
                        item.topic || item.title || 'Research Project'
                      )}
                    </h3>

                    {item.status && (
                      <span className="status-badge">
                        <span className={`status-dot ${isPublished ? 'published' : isUnderReview ? 'under-review' : ''}`} />
                        <span>{item.status}</span>
                        {item.statusNote && (
                          <span style={{ opacity: 0.7, fontStyle: 'italic', marginLeft: '0.2rem' }}>
                            ({item.statusNote})
                          </span>
                        )}
                      </span>
                    )}
                  </div>
                  <div className="card-meta" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}>
                    {item.duration}
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.6rem', marginBottom: '0.75rem' }}>
                  {item.pi && (
                    <div className="pi-tag" style={{ margin: 0 }}>
                      Under the guidance of {item.pi}
                    </div>
                  )}
                  {item.coauthors && (
                    <div className="pi-tag" style={{ margin: 0, opacity: 0.85 }}>
                      Co-authors: {item.coauthors}
                    </div>
                  )}
                </div>

                <p className="card-text">{item.description}</p>

                {item.links && item.links.length > 0 && (
                  <div className="paper-links">
                    {item.links.map((pLink, idx) => (
                      <a
                        key={idx}
                        href={pLink.url}
                        target="_blank"
                        rel="noreferrer"
                        className="paper-btn"
                      >
                        {pLink.type === 'pdf' ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                          </svg>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        )}
                        <span>{pLink.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
