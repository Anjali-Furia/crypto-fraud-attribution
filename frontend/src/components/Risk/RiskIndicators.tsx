import React from 'react';
import { RiskIndicator } from '../../types';
import { AlertCircle, AlertTriangle, Info } from 'lucide-react';

interface RiskIndicatorsProps {
  indicators: RiskIndicator[];
}

export const RiskIndicators: React.FC<RiskIndicatorsProps> = ({ indicators }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
      <h3 className="text-xs font-bold uppercase tracking-wider text-white">Laundering Typologies & Risk Triggers</h3>
      <div className="space-y-2.5">
        {indicators.map((ind) => (
          <div key={ind.id} className="p-3 bg-slate-950 rounded-lg border border-slate-800/80 flex items-start space-x-3">
            <AlertCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
              ind.severity === 'CRITICAL' ? 'text-red-400' : 'text-amber-400'
            }`} />
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-slate-200">{ind.title}</span>
                <span className="text-[10px] px-2 py-0.2 rounded bg-slate-800 text-slate-400 font-mono">
                  {ind.id}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">{ind.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
