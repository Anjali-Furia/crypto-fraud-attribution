# In-memory ORM / JSON file database manager
import json
import os
from typing import List, Dict, Any
from app.utils.config import config
from app.utils.logger import logger

class JSONDatabaseManager:
    def __init__(self):
        self.wallets_file = os.path.join(config.DATA_DIR, "wallets.json")
        self.transactions_file = os.path.join(config.DATA_DIR, "transactions.json")
        self.vasp_file = os.path.join(config.DATA_DIR, "vasp_wallets.json")
        
    def get_all_wallets(self) -> List[Dict[str, Any]]:
        if os.path.exists(self.wallets_file):
            with open(self.wallets_file, "r") as f:
                return json.load(f)
        return []

    def get_all_transactions(self) -> List[Dict[str, Any]]:
        if os.path.exists(self.transactions_file):
            with open(self.transactions_file, "r") as f:
                return json.load(f)
        return []

    def get_all_vasps(self) -> List[Dict[str, Any]]:
        if os.path.exists(self.vasp_file):
            with open(self.vasp_file, "r") as f:
                return json.load(f)
        return []

db_manager = JSONDatabaseManager()
