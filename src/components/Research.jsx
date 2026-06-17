import React from 'react';
import { research } from '../data';

export default function Research() {
  if (!research || research.length === 0) return null;
  return (
    <section id="research" className="section">
      <div className="container">
        <h2 className="section-title">Research</h2>
        <div className="card-list">
          {research.map(item => (
            <div key={item.id} className="minimal-card">
              <div className="card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <h3 className="card-title">
                    {item.link && item.link !== '#' ? (
                      <a href={item.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                        {item.topic || item.title || 'Research Project'}
                      </a>
                    ) : (
                      item.topic || item.title || 'Research Project'
                    )}
                  </h3>
                  {item.status && (
                    <a href={item.link && item.link !== '#' ? item.link : '#'} target={item.link && item.link !== '#' ? '_blank' : '_self'} rel="noreferrer" style={{
                      fontSize: '0.75rem',
                      padding: '0.15rem 0.5rem',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      color: 'var(--text-muted)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      textDecoration: 'none'
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      {item.status}
                    </a>
                  )}
                </div>
                <div className="card-meta">{item.duration}</div>
              </div>
              {item.pi && <div className="pi-tag" style={{marginTop: '0.5rem'}}>Under the guidance of {item.pi}</div>}
              <p className="card-text">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
