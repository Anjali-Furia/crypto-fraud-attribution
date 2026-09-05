# Real-Time Crypto Fraud Attribution & VASP Identification System

An automated blockchain analytics and intelligence platform built for the **Indian Cyber Crime Coordination Centre (I4C), CIS Division, Ministry of Home Affairs**.

![MHA / I4C Cyber Crime Prevention](https://img.shields.io/badge/I4C-Ministry%20of%20Home%20Affairs-orange)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20FastAPI%20%7C%20TypeScript%20%7C%20Python-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📌 Problem Statement Overview
Cyber fraud victims increasingly report suspect cryptocurrency wallet addresses used by fraudsters in investment scams, task frauds, ransomware, sextortion, and phishing. Investigating officers face challenges with non-custodial, temporary burner, or intermediary layering wallets.

This platform automatically analyzes victim-reported suspect wallet addresses, traces multi-hop/cross-chain transaction flows, clusters entity wallets, detects laundering typologies, identifies the destination **VASP (Cryptocurrency Exchange)** receiving direct deposits, and generates standardized legal investigation reports & Section 91 CrPC freeze request notices.

---

## 🏗 System Architecture & Directory Structure

```text
crypto-fraud-attribution/
├── frontend/             # Vite + React 18 + TypeScript + Tailwind CSS
│   ├── src/
│   │   ├── components/   # Layout, Dashboard, Wallet, Graph, Risk, VASP modules
│   │   ├── pages/        # Login, Dashboard, WalletAnalysis, TransactionExplorer, etc.
│   │   ├── services/     # API service layer
│   │   └── types/        # TypeScript interfaces
├── backend/              # Python FastAPI REST API Backend
│   ├── app/
│   │   ├── api/          # Wallet, Transactions, Risk, VASP, Alerts, Reports routes
│   │   ├── blockchain/   # Ethereum, Bitcoin, Solana multi-chain handlers
│   │   ├── analysis/     # Fund flow graph & intermediary detection logic
│   │   ├── ml/           # Machine learning risk classification engine
│   │   ├── vasp/         # Exchange signature database & attribution logic
│   │   └── reports/      # PDF & text legal report generator
├── data/                 # Indexed wallets, transactions, & VASP databases
├── ml_models/            # Trained risk evaluation model
└── docker-compose.yml    # Container orchestration
```

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18+) & npm
- Python (v3.9+) & pip

### 1. Run Backend Server (FastAPI)
```bash
cd backend
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
python -m app.main
```
> Backend runs at `http://localhost:8000` (Swagger UI at `http://localhost:8000/docs`)

### 2. Run Frontend Web App (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
> Frontend runs at `http://localhost:5173`

---

## 🔍 Key Capabilities
- **Multi-Chain Tracing**: Supports Ethereum (ETH), Bitcoin (BTC), Solana (SOL), Polygon (MATIC), BNB Smart Chain (BSC).
- **Automated VASP Attribution**: Identifies Binance, CoinDCX, WazirX, Coinbase, Kraken, OKX, Bybit, KuCoin with confidence scores.
- **Interactive Graph Visualizer**: Drag-and-drop interactive fund-flow graph with node color-coding (Victim, Suspect, Intermediary, Exchange).
- **ML Laundering Detection**: Detects peeling chains, rapid fund splitting, mixer/tumbler usage, and cross-chain bridge swaps.
- **Standardized Legal PDF Reports**: One-click generation of evidence summary and ready-to-issue VASP Sec 91 CrPC Freeze Request Notices.
