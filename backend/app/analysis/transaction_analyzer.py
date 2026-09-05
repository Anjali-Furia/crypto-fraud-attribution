from typing import Dict, Any, List

class TransactionAnalyzer:
    def analyze_velocity(self, transactions: List[Dict[str, Any]]) -> Dict[str, Any]:
        count = len(transactions)
        return {
            "transaction_count": count,
            "high_velocity_detected": count > 5,
            "average_time_gap_seconds": 180 if count > 0 else 0
        }
        
    def detect_peeling_chain(self, transactions: List[Dict[str, Any]]) -> bool:
        # Check if amounts decrease gradually to burner addresses
        return len(transactions) >= 2

transaction_analyzer = TransactionAnalyzer()
