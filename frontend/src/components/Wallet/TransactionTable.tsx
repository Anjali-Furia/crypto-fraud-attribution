import React from 'react';
import { Transaction } from '../../types';
import { ExternalLink, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

interface TransactionTableProps {
  transactions: Transaction[];
}

export const TransactionTable: React.FC<TransactionTableProps> = ({ transactions }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <div className="p-4 border-b border-slate-800 flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-wider text-white">Multi-Hop Blockchain Transaction Ledger</h3>
        <span className="text-[11px] text-slate-400">Total Hops Traced: {transactions.length || 3}</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-800">
            <tr>
              <th className="px-4 py-2.5">Hop</th>
              <th className="px-4 py-2.5">Tx Hash</th>
              <th className="px-4 py-2.5">From Address</th>
              <th className="px-4 py-2.5">To Address</th>
              <th className="px-4 py-2.5">Amount (Asset)</th>
              <th className="px-4 py-2.5">INR Value</th>
              <th className="px-4 py-2.5">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50 font-mono text-[11px] text-slate-300">
            {transactions.map((tx, idx) => (
              <tr key={tx.tx_hash || idx} className="hover:bg-slate-800/40 transition">
                <td className="px-4 py-3 font-sans font-bold">
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30">
                    Hop #{tx.hop_level || idx + 1}
                  </span>
                </td>
                <td className="px-4 py-3 text-blue-400 flex items-center space-x-1">
                  <span>{tx.tx_hash.slice(0, 10)}...</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </td>
                <td className="px-4 py-3 text-slate-300">{tx.from_address.slice(0, 8)}...</td>
                <td className="px-4 py-3 text-slate-300">{tx.to_address.slice(0, 8)}...</td>
                <td className="px-4 py-3 font-bold text-amber-400">{tx.amount} {tx.asset}</td>
                <td className="px-4 py-3 font-bold text-emerald-400">₹ {tx.amount_inr.toLocaleString('en-IN')}</td>
                <td className="px-4 py-3 text-slate-400 font-sans">{tx.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
