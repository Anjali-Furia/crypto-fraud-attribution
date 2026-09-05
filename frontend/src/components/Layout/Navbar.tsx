import React from 'react';
import { Shield, Bell, Search, User, ExternalLink, Activity } from 'lucide-react';

interface NavbarProps {
  onSearchSubmit?: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchSubmit }) => {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && onSearchSubmit) {
      onSearchSubmit(query.trim());
    }
  };

  return (
    <header className="bg-slate-900/90 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
      <div className="px-6 py-3 flex items-center justify-between">
        {/* Brand & Organization Title */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-900/60 to-indigo-900/60 px-3 py-1.5 rounded-lg border border-blue-700/50">
            <Shield className="w-6 h-6 text-amber-400" />
            <div>
              <h1 className="text-sm font-bold text-white tracking-wide uppercase">Crypto Fraud Intel System</h1>
              <p className="text-[10px] text-blue-300">I4C • CIS Division • Ministry of Home Affairs</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-xs text-slate-400 border-l border-slate-800 pl-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Live Multi-Chain Indexing Active</span>
          </div>
        </div>

        {/* Universal Wallet Search */}
        <form onSubmit={handleSubmit} className="flex-1 max-w-md mx-6 hidden lg:block">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search suspect wallet address (e.g. 0x71C7... or BTC/SOL)..."
              className="w-full bg-slate-950/80 border border-slate-700 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-blue-500 transition"
            />
          </div>
        </form>

        {/* Right Action Icons & Officer Profile */}
        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
          </button>
          
          <div className="flex items-center space-x-3 border-l border-slate-800 pl-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-blue-600 flex items-center justify-center font-bold text-white text-xs border border-amber-300/40">
              LEA
            </div>
            <div className="hidden sm:block text-left">
              <div className="text-xs font-semibold text-slate-200">Insp. R. Sharma</div>
              <div className="text-[10px] text-amber-400 font-medium">Cyber Crime Unit (MHA)</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
