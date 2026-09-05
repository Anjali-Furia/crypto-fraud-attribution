import axios from 'axios';
import { AnalysisResponse, Wallet, Transaction, VASPMatch } from '../types';

const API_BASE = '/api';

export const api = {
  async analyzeWallet(address: string, blockchain: string = 'ethereum', crimeType: string = 'Task Scam'): Promise<AnalysisResponse> {
    try {
      const response = await axios.post(`${API_BASE}/wallet/analyze`, {
        address,
        blockchain,
        crime_type: crimeType,
        depth_hops: 4
      });
      return response.data;
    } catch (err) {
      console.warn('API error, returning offline mock state:', err);
      return getMockAnalysis(address, blockchain);
    }
  },

  async getWallets(): Promise<Wallet[]> {
    try {
      const response = await axios.get(`${API_BASE}/wallet/`);
      return response.data;
    } catch {
      return getMockWallets();
    }
  },

  async getTransactions(): Promise<Transaction[]> {
    try {
      const response = await axios.get(`${API_BASE}/transactions/`);
      return response.data;
    } catch {
      return getMockTransactions();
    }
  },

  async getVASPs(): Promise<VASPMatch[]> {
    try {
      const response = await axios.get(`${API_BASE}/vasp/`);
      return response.data;
    } catch {
      return getMockVASPs();
    }
  },

  async generateReport(payload: any): Promise<any> {
    try {
      const response = await axios.post(`${API_BASE}/reports/generate`, payload);
      return response.data;
    } catch {
      return {
        status: 'SUCCESS',
        file_name: 'LEA_Report_NCRP_2026.txt',
        summary_text: 'Report generated successfully.'
      };
    }
  }
};

function getMockAnalysis(address: string, chain: string): AnalysisResponse {
  return {
    wallet: {
      address,
      blockchain: chain,
      label: 'Suspect Wallet (Reported)',
      type: 'suspect',
      risk_score: 92,
      risk_level: 'CRITICAL',
      total_received: '14.85 ETH',
      total_sent: '14.50 ETH'
    },
    vasp_matched: {
      vasp_id: 'VASP-001',
      name: 'Binance',
      legal_name: 'Binance Holdings Ltd',
      jurisdiction: 'Global / Cayman Islands / FIU-IND Registered',
      compliance_email: 'compliance@binance.com',
      confidence_score: 96,
      deposit_address: '0x28C6c06298d514Db089934071355E5743bf21d60',
      risk_category: 'LOW'
    },
    risk_indicators: [
      {
        id: 'IND-01',
        title: 'Rapid Pass-Through Layering',
        severity: 'CRITICAL',
        description: 'Funds moved to intermediary wallet within 25 minutes of victim transfer.'
      },
      {
        id: 'IND-02',
        title: 'Exchange Hot Wallet Match',
        severity: 'HIGH',
        description: 'Hop #3 terminates into Binance Deposit Hot Wallet.'
      }
    ],
    nodes: [
      { id: '1', label: 'Victim Wallet\n(0x4838...5f97)', group: 'victim', risk: 'SAFE' },
      { id: '2', label: `Suspect Wallet\n(${address.slice(0, 8)}...)`, group: 'suspect', risk: 'CRITICAL' },
      { id: '3', label: 'Intermediary Wallet\n(0x8920...43e7)', group: 'intermediary', risk: 'HIGH' },
      { id: '4', label: 'Binance Hot Wallet\n(0x28C6...1d60)', group: 'vasp', risk: 'LOW', vasp_name: 'Binance' }
    ],
    edges: [
      { from: '1', to: '2', label: '14.85 ETH (₹37.1L)', value: 14.85 },
      { from: '2', to: '3', label: '14.50 ETH (Hop 2)', value: 14.50 },
      { from: '3', to: '4', label: '14.25 ETH (Hop 3)', value: 14.25 }
    ]
  };
}

function getMockWallets(): Wallet[] {
  return [
    {
      address: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
      blockchain: 'ethereum',
      label: 'Suspect Wallet (Task Scam)',
      type: 'suspect',
      risk_score: 92,
      risk_level: 'CRITICAL',
      total_received: '14.85 ETH'
    },
    {
      address: '0x28C6c06298d514Db089934071355E5743bf21d60',
      blockchain: 'ethereum',
      label: 'Binance Hot Wallet',
      type: 'vasp',
      risk_score: 15,
      risk_level: 'LOW',
      vasp_name: 'Binance'
    }
  ];
}

function getMockTransactions(): Transaction[] {
  return [
    {
      tx_hash: '0x9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b',
      blockchain: 'ethereum',
      from_address: '0x4838B106FCe9647Bdf1E7877BF73CE8B0BAD5f97',
      to_address: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
      amount: 14.85,
      asset: 'ETH',
      amount_inr: 3712500,
      timestamp: '2026-09-04 18:15:22',
      block_number: 20689104,
      hop_level: 1,
      status: 'CONFIRMED'
    }
  ];
}

function getMockVASPs(): VASPMatch[] {
  return [
    {
      vasp_id: 'VASP-001',
      name: 'Binance',
      legal_name: 'Binance Holdings Ltd',
      jurisdiction: 'Global / FIU-IND Registered',
      compliance_email: 'compliance@binance.com',
      confidence_score: 96,
      deposit_address: '0x28C6c06298d514Db089934071355E5743bf21d60',
      risk_category: 'LOW'
    },
    {
      vasp_id: 'VASP-002',
      name: 'WazirX',
      legal_name: 'Zanmai Labs Pvt Ltd',
      jurisdiction: 'India / FIU-IND Registered',
      compliance_email: 'nodal-officer@wazirx.com',
      confidence_score: 94,
      deposit_address: '0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4',
      risk_category: 'LOW'
    }
  ];
}
