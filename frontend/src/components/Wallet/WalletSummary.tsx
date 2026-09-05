import React from 'react';
import { Wallet } from '../../types';
import { ShieldCheck, ShieldAlert, AlertTriangle, Layers, Clock, DollarSign } from 'lucide-react';

interface WalletSummaryProps {
  wallet: Wallet;
}

export const WalletSummary: React.FC<WalletSummaryProps> = ({ wallet }) => {
  const getRiskBadge = (level: string) => {
    switch (level) {
      case 'CRITICAL':
        return 'bg-red-500/10 text-red-400 border-red-500/30';
      case 'HIGH':
        return 'bg-orange-500/10 text-orange-400 border-orange-500/30';
      case 'MEDIUM':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default:
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Target Wallet Address</span>
          <div className="font-mono text-sm font-bold text-white tracking-wide">{wallet.address}</div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase border ${getRiskBadge(wallet.risk_level)}`}>
          Risk Score: {wallet.risk_score}/100 ({wallet.risk_level})
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <div className="text-slate-400 mb-1 flex items-center space-x-1">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>Blockchain</span>
          </div>
          <div className="font-semibold text-slate-200 capitalize">{wallet.blockchain}</div>
        </div>

        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <div className="text-slate-400 mb-1 flex items-center space-x-1">
            <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
            <span>Total Received</span>
          </div>
          <div className="font-semibold text-emerald-400 font-mono">{wallet.total_received || '14.85 ETH'}</div>
        </div>

        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <div className="text-slate-400 mb-1 flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>First Traced</span>
          </div>
          <div className="font-semibold text-slate-300">2026-08-12</div>
        </div>

        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <div className="text-slate-400 mb-1 flex items-center space-x-1">
            <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
            <span>Entity Type</span>
          </div>
          <div className="font-semibold text-red-400 uppercase">{wallet.type}</div>
        </div>
      </div>
    </div>
  );
};
