import React, { useState, useEffect } from 'react';
import { TransactionTable } from '../components/Wallet/TransactionTable';
import { api } from '../services/api';
import { Transaction } from '../types';
import { GitMerge, Filter, Search } from 'lucide-react';

export const TransactionExplorer: React.FC = () => {
  const [txs, setTxs] = useState<Transaction[]>([]);

  useEffect(() => {
    api.getTransactions().then(setTxs);
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white uppercase tracking-wider flex items-center space-x-2">
            <GitMerge className="w-5 h-5 text-blue-400" />
            <span>Multi-Chain Blockchain Transaction Explorer</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Real-time indexed transaction stream with hop level tracking and cross-chain bridge detection
          </p>
        </div>
      </div>

      <TransactionTable transactions={txs} />
    </div>
  );
};
