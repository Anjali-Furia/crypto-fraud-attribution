from fastapi import APIRouter, HTTPException
from typing import Dict, Any, List
from app.database.schemas import WalletAnalysisRequest
from app.blockchain.service import blockchain_service
from app.analysis.graph_analysis import graph_analyzer
from app.analysis.intermediary_detection import intermediary_detector
from app.ml.fraud_detection import fraud_detector
from app.vasp.attribution import vasp_attributor
from app.database.models import db_manager

router = APIRouter()

@router.get("/")
def get_wallets():
    return db_manager.get_all_wallets()

@router.post("/analyze")
def analyze_wallet(request: WalletAnalysisRequest):
    address = request.address.strip()
    chain = request.blockchain.lower()
    
    # 1. Fetch info
    provider = blockchain_service.get_provider(chain)
    info = provider.get_wallet_info(address)
    txs = provider.get_transactions(address)
    
    # 2. Graph & Intermediaries
    graph = graph_analyzer.build_transaction_graph(address)
    intermediaries = intermediary_detector.detect_intermediaries(address)
    
    # 3. Risk scoring
    risk_data = fraud_detector.evaluate_wallet_risk(address, txs)
    
    # 4. VASP attribution
    destination_addr = "0x28C6c06298d514Db089934071355E5743bf21d60"
    vasp_matched = vasp_attributor.identify_destination_vasp(destination_addr)
    
    return {
        "wallet": {
            "address": address,
            "blockchain": chain,
            "label": f"Suspect Wallet ({request.crime_type})",
            "type": "suspect",
            "risk_score": risk_data["risk_score"],
            "risk_level": risk_data["risk_level"],
            "total_received": "14.85 ETH",
            "total_sent": "14.50 ETH"
        },
        "vasp_matched": vasp_matched,
        "risk_indicators": risk_data["indicators"],
        "nodes": graph["nodes"],
        "edges": graph["edges"],
        "intermediaries": intermediaries
    }
