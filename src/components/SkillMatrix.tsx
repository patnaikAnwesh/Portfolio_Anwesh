import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Server, Layout, CheckCircle2, Database, Cpu, Wrench, Sparkles, Layers, Activity, Zap, Check } from 'lucide-react';

const TECH_STREAM = [
  "Java 17+", "Spring Boot 3", "Docker", "Kafka", "Selenium", 
  "Cucumber BDD", "MySQL", "PL/SQL", "GitHub Copilot", "REST APIs", 
  "Context Engineering", "React.js", "TypeScript", "Prompt Design", "Microservices"
];

export const SkillMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Server': return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-purple-400" />;
      case 'CheckCircle': return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-sky-400" />;
      default: return <Wrench className="w-5 h-5 text-slate-400" />;
    }
  };

  const getCategoryColor = (name: string) => {
    switch (name) {
      case 'Server': return 'from-cyan-500/20 to-blue-600/10 border-cyan-500/30 text-cyan-400';
      case 'Layout': return 'from-purple-500/20 to-pink-600/10 border-purple-500/30 text-purple-400';
      case 'CheckCircle': return 'from-emerald-500/20 to-teal-600/10 border-emerald-500/30 text-emerald-400';
      case 'Database': return 'from-amber-500/20 to-orange-600/10 border-amber-500/30 text-amber-400';
      case 'Cpu': return 'from-sky-500/20 to-indigo-600/10 border-sky-500/30 text-sky-400';
      default: return 'from-slate-500/20 to-slate-700/10 border-slate-500/30 text-slate-400';
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  const totalSkillsCount = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#060911]">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-[-150px] w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-150px] w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4 shadow-lg shadow-cyan-950/50">
            <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-cyan">Engineering Tech Stack</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Enterprise backend microservices, SQL query tuning, automated test suites, and AI developer workflows engineered for high-availability systems.
          </p>
        </div>

        {/* Live Tech Stream Marquee Ribbon */}
        <div className="mb-12 relative overflow-hidden py-3 bg-slate-900/40 border-y border-slate-800/80 backdrop-blur-sm">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#060911] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#060911] to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee flex items-center gap-6">
            {[...TECH_STREAM, ...TECH_STREAM].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-xs font-mono text-slate-300 whitespace-nowrap hover:border-cyan-400/50 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="font-semibold text-slate-200">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                : 'glass-panel text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>All Stack</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-white/20 text-white">
              {totalSkillsCount}
            </span>
          </button>

          {SKILL_CATEGORIES.map((cat, idx) => {
            const isSelected = selectedCategory.toLowerCase() === cat.title.toLowerCase();
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat.title)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                    : 'glass-panel text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <span>{cat.title.split(' ')[0]}</span>
                <span className="text-[10px] font-mono opacity-70">({cat.skills.length})</span>
              </button>
            );
          })}
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-cyan-950/30"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-start justify-between gap-3 mb-4 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border bg-gradient-to-br ${getCategoryColor(cat.iconName)}`}>
                      {getIcon(cat.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {cat.title}
                      </h3>
                      {cat.description && (
                        <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                          {cat.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Skill List with Animations */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => {
                    const isHovered = hoveredSkill === `${cat.title}-${skill.name}`;
                    return (
                      <div
                        key={sIdx}
                        onMouseEnter={() => setHoveredSkill(`${cat.title}-${skill.name}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`p-3 rounded-xl transition-all duration-300 border ${
                          skill.highlight
                            ? 'bg-slate-900/80 border-cyan-500/30 hover:border-cyan-400/70 hover:bg-slate-800/80'
                            : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80'
                        } ${isHovered ? 'shadow-md shadow-cyan-500/10 translate-x-1' : ''}`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          
                          {/* Skill Name & Highlight Icon */}
                          <div className="flex items-center gap-2 min-w-0">
                            {skill.highlight ? (
                              <Zap className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 animate-pulse" />
                            ) : (
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0" />
                            )}
                            <span className={`text-xs font-mono truncate ${
                              skill.highlight ? 'text-white font-semibold' : 'text-slate-300'
                            }`}>
                              {skill.name}
                            </span>
                          </div>

                          {/* Interactive Soundwave / Equalizer Animation Visual */}
                          <div className="flex items-end gap-0.5 h-4 px-1.5 py-0.5 rounded bg-slate-950/70 border border-slate-800 flex-shrink-0">
                            <span className="w-0.5 bg-cyan-400 rounded-full animate-soundwave-1" />
                            <span className="w-0.5 bg-sky-400 rounded-full animate-soundwave-2" />
                            <span className="w-0.5 bg-indigo-400 rounded-full animate-soundwave-3" />
                            <span className="w-0.5 bg-purple-400 rounded-full animate-soundwave-4" />
                          </div>

                        </div>

                        {/* Badges & Context Row */}
                        <div className="mt-2 flex items-center justify-between gap-2 text-[10px] font-mono">
                          {skill.badge && (
                            <span className={`px-2 py-0.5 rounded-md border ${
                              skill.highlight
                                ? 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300 font-semibold'
                                : 'bg-slate-800 border-slate-700 text-slate-400'
                            }`}>
                              {skill.badge}
                            </span>
                          )}
                          {skill.context && (
                            <span className="text-slate-400 truncate text-[10px]">
                              {skill.context}
                            </span>
                          )}
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer Indicator */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{cat.skills.filter(s => s.highlight).length} Core Components</span>
                </div>
                <span className="text-slate-500">{cat.skills.length} Stack Items</span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Competencies HUD Strip */}
        <div className="mt-12 glass-panel p-5 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-around gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>High-Throughput Banking Microservices</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Automated Cucumber BDD Suites</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span>AI Context & Prompt Engineering</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>SQL / PL-SQL Execution Plan Tuning</span>
          </div>
        </div>

      </div>
    </section>
  );
};
