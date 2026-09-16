import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, FileText, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [textIndex, setTextIndex] = useState(0);
  const roles = [
    "Java Backend Developer & Quality Specialist",
    "Enterprise Banking Application Developer",
    "REST API & Database Optimization Engineer",
    "Selenium & Cucumber BDD Automation Engineer",
    "Prompt & Context Engineer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      
      {/* Glow Orbs background */}
      <div className="glow-orb w-[500px] h-[500px] bg-cyan-500 top-[-100px] left-[-100px] animate-pulse-glow" />
      <div className="glow-orb w-[450px] h-[450px] bg-purple-600 top-[200px] right-[-100px] animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-cyan-500/20 mb-8 shadow-lg shadow-cyan-950/40">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono text-cyan-300 font-semibold tracking-wide uppercase">
            TCS Backend Developer & Quality Specialist
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-xs text-slate-300 font-sans font-medium">Enterprise Banking Fraud Detection</span>
        </div>

        {/* Hero Main Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Hi, I'm <span className="text-gradient-cyan">Anwesh Patnaik</span>
          </h1>

          {/* Typing Role */}
          <div className="h-14 sm:h-16 flex items-center mt-3">
            <p className="text-xl sm:text-3xl font-mono text-slate-300 flex items-center gap-2">
              <span className="text-cyan-400 font-bold">&gt;</span>
              <span className="transition-all duration-500 ease-in-out text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300">
                {roles[textIndex]}
              </span>
              <span className="w-2.5 h-7 bg-cyan-400 animate-pulse ml-1 inline-block" />
            </p>
          </div>

          {/* Bio text */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-sans">
            Experienced in engineering robust backend services and transaction logic with 
            <strong className="text-cyan-300 font-semibold"> Java, Spring Boot, REST APIs, MySQL/PL-SQL</strong>, and rule-based fraud detection engines at TCS for a large enterprise banking platform. 
            Proficient in <strong className="text-purple-300 font-semibold">prompt and context engineering</strong> using AI developer tools and test automation with Selenium & Cucumber BDD.
          </p>

          {/* CTAs & Social Links */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 shadow-xl shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white glass-panel hover:bg-slate-800/80 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Resume</span>
            </button>

            <button
              onClick={onOpenTerminal}
              className="px-5 py-3.5 rounded-xl font-mono text-xs text-cyan-300 glass-panel border border-cyan-500/30 hover:bg-cyan-950/40 transition-all flex items-center gap-2"
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Dev CLI Mode</span>
            </button>

            {/* Quick Links */}
            <div className="flex items-center gap-2 ml-auto sm:ml-0 pt-2 sm:pt-0">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 text-slate-400 hover:text-white glass-panel rounded-xl hover:border-cyan-500/50 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 text-slate-400 hover:text-blue-400 glass-panel rounded-xl hover:border-blue-500/50 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.leetCode}
                target="_blank"
                rel="noreferrer"
                className="p-3 text-slate-400 hover:text-amber-400 glass-panel rounded-xl hover:border-amber-500/50 transition-all font-mono font-bold text-xs"
                title="LeetCode (anwesh_3 - Peak 1592)"
              >
                LeetCode
              </a>

              <a
                href={PERSONAL_INFO.codeChef}
                target="_blank"
                rel="noreferrer"
                className="p-3 text-slate-400 hover:text-purple-400 glass-panel rounded-xl hover:border-purple-500/50 transition-all font-mono font-bold text-xs"
                title="CodeChef (anwesh_3 - Div 3)"
              >
                CodeChef
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-3 text-slate-400 hover:text-cyan-400 glass-panel rounded-xl hover:border-cyan-500/50 transition-all"
                title="Email Me"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="glass-card p-4 rounded-xl border border-slate-800/80">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight text-gradient-cyan">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
