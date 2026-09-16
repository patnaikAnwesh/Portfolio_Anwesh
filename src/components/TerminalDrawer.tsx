import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minimize2, Sparkles, Send } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILL_CATEGORIES } from '../data/portfolioData';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandOutput {
  command: string;
  response: React.ReactNode;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      response: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">⚡ Anwesh OS Interactive Dev CLI v2.5</p>
          <p className="text-xs text-slate-400">Type <span className="text-yellow-300 font-bold">help</span> to list available commands or <span className="text-yellow-300 font-bold">sudo hire</span> for instant contact info.</p>
        </div>
      )
    }
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let respNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        respNode = (
          <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300 py-1">
            <div><span className="text-cyan-300 font-bold">help</span> - List available CLI commands</div>
            <div><span className="text-cyan-300 font-bold">whoami</span> - Display Anwesh summary</div>
            <div><span className="text-cyan-300 font-bold">projects</span> - List top projects</div>
            <div><span className="text-cyan-300 font-bold">skills</span> - Core tech stack</div>
            <div><span className="text-cyan-300 font-bold">exp</span> - Experience highlights</div>
            <div><span className="text-cyan-300 font-bold">contact</span> - Email & phone info</div>
            <div><span className="text-cyan-300 font-bold">sudo hire</span> - Direct hiring memo</div>
            <div><span className="text-cyan-300 font-bold">clear</span> - Clear terminal log</div>
          </div>
        );
        break;

      case 'whoami':
        respNode = (
          <div className="text-xs font-mono text-slate-300 space-y-1">
            <p className="text-white font-bold">{PERSONAL_INFO.name} ({PERSONAL_INFO.title})</p>
            <p className="text-slate-400">{PERSONAL_INFO.bio}</p>
            <p className="text-cyan-300">Location: {PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      case 'projects':
        respNode = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            {PROJECTS.map(p => (
              <div key={p.id} className="border-l-2 border-cyan-500 pl-2">
                <span className="text-cyan-300 font-bold">{p.title}</span> ({p.subtitle})
                <br />
                <span className="text-slate-400">Tech: {p.tags.join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        respNode = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            {SKILL_CATEGORIES.map((cat, i) => (
              <div key={i}>
                <span className="text-yellow-400 font-bold">[{cat.title}]</span>: {cat.skills.map(s => s.name).join(', ')}
              </div>
            ))}
          </div>
        );
        break;

      case 'exp':
        respNode = (
          <div className="text-xs font-mono text-slate-300 space-y-2">
            {EXPERIENCES.map((e, i) => (
              <div key={i}>
                <p className="text-purple-300 font-bold">{e.role} @ {e.company} ({e.period})</p>
                <p className="text-slate-400">{e.summary}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
      case 'socials':
      case 'links':
        respNode = (
          <div className="text-xs font-mono text-slate-300 space-y-1">
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 underline">{PERSONAL_INFO.email}</a></p>
            <p>Phone: <span className="text-slate-200">{PERSONAL_INFO.phone}</span></p>
            <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.github}</a></p>
            <p>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 underline">{PERSONAL_INFO.linkedin}</a></p>
            <p>LeetCode: <a href={PERSONAL_INFO.leetCode} target="_blank" rel="noreferrer" className="text-amber-400 underline">{PERSONAL_INFO.leetCode}</a></p>
            <p>CodeChef: <a href={PERSONAL_INFO.codeChef} target="_blank" rel="noreferrer" className="text-purple-400 underline">{PERSONAL_INFO.codeChef}</a></p>
            <p>HackerRank: <a href={PERSONAL_INFO.hackerRank} target="_blank" rel="noreferrer" className="text-yellow-400 underline">{PERSONAL_INFO.hackerRank}</a></p>
          </div>
        );
        break;

      case 'sudo hire':
      case 'hire':
        respNode = (
          <div className="p-3 bg-cyan-950/80 border border-cyan-500/40 rounded text-xs font-mono text-cyan-200 space-y-1">
            <p className="font-bold text-yellow-300">🎉 Permission granted!</p>
            <p>Anwesh is available for Backend & Full-Stack engineering opportunities.</p>
            <p>Send an email directly to <strong className="text-white">{PERSONAL_INFO.email}</strong> or call <strong className="text-white">{PERSONAL_INFO.phone}</strong>.</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        respNode = (
          <div className="text-xs font-mono text-rose-400">
            Command not recognized: '{cmd}'. Type <span className="text-yellow-300 font-bold">help</span> to list commands.
          </div>
        );
    }

    setHistory(prev => [...prev, { command: inputVal, response: respNode }]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-3xl h-[600px] bg-[#070b14] border border-cyan-500/30 rounded-2xl overflow-hidden flex flex-col shadow-2xl shadow-cyan-950/50">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3 bg-[#0d1526] border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs text-slate-200 font-bold">anwesh@dev-macbook: ~</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Output Console area */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 font-mono text-sm">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs">
                <span>anwesh@portfolio:~$</span>
                <span className="text-white">{item.command}</span>
              </div>
              <div className="pl-4">{item.response}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleCommandSubmit} className="p-3 bg-[#0a101f] border-t border-slate-800 flex items-center gap-2">
          <span className="text-cyan-400 font-mono font-bold text-xs pl-2">&gt;</span>
          <input
            type="text"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            placeholder="Type 'help', 'whoami', 'projects', 'sudo hire'..."
            className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-white placeholder-slate-500"
            autoFocus
          />
          <button
            type="submit"
            className="px-3 py-1 bg-cyan-950 text-cyan-400 border border-cyan-500/30 rounded hover:bg-cyan-900 text-xs font-mono"
          >
            Run
          </button>
        </form>

      </div>
    </div>
  );
};
