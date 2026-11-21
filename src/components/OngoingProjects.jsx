import React from 'react';
import { ongoingProjects } from '../data';

/**
 * Monograph-style two-column listing of active and ongoing research projects.
 */
export default function OngoingProjects() {
  if (!ongoingProjects || ongoingProjects.length === 0) return null;

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="monograph-section-grid">
          <div className="monograph-rail">
            <h2 className="section-title">Ongoing Projects</h2>
          </div>

          <div className="monograph-content">
            <div className="monograph-list">
              {ongoingProjects.map(project => (
                <article key={project.id} className="entry-item">
                  <div className="entry-header">
                    <div>
                      <h3 className="entry-title">{project.title}</h3>
                      {(project.advisor || project.domain) && (
                        <div className="entry-sub">
                          {project.advisor && <span>Advised by {project.advisor}</span>}
                          {project.advisor && project.domain && <span className="meta-sep" aria-hidden="true"> · </span>}
                          {project.domain && <span>{project.domain}</span>}
                        </div>
                      )}
                    </div>
                    {project.duration && (
                      <span className="entry-duration tabular-meta">{project.duration}</span>
                    )}
                  </div>

                  {project.description && (
                    <p className="entry-body">{project.description}</p>
                  )}

                  {project.links && project.links.length > 0 && (
                    <div className="paper-actions">
                      {project.links.map((pLink, idx) => (
                        <a
                          key={idx}
                          href={pLink.url}
                          target="_blank"
                          rel="noreferrer"
                          className="paper-link-btn secondary-link-btn"
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
