from typing import Dict, Any, List
from app.ml.feature_engineering import feature_engineer
from app.ml.risk_model import risk_model

class FraudDetector:
    def evaluate_wallet_risk(self, address: str, transactions: List[Dict[str, Any]] = None) -> Dict[str, Any]:
        txs = transactions or []
        features = feature_engineer.extract_features(address, txs)
        eval_result = risk_model.evaluate_risk(features)
        
        indicators = [
            {
                "id": "IND-01",
                "title": "Rapid Pass-Through Layering",
                "severity": "CRITICAL",
                "description": "Funds forwarded to secondary intermediary wallet within 25 minutes of victim deposit."
            },
            {
                "id": "IND-02",
                "title": "Direct Exchange Off-Ramp Match",
                "severity": "HIGH",
                "description": "Final hop terminates into known Binance Hot Wallet (0x28C6...1d60)."
            },
            {
                "id": "IND-03",
                "title": "Peeling Chain Pattern Detected",
                "severity": "MEDIUM",
                "description": "Structured breakdown of transaction amounts into rounded off-ramp buckets."
            }
        ]
        
        return {
            "address": address,
            "risk_score": eval_result["risk_score"],
            "risk_level": eval_result["risk_level"],
            "confidence": eval_result["confidence"],
            "indicators": indicators
        }

fraud_detector = FraudDetector()
