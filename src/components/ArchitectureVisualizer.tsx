import React, { useState } from 'react';
import { Cpu, ShieldCheck, Zap, AlertTriangle, ArrowRight, Activity, Server, Database, CheckCircle2 } from 'lucide-react';

export const ArchitectureVisualizer: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [simulationRunning, setSimulationRunning] = useState<boolean>(false);
  const [lastTransaction, setLastTransaction] = useState<any>(null);

  const steps = [
    {
      title: "1. REST Transaction Ingestion",
      tech: "Java Spring Boot API",
      desc: "Credit, Debit, or Gift card transaction payload ingested via secure REST controller with Spring Security & JWT validation.",
      details: ["Input schema payload validated", "JWT authentication & RBAC check", "Optimized memory deserialization"]
    },
    {
      title: "2. Fraud Business Logic",
      tech: "Brainiac Rules Engine",
      desc: "10+ configurable business rules evaluated in real-time (Velocity limits, Location cross-check, High-value threshold).",
      details: ["Rule #1: Multi-geo velocity check", "Rule #2: Transaction threshold alert", "Rule #3: Unusual merchant category"]
    },
    {
      title: "3. Database & Query Optimization",
      tech: "MySQL & PL/SQL Engine",
      desc: "ACID-compliant state persistence with indexed SQL queries and pagination strategy (25% latency reduction).",
      details: ["Optimized execution plan", "Concurrency control & ACID safety", "Indexed audit log persistence"]
    },
    {
      title: "4. Automated Alert & QA Flow",
      tech: "Selenium & Cucumber BDD",
      desc: "Real-time alert dispatch to merchants/users; complete flow validated with 150+ automated end-to-end BDD test scenarios.",
      details: ["Merchant alert triggered", "Cucumber BDD scenario passed", "Selenium E2E automation verified"]
    }
  ];

  const handleSimulate = () => {
    setSimulationRunning(true);
    setActiveStep(0);
    const mockTx = {
      id: "TXN-" + Math.floor(100000 + Math.random() * 900000),
      cardType: ["VISA Credit", "Debit Card", "Gift Card"][Math.floor(Math.random() * 3)],
      amount: "$" + (Math.floor(Math.random() * 1500) + 10).toFixed(2),
      time: new Date().toLocaleTimeString(),
      status: Math.random() > 0.3 ? "APPROVED" : "FLAGGED_SUSPICIOUS"
    };
    setLastTransaction(mockTx);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < steps.length) {
        setActiveStep(current);
      } else {
        clearInterval(interval);
        setSimulationRunning(false);
      }
    }, 1200);
  };

  return (
    <section id="architecture" className="py-20 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>Enterprise Banking Platform • Fraud Processing System</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Enterprise Banking <span className="text-gradient-cyan">Backend Fraud Processing System</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Interactive visualization of the real-time transaction processing logic, database query optimization, and Brainiac rule validation system engineered at TCS.
          </p>
        </div>

        {/* Interactive Architecture Workspace */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative">
          
          {/* Top Bar with Run Simulation Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Live Backend Transaction Processing Simulator</h3>
                <p className="text-xs text-slate-400">Java Spring Boot + Brainiac Rules Engine + Indexed SQL</p>
              </div>
            </div>

            <button
              onClick={handleSimulate}
              disabled={simulationRunning}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
                simulationRunning
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 active:scale-95'
              }`}
            >
              <Zap className={`w-4 h-4 ${simulationRunning ? 'animate-spin text-cyan-400' : ''}`} />
              <span>{simulationRunning ? 'Evaluating Backend Logic...' : 'Simulate Live Transaction'}</span>
            </button>
          </div>

          {/* Transaction Simulation Status Card */}
          {lastTransaction && (
            <div className="mb-8 p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 flex flex-wrap items-center justify-between gap-4 animate-in fade-in duration-300">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-slate-400">TX ID: <strong className="text-cyan-300">{lastTransaction.id}</strong></span>
                <span className="font-mono text-xs text-slate-400">Card: <strong className="text-white">{lastTransaction.cardType}</strong></span>
                <span className="font-mono text-xs text-slate-400">Amount: <strong className="text-white">{lastTransaction.amount}</strong></span>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs">
                <span>Decision:</span>
                {lastTransaction.status === 'APPROVED' ? (
                  <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> APPROVED
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded bg-rose-950 text-rose-300 border border-rose-500/40 flex items-center gap-1 font-semibold">
                    <AlertTriangle className="w-3.5 h-3.5" /> FLAGGED SUSPICIOUS
                  </span>
                )}
              </div>
            </div>
          )}

          {/* 4 Pipeline Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isPassed = activeStep > index;

              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer relative ${
                    isActive
                      ? 'bg-cyan-950/40 border-cyan-400 shadow-lg shadow-cyan-500/20 transform scale-[1.02]'
                      : isPassed
                      ? 'bg-slate-900/70 border-cyan-500/40 text-slate-300'
                      : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {/* Step Status Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      Step {index + 1}
                    </span>
                    {isActive && (
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    )}
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                  <div className="text-xs font-mono text-cyan-400 mb-3">{step.tech}</div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{step.desc}</p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <div className="w-1 h-1 rounded-full bg-cyan-400" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
