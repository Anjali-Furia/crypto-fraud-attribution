export interface Wallet {
  address: string;
  blockchain: string;
  label?: string;
  type: 'victim' | 'suspect' | 'intermediary' | 'vasp' | 'genesis' | 'defi_protocol';
  risk_score: number;
  risk_level: 'SAFE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  total_received?: string;
  total_sent?: string;
  vasp_name?: string;
}

export interface VASPMatch {
  vasp_id: string;
  name: string;
  legal_name: string;
  jurisdiction: string;
  compliance_email: string;
  confidence_score: number;
  deposit_address: string;
  risk_category: string;
}

export interface Transaction {
  tx_hash: string;
  blockchain: string;
  from_address: string;
  to_address: string;
  amount: number;
  asset: string;
  amount_inr: number;
  timestamp: string;
  block_number: number;
  hop_level: number;
  status: string;
}

export interface RiskIndicator {
  id: string;
  title: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  description: string;
}

export interface GraphNode {
  id: string;
  label: string;
  group: string;
  risk?: string;
  vasp_name?: string;
}

export interface GraphEdge {
  from: string;
  to: string;
  label: string;
  value?: number;
  hash?: string;
}

export interface AnalysisResponse {
  wallet: Wallet;
  vasp_matched: VASPMatch;
  risk_indicators: RiskIndicator[];
  nodes: GraphNode[];
  edges: GraphEdge[];
}
