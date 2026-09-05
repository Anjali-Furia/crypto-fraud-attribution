from typing import Dict, Any, List
from app.database.models import db_manager

class VASPDatabaseManager:
    def get_vasp_by_address(self, address: str) -> Dict[str, Any]:
        vasps = db_manager.get_all_vasps()
        for vasp in vasps:
            for known_addr in vasp.get("known_addresses", []):
                if known_addr.lower() == address.lower():
                    return vasp
        # Fallback default match for demo if unlisted hot wallet address pattern
        return vasps[0] if vasps else None

    def get_all_vasps(self) -> List[Dict[str, Any]]:
        return db_manager.get_all_vasps()

vasp_db = VASPDatabaseManager()
