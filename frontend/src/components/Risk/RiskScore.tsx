import React from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface RiskScoreProps {
  score: number;
  level: string;
}

export const RiskScore: React.FC<RiskScoreProps> = ({ score, level }) => {
  const getMeterColor = (val: number) => {
    if (val >= 85) return 'from-red-600 to-red-500 text-red-400';
    if (val >= 70) return 'from-orange-600 to-orange-500 text-orange-400';
    if (val >= 45) return 'from-amber-600 to-amber-500 text-amber-400';
    return 'from-emerald-600 to-emerald-500 text-emerald-400';
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center justify-between">
      <div>
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
          AI Risk Model Score
        </div>
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-extrabold text-white">{score}</span>
          <span className="text-xs text-slate-500 font-bold">/ 100</span>
          <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full border uppercase ml-2 ${
            level === 'CRITICAL' ? 'bg-red-500/10 text-red-400 border-red-500/30' : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
          }`}>
            {level}
          </span>
        </div>
        <p className="text-[11px] text-slate-400 mt-2">
          High confidence laundering traits detected across multi-hop transaction path.
        </p>
      </div>

      <div className="w-32 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
        <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Model Version</div>
        <div className="text-xs font-mono font-bold text-amber-400">ML-RF-v2.4.1</div>
        <div className="text-[10px] text-emerald-400 mt-1">✓ 96% Acc.</div>
      </div>
    </div>
  );
};
