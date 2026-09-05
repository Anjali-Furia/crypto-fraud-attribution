import React from 'react';
import { ArrowRight, AlertTriangle, ShieldCheck, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const RecentCases: React.FC = () => {
  const navigate = useNavigate();

  const cases = [
    {
      id: 'NCRP-2026-8891',
      victim_wallet: '0x4838B106FCe9647Bdf1E7877BF73CE8B0BAD5f97',
      suspect_wallet: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
      crime_type: 'Task Scam / Investment Fraud',
      amount_inr: '₹ 37,12,500',
      vasp_matched: 'Binance',
      confidence: 96,
      status: 'FREEZE_NOTICE_ISSUED',
      risk: 'CRITICAL'
    },
    {
      id: 'NCRP-2026-09412',
      victim_wallet: '0x10294817263541...a82b',
      suspect_wallet: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      crime_type: 'Part-Time Telegram Job Scam',
      amount_inr: '₹ 12,40,000',
      vasp_matched: 'WazirX',
      confidence: 94,
      status: 'TRACING_ACTIVE',
      risk: 'HIGH'
    },
    {
      id: 'SAHYOG-2026-0041',
      victim_wallet: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
      suspect_wallet: '1NDyJtNTjW415n58D6M414UX6P24yAQy29',
      crime_type: 'Sextortion / Blackmail',
      amount_inr: '₹ 8,50,000',
      vasp_matched: 'CoinDCX',
      confidence: 95,
      status: 'ACKNOWLEDGED',
      risk: 'HIGH'
    }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <div className="p-5 border-b border-slate-800 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Recent Fraud Reports & VASP Attributions</h3>
          <p className="text-xs text-slate-400">Ingested via National Cyber Crime Reporting Portal (NCRP)</p>
        </div>
        <button
          onClick={() => navigate('/wallet-analysis')}
          className="flex items-center space-x-1.5 text-xs text-blue-400 hover:text-blue-300 font-medium transition"
        >
          <span>Explore All Cases</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950/60 text-slate-400 border-b border-slate-800">
            <tr>
              <th className="px-5 py-3 font-semibold">Case ID</th>
              <th className="px-5 py-3 font-semibold">Suspect Wallet</th>
              <th className="px-5 py-3 font-semibold">Crime Typology</th>
              <th className="px-5 py-3 font-semibold">Defrauded Amount</th>
              <th className="px-5 py-3 font-semibold">Target Exchange</th>
              <th className="px-5 py-3 font-semibold">Status</th>
              <th className="px-5 py-3 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-200">
            {cases.map((c) => (
              <tr key={c.id} className="hover:bg-slate-800/40 transition">
                <td className="px-5 py-3.5 font-mono text-blue-400 font-semibold">{c.id}</td>
                <td className="px-5 py-3.5 font-mono text-slate-300">
                  {c.suspect_wallet.slice(0, 8)}...{c.suspect_wallet.slice(-6)}
                </td>
                <td className="px-5 py-3.5">{c.crime_type}</td>
                <td className="px-5 py-3.5 font-bold text-emerald-400">{c.amount_inr}</td>
                <td className="px-5 py-3.5">
                  <span className="inline-flex items-center px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-300 font-medium">
                    {c.vasp_matched} ({c.confidence}%)
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <ShieldCheck className="w-3 h-3" />
                    <span>{c.status}</span>
                  </span>
                </td>
                <td className="px-5 py-3.5 text-right">
                  <button
                    onClick={() => navigate('/wallet-analysis')}
                    className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded font-medium text-xs transition"
                  >
                    View Trace
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
