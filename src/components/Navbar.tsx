import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Github, Linkedin, Sparkles, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-3 glass-panel shadow-2xl shadow-cyan-950/20' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#090e1a] rounded-[11px] flex items-center justify-center font-mono font-bold text-cyan-400 text-lg">
                AP
              </div>
            </div>
            <div>
              <span className="font-bold text-lg text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                Anwesh Patnaik
              </span>
              <span className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                TCS - Java Backend Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#experience" className="text-sm text-slate-300 hover:text-cyan-400 font-medium transition-colors">Experience</a>
            <a href="#architecture" className="text-sm text-slate-300 hover:text-cyan-400 font-medium transition-colors">Architecture</a>
            <a href="#projects" className="text-sm text-slate-300 hover:text-cyan-400 font-medium transition-colors">Projects</a>
            <a href="#skills" className="text-sm text-slate-300 hover:text-cyan-400 font-medium transition-colors">Skills</a>
            <a href="#achievements" className="text-sm text-slate-300 hover:text-cyan-400 font-medium transition-colors">Achievements</a>
            <a href="#contact" className="text-sm text-slate-300 hover:text-cyan-400 font-medium transition-colors">Contact</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Dev CLI Button */}
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded-lg hover:bg-cyan-900/50 hover:border-cyan-400 transition-all shadow-sm shadow-cyan-500/10"
              title="Open Anwesh Interactive Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Dev CLI</span>
              <span className="bg-cyan-900/80 text-[10px] px-1.5 py-0.5 rounded border border-cyan-500/30 text-cyan-200">⌘K</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-lg hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* GitHub Quick Link */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn Quick Link */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800/60 rounded-lg transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenTerminal}
              className="p-2 text-cyan-400 bg-cyan-950/40 rounded-lg border border-cyan-500/30"
              title="Dev CLI"
            >
              <Terminal className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg glass-card"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-slate-800 px-6 py-6 mt-3 space-y-4 animate-in slide-in-from-top duration-200">
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 font-medium py-1"
          >
            Experience
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 font-medium py-1"
          >
            Architecture
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 font-medium py-1"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 font-medium py-1"
          >
            Skills
          </a>
          <a
            href="#achievements"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 font-medium py-1"
          >
            Achievements
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 font-medium py-1"
          >
            Contact
          </a>
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
