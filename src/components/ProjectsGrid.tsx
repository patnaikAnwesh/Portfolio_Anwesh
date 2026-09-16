import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { Github, ExternalLink, Code, Monitor, Clock, X } from 'lucide-react';

export const ProjectsGrid: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
              <Code className="w-3.5 h-3.5 text-cyan-400" />
              <span>Project Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected <span className="text-gradient-cyan">Projects</span>
            </h2>
          </div>
          
          <p className="text-slate-400 text-sm max-w-md">
            Key software engineering projects spanning shared mobility backends, enterprise banking systems, and automated quality-assurance tooling.
          </p>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`glass-card rounded-2xl p-7 flex flex-col justify-between relative group transition-all duration-300 ${
                project.isPlaceholder ? 'border-dashed border-amber-500/40 bg-amber-950/10' : 'border-slate-800 hover:border-cyan-500/40'
              }`}
            >
              <div>
                
                {/* Badge Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-md bg-slate-900 text-cyan-300 text-xs font-mono border border-slate-800 font-bold uppercase">
                    {project.category}
                  </span>
                  
                  {project.isPlaceholder ? (
                    <span className="px-2.5 py-1 rounded bg-amber-950 text-amber-300 text-xs font-mono border border-amber-500/30 flex items-center gap-1.5 font-bold">
                      <Clock className="w-3.5 h-3.5 animate-spin text-amber-400" /> COMING SOON
                    </span>
                  ) : project.liveUrl ? (
                    <span className="px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-400 text-xs font-mono border border-emerald-500/30 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE DEMO
                    </span>
                  ) : null}
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4">{project.subtitle}</p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>

                {/* Highlights / Metrics */}
                <div className="space-y-2 mb-6 bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Footer Links & Tech Tags */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded bg-slate-900/90 text-slate-300 text-xs font-mono border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                  {project.isPlaceholder ? (
                    <span className="text-xs font-mono text-amber-400 font-medium">
                      Project details & repository link to be added
                    </span>
                  ) : (
                    <>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white font-mono font-medium transition-colors"
                      >
                        <Github className="w-4 h-4 text-slate-400" />
                        <span>Source Code</span>
                      </a>

                      {project.liveUrl && (
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-950/80 text-cyan-300 text-xs font-mono border border-cyan-500/30 hover:bg-cyan-900/60 transition-colors"
                        >
                          <Monitor className="w-3.5 h-3.5" />
                          <span>Live Demo Preview</span>
                        </button>
                      )}
                    </>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Live App Modal / Iframe Viewer */}
        {activeModalProject && activeModalProject.liveUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="glass-panel w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden border border-slate-700 flex flex-col shadow-2xl">
              
              {/* Modal Topbar */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-300 ml-2 font-semibold">
                    {activeModalProject.title} — {activeModalProject.liveUrl}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs text-cyan-400 font-mono hover:underline"
                  >
                    <span>Open in New Tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Iframe */}
              <div className="flex-1 bg-white relative">
                <iframe
                  src={activeModalProject.liveUrl}
                  title={activeModalProject.title}
                  className="w-full h-full border-none"
                />
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
