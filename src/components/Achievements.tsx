import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Trophy, Star, Code, Award, Zap } from 'lucide-react';

export const Achievements: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy': return <Trophy className="w-6 h-6 text-amber-400" />;
      case 'Star': return <Star className="w-6 h-6 text-yellow-400" />;
      case 'Code': return <Code className="w-6 h-6 text-cyan-400" />;
      case 'Award': return <Award className="w-6 h-6 text-purple-400" />;
      default: return <Zap className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-xs font-mono text-amber-300 mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Coding Benchmarks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Competitive <span className="text-gradient-gold">Achievements & Ranks</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Verified platform ratings, algorithmic ranks, and national hackathon qualifications.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const CardContent = (
              <>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 group-hover:border-amber-500/40 transition-colors">
                      {getIcon(item.icon)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-amber-950/80 text-amber-300 text-xs font-mono border border-amber-500/30 font-bold">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-amber-400 font-semibold mb-1 uppercase tracking-wider flex items-center justify-between">
                    <span>{item.platform}</span>
                    {item.url && <span className="text-[10px] text-slate-500 group-hover:text-amber-300">View Profile ↗</span>}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>{item.url ? "Verified Profile" : "Verified Milestone"}</span>
                  <span className="text-amber-400">★ ★ ★ ★ ★</span>
                </div>
              </>
            );

            if (item.url) {
              return (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:shadow-xl hover:shadow-amber-950/30"
                >
                  {CardContent}
                </a>
              );
            }

            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                {CardContent}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
