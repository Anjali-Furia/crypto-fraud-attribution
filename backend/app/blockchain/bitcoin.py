from app.blockchain.base import BaseBlockchainProvider
from typing import Dict, Any, List
import datetime

class BitcoinProvider(BaseBlockchainProvider):
    def get_wallet_info(self, address: str) -> Dict[str, Any]:
        return {
            "address": address,
            "blockchain": "bitcoin",
            "balance": "0.85 BTC",
            "tx_count": 12,
            "first_tx_time": "2026-07-01T08:00:00Z",
            "last_tx_time": "2026-09-03T11:20:00Z"
        }
        
    def get_transactions(self, address: str, limit: int = 10) -> List[Dict[str, Any]]:
        return [
            {
                "tx_hash": f"btc_{address[:8]}_tx1",
                "blockchain": "bitcoin",
                "from_address": address,
                "to_address": "1NDyJtNTjW415n58D6M414UX6P24yAQy29",
                "amount": 0.82,
                "asset": "BTC",
                "timestamp": datetime.datetime.utcnow().isoformat() + "Z"
            }
        ]
