import React from 'react';
import { research } from '../data';

export default function Research() {
  if (!research || research.length === 0) return null;
  return (
    <section id="research" className="section broadsheet-section slide-up">
      <div className="container">
        <div className="section-header-block">
          <div className="broadsheet-header-split">
            <h2 className="section-title">Research & Preprints</h2>
          </div>
          <div className="broadsheet-section-divider"></div>
        </div>

        <div className="broadsheet-publications-list">
          {research.map(item => {
            const isPublished = item.status && item.status.toLowerCase().includes('published');
            const isUnderReview = item.status && item.status.toLowerCase().includes('review');

            return (
              <article key={item.id} className="broadsheet-paper-entry">
                <div className="broadsheet-paper-top">
                  <div className="paper-venue-tag">
                    <span className={`status-dot ${isPublished ? 'published' : isUnderReview ? 'under-review' : ''}`} />
                    <span className="venue-status">{item.status}</span>
                    {item.statusNote && <span className="venue-note">({item.statusNote})</span>}
                  </div>
                  <span className="broadsheet-paper-year">{item.duration}</span>
                </div>

                <h3 className="broadsheet-paper-title">
                  {item.link && item.link !== '#' ? (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="paper-title-link"
                    >
                      {item.topic || item.title}
                    </a>
                  ) : (
                    item.topic || item.title
                  )}
                </h3>

                {item.authors && item.authors.length > 0 && (
                  <div className="broadsheet-paper-authors">
                    {item.authors.map((author, idx) => (
                      <React.Fragment key={idx}>
                        {author.isSelf ? (
                          <strong className="author-self">{author.name}</strong>
                        ) : (
                          <span className="author-coauthor">
                            {author.name}
                            {author.affiliation && (
                              <span className="author-affiliation"> ({author.affiliation})</span>
                            )}
                          </span>
                        )}
                        {idx < item.authors.length - 1 && ', '}
                      </React.Fragment>
                    ))}
                  </div>
                )}

                {item.venue && (
                  <div className="broadsheet-paper-venue">
                    {item.venue}
                  </div>
                )}

                <p className="broadsheet-paper-description">{item.description}</p>

                {item.links && item.links.length > 0 && (
                  <div className="paper-links">
                    {item.links.map((pLink, idx) => (
                      <a
                        key={idx}
                        href={pLink.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`paper-btn ${pLink.type === 'pdf' ? 'primary-paper-btn' : 'secondary-paper-btn'}`}
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
