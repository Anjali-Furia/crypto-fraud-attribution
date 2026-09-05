import React from 'react';
import { Search, ShieldAlert, Cpu } from 'lucide-react';

interface WalletSearchProps {
  onAnalyze: (address: string, chain: string, crimeType: string) => void;
  isLoading?: boolean;
}

export const WalletSearch: React.FC<WalletSearchProps> = ({ onAnalyze, isLoading = false }) => {
  const [address, setAddress] = React.useState('0x71C7656EC7ab88b098defB751B7401B5f6d8976F');
  const [chain, setChain] = React.useState('ethereum');
  const [crimeType, setCrimeType] = React.useState('Task Fraud / Part-Time Job Scam');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      onAnalyze(address.trim(), chain, crimeType);
    }
  };

  const handlePreset = (addr: string, c: string, type: string) => {
    setAddress(addr);
    setChain(c);
    setCrimeType(type);
    onAnalyze(addr, c, type);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2.5 rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-base font-bold text-white uppercase tracking-wider">Victim-Reported Suspect Wallet Ingestion</h2>
          <p className="text-xs text-slate-400">Input wallet address reported under NCRP / SAHYOG to initiate automated blockchain multi-hop tracing</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
            Suspect Wallet Address
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter ETH (0x...), BTC (1... / bc1...), SOL address..."
              className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-9 pr-4 py-2.5 text-xs font-mono text-slate-100 focus:outline-none focus:border-blue-500 transition"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
            Blockchain Network
          </label>
          <select
            value={chain}
            onChange={(e) => setChain(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
          >
            <option value="ethereum">Ethereum (ETH / EVM)</option>
            <option value="bitcoin">Bitcoin (BTC)</option>
            <option value="solana">Solana (SOL)</option>
            <option value="bsc">Binance Smart Chain (BSC)</option>
            <option value="polygon">Polygon (MATIC)</option>
          </select>
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs py-2.5 px-4 rounded-lg flex items-center justify-center space-x-2 transition shadow-lg shadow-blue-600/20 disabled:opacity-50"
          >
            <Cpu className="w-4 h-4" />
            <span>{isLoading ? 'Tracing Blockchain...' : 'Start Real-Time Trace'}</span>
          </button>
        </div>
      </form>

      {/* Preset Quick Load Buttons for Presentation */}
      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center space-x-3 text-xs">
        <span className="text-slate-500 font-semibold uppercase text-[10px]">Demo Presets:</span>
        <button
          onClick={() => handlePreset('0x71C7656EC7ab88b098defB751B7401B5f6d8976F', 'ethereum', 'Task Fraud / Telegram Scam')}
          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-blue-300 rounded font-mono text-[11px] border border-slate-700 transition"
        >
          Task Scam (ETH)
        </button>
        <button
          onClick={() => handlePreset('1NDyJtNTjW415n58D6M414UX6P24yAQy29', 'bitcoin', 'Sextortion Blackmail')}
          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded font-mono text-[11px] border border-slate-700 transition"
        >
          Sextortion (BTC)
        </button>
        <button
          onClick={() => handlePreset('0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4', 'ethereum', 'Investment Scam')}
          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-emerald-300 rounded font-mono text-[11px] border border-slate-700 transition"
        >
          WazirX Hot Wallet
        </button>
      </div>
    </div>
  );
};
