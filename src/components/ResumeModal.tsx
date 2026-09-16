import React from 'react';
import { FileText, Download, ExternalLink, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-5xl h-[92vh] rounded-2xl overflow-hidden border border-slate-700/80 flex flex-col shadow-2xl shadow-cyan-950/50">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/95 border-b border-slate-800 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white text-sm sm:text-base">
                Anwesh Patnaik — Official Resume
              </span>
              <span className="hidden sm:inline-block ml-2 px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                PDF Document
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Direct Download Button */}
            <a
              href={PERSONAL_INFO.resumePdf}
              download="Anwesh_Patnaik_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-xs font-semibold text-white shadow-md shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Open Full View in New Tab */}
            <a
              href={PERSONAL_INFO.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-medium transition-colors border border-slate-700"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span>Open in New Tab</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Close Resume View"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded Original PDF Viewer */}
        <div className="flex-1 w-full h-full bg-slate-950 relative overflow-hidden">
          <object
            data={`${PERSONAL_INFO.resumePdf}#view=FitH`}
            type="application/pdf"
            className="w-full h-full border-none"
          >
            <iframe
              src={`${PERSONAL_INFO.resumePdf}#view=FitH`}
              title="Anwesh Patnaik Resume"
              className="w-full h-full border-none bg-slate-900"
            />
          </object>
        </div>

      </div>
    </div>
  );
};
