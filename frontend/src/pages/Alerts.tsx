import React from 'react';
import { Bell, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Alerts: React.FC = () => {
  const alerts = [
    {
      id: 'ALT-1092',
      timestamp: '2026-09-05 15:40:00 UTC',
      title: 'High Volume VASP Off-Ramp Match',
      severity: 'CRITICAL',
      wallet: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
      vasp: 'Binance (Deposit Hot Wallet 14)',
      amount_inr: '₹ 37,12,500'
    },
    {
      id: 'ALT-1091',
      timestamp: '2026-09-05 14:10:00 UTC',
      title: 'Intermediary Pass-Through Layering Forwarded',
      severity: 'HIGH',
      wallet: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      vasp: 'WazirX Deposit Cluster',
      amount_inr: '₹ 12,40,000'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white uppercase tracking-wider flex items-center space-x-2">
            <Bell className="w-5 h-5 text-amber-400" />
            <span>Automated Law Enforcement Intelligence Alerts</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">Real-time alerts triggered on VASP off-ramp match or suspicious layering movement</p>
        </div>
      </div>

      <div className="space-y-3">
        {alerts.map((a) => (
          <div key={a.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-white">{a.title}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-red-500/10 text-red-400 font-bold border border-red-500/30 uppercase">
                    {a.severity}
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  Target Wallet: {a.wallet} • Matched VASP: <span className="text-blue-400 font-bold">{a.vasp}</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">{a.timestamp}</div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm font-bold text-emerald-400">{a.amount_inr}</div>
              <button className="mt-2 text-xs font-semibold text-blue-400 hover:text-blue-300 underline">
                View Investigation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
