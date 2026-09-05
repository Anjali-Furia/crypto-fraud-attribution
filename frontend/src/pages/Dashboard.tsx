import React from 'react';
import { StatCard } from '../components/Dashboard/StatCard';
import { RecentCases } from '../components/Dashboard/RecentCases';
import { 
  ShieldAlert, 
  Building2, 
  GitMerge, 
  Lock, 
  FileCheck2, 
  TrendingUp, 
  Activity 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950/60 to-slate-900 border border-blue-800/40 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center space-x-2 text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>National Cyber Crime Coordination Centre (I4C)</span>
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">Real-Time Crypto Fraud Intelligence Dashboard</h1>
          <p className="text-xs text-slate-300 mt-1">
            Ingesting victim-reported wallet addresses from NCRP/SAHYOG for automated multi-chain attribution & VASP identification.
          </p>
        </div>

        <button
          onClick={() => navigate('/wallet-analysis')}
          className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-600/30 transition flex-shrink-0"
        >
          + Analyze Suspect Wallet
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Suspect Wallets Ingested"
          value="1,428"
          change="+18.4%"
          icon={ShieldAlert}
          iconColor="text-red-400"
        />
        <StatCard
          title="VASP Exchanges Identified"
          value="892"
          change="96% Conf."
          icon={Building2}
          iconColor="text-emerald-400"
        />
        <StatCard
          title="Assets Frozen / Flagged"
          value="₹ 14.8 Cr"
          change="+₹ 2.1 Cr"
          icon={Lock}
          iconColor="text-amber-400"
        />
        <StatCard
          title="Sec 91 CrPC Notices Issued"
          value="642"
          change="Automated"
          icon={FileCheck2}
          iconColor="text-blue-400"
        />
      </div>

      {/* Main Recent Cases Table */}
      <RecentCases />
    </div>
  );
};
