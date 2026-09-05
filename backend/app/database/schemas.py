from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any

class WalletBase(BaseModel):
    address: str
    blockchain: str
    label: Optional[str] = "Suspect Wallet"
    type: str = "suspect"
    risk_score: float = 0.0
    risk_level: str = "SAFE"
    total_received: Optional[str] = "0.0 ETH"
    total_sent: Optional[str] = "0.0 ETH"

class WalletAnalysisRequest(BaseModel):
    address: str
    blockchain: str = "ethereum"
    case_number: Optional[str] = "NCRP-2026-PRESET"
    crime_type: Optional[str] = "Task Scam / Investment Fraud"
    depth_hops: int = 4

class TransactionSchema(BaseModel):
    tx_hash: str
    blockchain: str
    from_address: str
    to_address: str
    amount: float
    asset: str
    amount_inr: float
    timestamp: str
    block_number: int
    hop_level: int
    status: str = "CONFIRMED"

class VASPMatch(BaseModel):
    vasp_id: str
    name: str
    legal_name: str
    jurisdiction: str
    compliance_email: str
    confidence_score: float
    deposit_address: str
    risk_category: str

class RiskIndicator(BaseModel):
    id: str
    title: str
    severity: str
    description: str

class AnalysisResult(BaseModel):
    wallet: WalletBase
    vasp_matched: Optional[VASPMatch] = None
    transactions: List[TransactionSchema] = []
    risk_indicators: List[RiskIndicator] = []
    nodes: List[Dict[str, Any]] = []
    edges: List[Dict[str, Any]] = []
