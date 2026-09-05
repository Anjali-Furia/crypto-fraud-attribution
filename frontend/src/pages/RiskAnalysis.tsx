import React from 'react';
import { RiskScore } from '../components/Risk/RiskScore';
import { RiskIndicators } from '../components/Risk/RiskIndicators';
import { ShieldAlert, Cpu, AlertTriangle } from 'lucide-react';

export const RiskAnalysis: React.FC = () => {
  const indicators = [
    {
      id: 'IND-01',
      title: 'Rapid Pass-Through Layering',
      severity: 'CRITICAL' as const,
      description: 'Funds forwarded to secondary intermediary wallet within 25 minutes of victim transfer.'
    },
    {
      id: 'IND-02',
      title: 'Direct Exchange Off-Ramp Match',
      severity: 'HIGH' as const,
      description: 'Final hop terminates into known Binance Hot Wallet (0x28C6...1d60).'
    },
    {
      id: 'IND-03',
      title: 'Peeling Chain Pattern Detected',
      severity: 'MEDIUM' as const,
      description: 'Structured breakdown of transaction amounts into rounded off-ramp buckets.'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center space-x-3">
        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white uppercase tracking-wider">AI/ML Risk Model & Fraud Typology Engine</h1>
          <p className="text-xs text-slate-400">Random Forest Classifier v2.4.1 evaluating transaction velocity, fan-out ratios, and mixer interactions</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RiskIndicators indicators={indicators} />
        </div>
        <div>
          <RiskScore score={92} level="CRITICAL" />
        </div>
      </div>
    </div>
  );
};
