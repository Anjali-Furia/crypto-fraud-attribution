from app.blockchain.base import BaseBlockchainProvider
from typing import Dict, Any, List
import datetime

class EthereumProvider(BaseBlockchainProvider):
    def get_wallet_info(self, address: str) -> Dict[str, Any]:
        return {
            "address": address,
            "blockchain": "ethereum",
            "balance": "4.25 ETH",
            "tx_count": 34,
            "first_tx_time": "2026-08-10T14:30:00Z",
            "last_tx_time": "2026-09-04T18:40:00Z"
        }
        
    def get_transactions(self, address: str, limit: int = 10) -> List[Dict[str, Any]]:
        return [
            {
                "tx_hash": f"0x{address[:8]}...tx1",
                "blockchain": "ethereum",
                "from_address": address,
                "to_address": "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7",
                "amount": 14.50,
                "asset": "ETH",
                "timestamp": datetime.datetime.utcnow().isoformat() + "Z"
            }
        ]
