from typing import Dict, Any, List

class GraphAnalyzer:
    def build_transaction_graph(self, wallet_address: str) -> Dict[str, Any]:
        nodes = [
            {"id": "node_victim", "label": "Victim Wallet\n(0x4838...5f97)", "group": "victim", "risk": "SAFE"},
            {"id": "node_suspect", "label": f"Suspect Wallet\n({wallet_address[:8]}...)", "group": "suspect", "risk": "CRITICAL"},
            {"id": "node_inter1", "label": "Layering Wallet #1\n(0x8920...43e7)", "group": "intermediary", "risk": "HIGH"},
            {"id": "node_vasp", "label": "Binance 14\n(Deposit Hot Wallet)", "group": "vasp", "risk": "LOW", "vasp_name": "Binance"}
        ]
        
        edges = [
            {"from": "node_victim", "to": "node_suspect", "label": "14.85 ETH\n(Hop 1)", "value": 14.85, "hash": "0x9a8b7c..."},
            {"from": "node_suspect", "to": "node_inter1", "label": "14.50 ETH\n(Hop 2)", "value": 14.50, "hash": "0x1f2e3d..."},
            {"from": "node_inter1", "to": "node_vasp", "label": "14.25 ETH\n(Hop 3)", "value": 14.25, "hash": "0xfeef00..."}
        ]
        
        return {"nodes": nodes, "edges": edges}

graph_analyzer = GraphAnalyzer()
