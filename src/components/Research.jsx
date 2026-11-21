import React from 'react';
import { research } from '../data';

/**
 * Converts TeX-style caret exponents (e.g. ^{expr} or ^ν) into superscript elements.
 */
function formatMathText(text) {
  if (!text) return text;
  const parts = text.split(/(\^\{[^}]+\}|\^[νnkv0-9]+)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('^{') && part.endsWith('}')) {
      return <sup key={idx}>{part.slice(2, -1)}</sup>;
    }
    if (part.startsWith('^') && part.length > 1) {
      return <sup key={idx}>{part.slice(1)}</sup>;
    }
    return part;
  });
}

/**
 * Monograph-style two-column listing of publications and preprints.
 */
export default function Research() {
  if (!research || research.length === 0) return null;

  return (
    <section id="research" className="section">
      <div className="container">
        <div className="monograph-section-grid">
          <div className="monograph-rail">
            <h2 className="section-title">Publications & Preprints</h2>
          </div>

          <div className="monograph-content">
            <div className="monograph-list">
              {research.map(item => (
                <article key={item.id} className="paper-item">
                  <div className="paper-meta-line">
                    <div className="paper-venue-status">
                      {item.venue && <span className="paper-venue">{item.venue}</span>}
                      {item.venue && item.status && <span className="meta-sep" aria-hidden="true">·</span>}
                      {item.status && (
                        <span className="paper-status">
                          {item.status}
                          {item.statusNote ? ` (${item.statusNote})` : ''}
                        </span>
                      )}
                    </div>
                    <span className="paper-year tabular-meta">{item.duration}</span>
                  </div>

                  <h3 className="paper-title">
                    {item.link && item.link !== '#' ? (
                      <a href={item.link} target="_blank" rel="noreferrer" className="paper-title-link">
                        {item.topic || item.title}
                      </a>
                    ) : (
                      item.topic || item.title
                    )}
                  </h3>

                  {item.authors && item.authors.length > 0 && (
                    <div className="paper-authors">
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

                  <p className="paper-abstract">{formatMathText(item.description)}</p>

                  {item.links && item.links.length > 0 && (
                    <div className="paper-actions">
                      {item.links.map((pLink, idx) => (
                        <a
                          key={idx}
                          href={pLink.url}
                          target="_blank"
                          rel="noreferrer"
                          className={`paper-link-btn ${pLink.type === 'pdf' ? 'primary-link-btn' : 'secondary-link-btn'}`}
                        >
                          {pLink.label}
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
