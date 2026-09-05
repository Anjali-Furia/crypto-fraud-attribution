import React, { useState, useEffect } from 'react';
import { VASPCard } from '../components/VASP/VASPCard';
import { api } from '../services/api';
import { VASPMatch } from '../types';
import { Building2, Search, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const VASPIdentification: React.FC = () => {
  const navigate = useNavigate();
  const [vasps, setVasps] = useState<VASPMatch[]>([]);

  useEffect(() => {
    api.getVASPs().then(setVasps);
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white uppercase tracking-wider flex items-center space-x-2">
            <Building2 className="w-5 h-5 text-emerald-400" />
            <span>VASP / Cryptocurrency Exchange Registry & Attribution Directory</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Cluster signatures of FIU-IND registered and international Virtual Asset Service Providers (Binance, CoinDCX, WazirX, Coinbase, Kraken, OKX, Bybit)
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {vasps.map((v) => (
          <VASPCard
            key={v.vasp_id}
            vasp={v}
            onIssueFreezeNotice={() => navigate('/investigation-report')}
          />
        ))}
      </div>
    </div>
  );
};
