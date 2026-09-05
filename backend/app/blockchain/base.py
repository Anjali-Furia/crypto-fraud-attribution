from abc import ABC, abstractmethod
from typing import Dict, Any, List

class BaseBlockchainProvider(ABC):
    @abstractmethod
    def get_wallet_info(self, address: str) -> Dict[str, Any]:
        pass
        
    @abstractmethod
    def get_transactions(self, address: str, limit: int = 10) -> List[Dict[str, Any]]:
        pass
