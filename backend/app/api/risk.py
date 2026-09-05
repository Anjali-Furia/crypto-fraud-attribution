from fastapi import APIRouter
from typing import Dict, Any
from app.ml.fraud_detection import fraud_detector

router = APIRouter()

@router.get("/{address}")
def get_wallet_risk(address: str):
    return fraud_detector.evaluate_wallet_risk(address)
