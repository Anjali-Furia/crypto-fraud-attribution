from typing import Dict, Any, List

class IntermediaryDetector:
    def detect_intermediaries(self, wallet_address: str) -> List[Dict[str, Any]]:
        return [
            {
                "address": "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7",
                "role": "Layering Wallet / Rapid Pass-Through",
                "holding_time_minutes": 12,
                "fan_out_degree": 1,
                "risk_score": 88
            }
        ]

intermediary_detector = IntermediaryDetector()
