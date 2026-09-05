import React, { useState, useEffect } from 'react';
import { WalletSearch } from '../components/Wallet/WalletSearch';
import { WalletSummary } from '../components/Wallet/WalletSummary';
import { FundFlowGraph } from '../components/Graph/FundFlowGraph';
import { VASPCard } from '../components/VASP/VASPCard';
import { RiskScore } from '../components/Risk/RiskScore';
import { RiskIndicators } from '../components/Risk/RiskIndicators';
import { TransactionTable } from '../components/Wallet/TransactionTable';
import { api } from '../services/api';
import { AnalysisResponse } from '../types';
import { useNavigate } from 'react-router-dom';

export const WalletAnalysis: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<AnalysisResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAnalysis = async (addr: string, chain: string, crimeType: string) => {
    setLoading(true);
    const result = await api.analyzeWallet(addr, chain, crimeType);
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchAnalysis('0x71C7656EC7ab88b098defB751B7401B5f6d8976F', 'ethereum', 'Task Fraud');
  }, []);

  return (
    <div className="space-y-6">
      {/* 1. Wallet Ingestion Search */}
      <WalletSearch onAnalyze={fetchAnalysis} isLoading={loading} />

      {data && (
        <div className="space-y-6">
          {/* 2. Target VASP Attribution Result (Top Highlight) */}
          {data.vasp_matched && (
            <VASPCard
              vasp={data.vasp_matched}
              onIssueFreezeNotice={() => navigate('/investigation-report')}
            />
          )}

          {/* 3. Visual Multi-Hop Transaction Graph */}
          <FundFlowGraph nodes={data.nodes} edges={data.edges} />

          {/* 4. Risk & Summary Split View */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <WalletSummary wallet={data.wallet} />
              <TransactionTable transactions={data.edges.map((e, idx) => ({
                tx_hash: e.hash || `0x9a8b7c6d5e4f${idx}...`,
                blockchain: data.wallet.blockchain,
                from_address: e.from === '1' ? '0x4838B106FCe9647Bdf1E7877BF73CE8B0BAD5f97' : '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
                to_address: e.to === '4' ? '0x28C6c06298d514Db089934071355E5743bf21d60' : '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
                amount: e.value || 14.5,
                asset: 'ETH',
                amount_inr: (e.value || 14.5) * 250000,
                timestamp: '2026-09-04 18:40:10',
                block_number: 20689104 + idx * 20,
                hop_level: idx + 1,
                status: 'CONFIRMED'
              }))} />
            </div>

            <div className="space-y-6">
              <RiskScore score={data.wallet.risk_score} level={data.wallet.risk_level} />
              <RiskIndicators indicators={data.risk_indicators} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
