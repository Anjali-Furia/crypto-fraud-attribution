from app.blockchain.ethereum import EthereumProvider
from app.blockchain.bitcoin import BitcoinProvider
from app.blockchain.solana import SolanaProvider

class BlockchainService:
    def __init__(self):
        self.providers = {
            "ethereum": EthereumProvider(),
            "bitcoin": BitcoinProvider(),
            "solana": SolanaProvider()
        }
        
    def get_provider(self, chain: str):
        return self.providers.get(chain.lower(), self.providers["ethereum"])

blockchain_service = BlockchainService()
