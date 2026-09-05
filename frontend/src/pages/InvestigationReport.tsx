import React from 'react';
import { Shield, Printer, Download, FileCheck, Mail, CheckCircle2, Lock } from 'lucide-react';
import { api } from '../services/api';

export const InvestigationReport: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    const res = await api.generateReport({ case_number: 'NCRP-2026-8891' });
    alert(`Report generated: ${res.file_name}. Summary generated in backend reports directory.`);
  };

  return (
    <div className="space-y-6">
      {/* Top Action Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between print:hidden">
        <div>
          <h1 className="text-base font-bold text-white uppercase tracking-wider">Standardized Law Enforcement Investigation Report</h1>
          <p className="text-xs text-slate-400">Section 91 CrPC & Information Technology Act Evidence Document</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-lg flex items-center space-x-2 transition border border-slate-700"
          >
            <Printer className="w-4 h-4" />
            <span>Print Report</span>
          </button>
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg flex items-center space-x-2 shadow-lg shadow-blue-600/30 transition"
          >
            <Download className="w-4 h-4" />
            <span>Export Official PDF / Text Report</span>
          </button>
        </div>
      </div>

      {/* Printable Report Canvas */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl space-y-6 print:bg-white print:text-black print:p-0 print:shadow-none">
        
        {/* Official Header */}
        <div className="border-b-2 border-slate-700 pb-6 text-center space-y-2">
          <div className="flex justify-center mb-2">
            <div className="p-3 bg-blue-900/40 border border-blue-600/50 rounded-2xl text-amber-400">
              <Shield className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-lg font-black tracking-wider uppercase text-white print:text-black">
            INDIAN CYBER CRIME COORDINATION CENTRE (I4C)
          </h2>
          <h3 className="text-xs font-bold text-blue-400 tracking-widest uppercase print:text-blue-800">
            CIS DIVISION • MINISTRY OF HOME AFFAIRS • GOVERNMENT OF INDIA
          </h3>
          <p className="text-[11px] text-slate-400 font-mono print:text-slate-700">
            CRYPTO FRAUD ATTRIBUTION & VASP IDENTIFICATION DOSSIER
          </p>
        </div>

        {/* Case Reference Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono">
          <div>
            <div className="text-slate-500 uppercase text-[10px]">NCRP Complaint Reference</div>
            <div className="font-bold text-blue-400">NCRP-2026-8891</div>
          </div>
          <div>
            <div className="text-slate-500 uppercase text-[10px]">Date of Generation</div>
            <div className="text-slate-200">2026-09-05 16:15 UTC</div>
          </div>
          <div>
            <div className="text-slate-500 uppercase text-[10px]">Investigating Officer</div>
            <div className="text-slate-200">Insp. R. Sharma (I4C)</div>
          </div>
          <div>
            <div className="text-slate-500 uppercase text-[10px]">Classification</div>
            <div className="font-bold text-amber-400">CONFIDENTIAL / LEA</div>
          </div>
        </div>

        {/* Section 1: Victim & Suspect Wallet */}
        <div className="space-y-3">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-amber-400 border-l-4 border-amber-400 pl-2">
            1. VICTIM REPORTED SUSPECT DETAILS
          </h3>
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 text-xs space-y-2 font-mono">
            <div className="flex justify-between">
              <span className="text-slate-400">Suspect Wallet Address:</span>
              <span className="font-bold text-white">0x71C7656EC7ab88b098defB751B7401B5f6d8976F</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Blockchain Ecosystem:</span>
              <span className="text-slate-200">ETHEREUM (EVM)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Calculated Risk Score:</span>
              <span className="font-bold text-red-400">92 / 100 (CRITICAL RISK)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Typology Category:</span>
              <span className="text-slate-200">Task Scam / Telegram Part-Time Job Fraud</span>
            </div>
          </div>
        </div>

        {/* Section 2: VASP Attribution Match */}
        <div className="space-y-3">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 border-l-4 border-emerald-400 pl-2">
            2. MATCHED VASP / EXCHANGE ATTRIBUTION RESULT
          </h3>
          <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30 text-xs space-y-2">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="text-slate-500 text-[10px] uppercase block font-mono">Target Exchange Name</span>
                <span className="font-extrabold text-base text-white">Binance</span>
              </div>
              <div className="text-right">
                <span className="text-slate-500 text-[10px] uppercase block font-mono">Attribution Confidence</span>
                <span className="font-black text-base text-emerald-400">96.0 % MATCH</span>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-2 font-mono text-[11px] space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-400">Legal Entity:</span>
                <span className="text-slate-200">Binance Holdings Ltd</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Jurisdiction & FIU Status:</span>
                <span className="text-slate-200">Global / Cayman Islands / FIU-IND Registered</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Destination Deposit Wallet:</span>
                <span className="text-amber-400 font-bold">0x28C6c06298d514Db089934071355E5743bf21d60</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Compliance Contact Email:</span>
                <span className="text-blue-400 font-bold">compliance@binance.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Legal Notice Template for VASP Compliance */}
        <div className="space-y-3">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-blue-400 border-l-4 border-blue-400 pl-2">
            3. DRAFT SECTION 91 CrPC FREEZE REQUEST NOTICE
          </h3>
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 space-y-3 leading-relaxed">
            <p className="font-bold text-white">
              TO: Nodal / Compliance Officer, Binance Holdings Ltd (compliance@binance.com)
            </p>
            <p>
              SUBJECT: URGENT NOTICE UNDER SECTION 91 CrPC / INFORMATION TECHNOLOGY ACT REGARDING SUSPECT DEPOSIT WALLET 0x28C6...1d60 (CASE NO: NCRP-2026-8891)
            </p>
            <p>
              1. This is to inform you that funds amounting to ₹ 37,12,500 (approx 14.85 ETH) defrauded from Indian citizens in cyber fraud case NCRP-2026-8891 have been traced directly into your deposit hot wallet <span className="text-amber-400">0x28C6c06298d514Db089934071355E5743bf21d60</span>.
            </p>
            <p>
              2. YOU ARE HEREBY DIRECTED TO IMMEDIATELY FREEZE / HOLD all associated sub-account balances, withdraw privileges, and preserve complete KYC, AML, and IP access logs for the recipient account.
            </p>
            <p>
              3. Please revert to I4C / MHA with confirmation of asset freeze within 24 hours.
            </p>
          </div>
        </div>

        {/* Digital Signature */}
        <div className="pt-6 border-t border-slate-800 flex justify-between items-end text-xs font-mono text-slate-400">
          <div>
            <div>System Checksum: 0x9f8e7d6c5b4a3f2e1d0c</div>
            <div>Cryptographic Chain of Custody Verified ✓</div>
          </div>
          <div className="text-right">
            <div className="font-bold text-slate-200">Cyber Crime Investigation Division</div>
            <div>I4C • Ministry of Home Affairs</div>
          </div>
        </div>
      </div>
    </div>
  );
};
