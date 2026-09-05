import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Search, 
  GitMerge, 
  ShieldAlert, 
  Building2, 
  Bell, 
  FileText, 
  LogOut 
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Wallet Analysis', path: '/wallet-analysis', icon: Search },
    { label: 'Transaction Explorer', path: '/transactions', icon: GitMerge },
    { label: 'Risk Analysis', path: '/risk-analysis', icon: ShieldAlert },
    { label: 'VASP Attribution', path: '/vasp-identification', icon: Building2 },
    { label: 'LEA Alerts', path: '/alerts', icon: Bell },
    { label: 'Investigation Report', path: '/investigation-report', icon: FileText },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between h-[calc(100vh-57px)] sticky top-[57px]">
      <div className="p-4 space-y-1">
        <div className="px-3 py-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
          LEA Analytics Navigation
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-3 py-2.5 rounded-lg text-xs font-medium transition ${
                  isActive
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>

      <div className="p-4 border-t border-slate-800/80">
        <div className="p-3 bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 rounded-lg text-[11px] space-y-2 mb-3">
          <div className="font-semibold text-amber-400">SAHYOG & NCRP Integrated</div>
          <div className="text-slate-400 leading-tight">Direct API sync enabled for instant Sec 91 CrPC notice delivery.</div>
        </div>
        <NavLink
          to="/login"
          className="flex items-center space-x-2 w-full px-3 py-2 text-xs font-medium text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition"
        >
          <LogOut className="w-4 h-4" />
          <span>Exit Session</span>
        </NavLink>
      </div>
    </aside>
  );
};
