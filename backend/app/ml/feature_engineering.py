from typing import Dict, Any, List

class FeatureEngineer:
    def extract_features(self, wallet_address: str, transactions: List[Dict[str, Any]]) -> Dict[str, float]:
        tx_count = len(transactions)
        return {
            "fan_out_ratio": 0.85,
            "velocity_tx_per_min": 0.45,
            "layer_depth": 3.0,
            "mixer_interaction": 0.0,
            "cross_chain_bridge": 1.0 if tx_count > 5 else 0.0,
            "peeling_chain_flag": 1.0
        }

feature_engineer = FeatureEngineer()
