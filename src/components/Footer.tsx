import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Briefcase, ArrowUp, ExternalLink, Code2, Award, Star } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const codingProfiles = [
    {
      name: "GitHub",
      url: PERSONAL_INFO.github,
      handle: "@patnaikAnwesh",
      icon: <Github className="w-4 h-4 text-cyan-400" />,
      hoverClass: "hover:border-cyan-500/50 hover:text-cyan-300"
    },
    {
      name: "LinkedIn",
      url: PERSONAL_INFO.linkedin,
      handle: "in/anwesh-patnaik",
      icon: <Linkedin className="w-4 h-4 text-blue-400" />,
      hoverClass: "hover:border-blue-500/50 hover:text-blue-300"
    },
    {
      name: "LeetCode",
      url: PERSONAL_INFO.leetCode,
      handle: "@anwesh_3 (Peak 1592)",
      icon: <Code2 className="w-4 h-4 text-amber-400" />,
      hoverClass: "hover:border-amber-500/50 hover:text-amber-300"
    },
    {
      name: "CodeChef",
      url: PERSONAL_INFO.codeChef,
      handle: "@anwesh_3 (Div 3)",
      icon: <Award className="w-4 h-4 text-purple-400" />,
      hoverClass: "hover:border-purple-500/50 hover:text-purple-300"
    },
    {
      name: "HackerRank",
      url: PERSONAL_INFO.hackerRank,
      handle: "@patnaikanwesh13 (5-Star)",
      icon: <Star className="w-4 h-4 text-yellow-400" />,
      hoverClass: "hover:border-yellow-500/50 hover:text-yellow-300"
    }
  ];

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#04070e] text-slate-400 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-40 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-40 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Profile & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-[#090e1a] rounded-[11px] flex items-center justify-center font-mono font-bold text-cyan-400 text-sm">
                  AP
                </div>
              </div>
              <div>
                <h3 className="font-bold text-white text-base tracking-tight">Anwesh Patnaik</h3>
                <p className="text-xs text-cyan-400 font-mono">Java Backend Developer</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
              Engineering high-throughput Java microservices, banking transaction flows, and prompt/context engineering pipelines at TCS.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Opportunities</span>
            </div>
          </div>

          {/* Column 2: Direct Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
              </li>

              <li>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-purple-400 group-hover:border-purple-500/40">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </li>

              <li className="flex items-center gap-2.5 text-slate-300">
                <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-400">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Bangalore, Karnataka, India</span>
              </li>

              <li className="flex items-center gap-2.5 text-slate-300">
                <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-sky-400">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>
                <span>Tata Consultancy Services (TCS)</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Profiles & Coding Platforms (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Coding & Professional Profiles
              </h4>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                5 Verified Profiles
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {codingProfiles.map((profile, pIdx) => (
                <a
                  key={pIdx}
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-between p-2 rounded-xl bg-slate-900/60 border border-slate-800/90 text-xs font-mono text-slate-300 transition-all group ${profile.hoverClass}`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="p-1 rounded-lg bg-slate-950 border border-slate-800">
                      {profile.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-white group-hover:text-current truncate text-[11px]">
                        {profile.name}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">
                        {profile.handle}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-current opacity-60 group-hover:opacity-100 flex-shrink-0 ml-1 transition-all" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top (No 'engineered with' line) */}
        <div className="mt-8 flex items-center justify-between text-xs font-mono text-slate-500">
          
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Anwesh Patnaik.</span>
            <span>•</span>
            <span>Bangalore, India</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/30 transition-all text-xs"
            title="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </footer>
  );
};
