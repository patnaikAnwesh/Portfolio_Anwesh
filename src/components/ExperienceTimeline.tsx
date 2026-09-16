import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, TrendingUp, Cpu, Sparkles } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 mb-4">
              <Briefcase className="w-3.5 h-3.5 text-purple-400" />
              <span>Professional Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Work <span className="text-gradient-purple">Experience</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Hands-on engineering experience in enterprise microservices, fraud monitoring, automated testing, and agentic AI.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-10 border border-slate-800 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
            >
              {/* Background gradient accent */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-all" />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
                      Current Role
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-lg font-semibold text-cyan-400 mt-1 flex items-center gap-2">
                    <span>{exp.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 text-sm font-normal flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Impact Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 min-w-[320px]">
                  {exp.impactMetrics.map((metric, mIdx) => (
                    <div key={mIdx} className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-center">
                      <div className="text-lg font-extrabold text-white font-mono text-gradient-cyan">
                        {metric.value}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 font-medium leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Summary & Bullets */}
              <div className="mt-8">
                <p className="text-slate-300 text-base leading-relaxed mb-6 font-sans">
                  {exp.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:bg-slate-900/80 transition-colors">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Technologies & Frameworks Utilized:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-slate-900 text-slate-200 text-xs font-mono border border-slate-800 hover:border-cyan-500/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
