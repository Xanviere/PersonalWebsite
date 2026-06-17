import React from 'react';
import { projects, interests } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        {projects && projects.length > 0 && (
          <>
            <h2 className="section-title">Projects</h2>
            <div className="projects-list">
              {projects.map(proj => (
                <div key={proj.id} className="glass-card">
                  <div className="card-header">
                    <div>
                      <h3 className="card-title">
                        {proj.link ? <a href={proj.link} target="_blank" rel="noreferrer">{proj.title}</a> : proj.title}
                      </h3>
                    </div>
                    <div className="card-meta">{proj.duration || proj.year}</div>
                  </div>
                  <p className="card-text">{proj.description}</p>
                  {proj.technologies && (
                    <div style={{marginTop: '1rem'}} className="tags-container">
                      {proj.technologies.map(tech => (
                        <span key={tech} className="tag">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {interests && interests.length > 0 && (
          <>
            <h2 className="section-title" style={{ marginTop: '60px' }}>Interests</h2>
            <div className="interests-list">
              {interests.map(interest => (
                <span key={interest} className="tag">{interest}</span>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
