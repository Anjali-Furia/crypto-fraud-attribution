import React from 'react';
import { VASPMatch } from '../../types';
import { Building2, CheckCircle2, Mail, ExternalLink, ShieldCheck, Download, AlertOctagon } from 'lucide-react';

interface VASPCardProps {
  vasp: VASPMatch;
  onIssueFreezeNotice?: () => void;
}

export const VASPCard: React.FC<VASPCardProps> = ({ vasp, onIssueFreezeNotice }) => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 border-2 border-emerald-500/40 rounded-xl p-6 shadow-2xl relative overflow-hidden">
      {/* Background glow badge */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/40 rounded-xl text-emerald-400">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                Matched VASP Exchange
              </span>
              <span className="text-xs text-slate-400 font-mono">ID: {vasp.vasp_id}</span>
            </div>
            <h2 className="text-xl font-extrabold text-white tracking-tight mt-0.5">{vasp.name}</h2>
          </div>
        </div>

        {/* Confidence Score Pill */}
        <div className="bg-slate-950/90 border border-emerald-500/50 px-4 py-2 rounded-xl text-right">
          <div className="text-[10px] text-slate-400 font-semibold uppercase">Attribution Confidence</div>
          <div className="text-2xl font-black text-emerald-400 flex items-center justify-end space-x-1">
            <span>{vasp.confidence_score}%</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-400 inline" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 text-xs">
        <div className="space-y-2">
          <div>
            <span className="text-slate-500 font-semibold uppercase text-[10px]">Registered Legal Entity</span>
            <div className="font-semibold text-slate-200">{vasp.legal_name}</div>
          </div>
          <div>
            <span className="text-slate-500 font-semibold uppercase text-[10px]">Jurisdiction & Registration Status</span>
            <div className="font-semibold text-slate-300">{vasp.jurisdiction}</div>
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <span className="text-slate-500 font-semibold uppercase text-[10px]">Matched Deposit Wallet Address</span>
            <div className="font-mono font-semibold text-amber-400 bg-slate-950 p-1.5 rounded border border-slate-800 text-[11px] truncate">
              {vasp.deposit_address}
            </div>
          </div>
          <div>
            <span className="text-slate-500 font-semibold uppercase text-[10px]">Compliance Nodal Officer Contact</span>
            <div className="flex items-center space-x-1.5 text-blue-400 font-mono font-semibold">
              <Mail className="w-3.5 h-3.5" />
              <span>{vasp.compliance_email}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2 text-xs text-emerald-400">
          <ShieldCheck className="w-4 h-4" />
          <span className="font-semibold">Direct Deposit Terminal Confirmed</span>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={onIssueFreezeNotice}
            className="px-4 py-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs rounded-lg flex items-center space-x-2 shadow-lg shadow-red-600/20 transition"
          >
            <AlertOctagon className="w-4 h-4" />
            <span>Generate Sec 91 CrPC Freeze Request</span>
          </button>
        </div>
      </div>
    </div>
  );
};
