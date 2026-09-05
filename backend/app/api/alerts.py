from fastapi import APIRouter
from typing import List, Dict, Any

router = APIRouter()

@router.get("/")
def get_alerts():
    return [
        {
            "id": "ALT-1092",
            "timestamp": "2026-09-05T15:40:00Z",
            "title": "High Volume VASP Off-Ramp Detected",
            "severity": "CRITICAL",
            "wallet": "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
            "vasp": "Binance",
            "amount_inr": "₹ 37,12,500",
            "status": "UNREAD"
        },
        {
            "id": "ALT-1091",
            "timestamp": "2026-09-05T14:10:00Z",
            "title": "Layering Hop Forwarded",
            "severity": "HIGH",
            "wallet": "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7",
            "vasp": "CoinDCX",
            "amount_inr": "₹ 12,40,000",
            "status": "ACKNOWLEDGED"
        }
    ]
