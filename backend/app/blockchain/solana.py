from app.blockchain.base import BaseBlockchainProvider
from typing import Dict, Any, List
import datetime

class SolanaProvider(BaseBlockchainProvider):
    def get_wallet_info(self, address: str) -> Dict[str, Any]:
        return {
            "address": address,
            "blockchain": "solana",
            "balance": "145.20 SOL",
            "tx_count": 89,
            "first_tx_time": "2026-08-01T09:00:00Z",
            "last_tx_time": "2026-09-05T10:15:00Z"
        }
        
    def get_transactions(self, address: str, limit: int = 10) -> List[Dict[str, Any]]:
        return [
            {
                "tx_hash": f"sol_{address[:8]}_tx1",
                "blockchain": "solana",
                "from_address": address,
                "to_address": "5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1",
                "amount": 140.0,
                "asset": "SOL",
                "timestamp": datetime.datetime.utcnow().isoformat() + "Z"
            }
        ]
