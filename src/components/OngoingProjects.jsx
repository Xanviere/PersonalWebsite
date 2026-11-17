import React from 'react';
import { ongoingProjects } from '../data';

/**
 * Displays active and ongoing research projects separately from published/submitted manuscripts.
 */
export default function OngoingProjects() {
  if (!ongoingProjects || ongoingProjects.length === 0) return null;

  return (
    <section id="projects" className="section broadsheet-section slide-up">
      <div className="container">
        <div className="section-header-block">
          <div className="broadsheet-header-split">
            <h2 className="section-title">Ongoing Projects</h2>
          </div>
          <div className="broadsheet-section-divider"></div>
        </div>

        <div className="broadsheet-academic-list">
          {ongoingProjects.map(project => (
            <article key={project.id} className="broadsheet-entry">
              <div className="broadsheet-entry-header">
                <div>
                  <h3 className="broadsheet-entry-title">{project.title}</h3>
                  {(project.advisor || project.domain) && (
                    <div className="broadsheet-entry-sub">
                      {project.advisor && <span>Advised by {project.advisor}</span>}
                      {project.advisor && project.domain && <span> · </span>}
                      {project.domain && <span>{project.domain}</span>}
                    </div>
                  )}
                </div>
                {project.duration && (
                  <div className="broadsheet-entry-meta">
                    <span className="broadsheet-year">{project.duration}</span>
                  </div>
                )}
              </div>

              {project.description && (
                <p className="broadsheet-entry-body">{project.description}</p>
              )}

              {project.links && project.links.length > 0 && (
                <div className="paper-links">
                  {project.links.map((pLink, idx) => (
                    <a
                      key={idx}
                      href={pLink.url}
                      target="_blank"
                      rel="noreferrer"
                      className="paper-btn secondary-paper-btn"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      <span>{pLink.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
