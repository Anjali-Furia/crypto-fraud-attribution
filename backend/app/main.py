from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.utils.config import config
from app.utils.logger import logger
from app.api import wallet, transactions, risk, vasp, alerts, reports

app = FastAPI(
    title=config.APP_NAME,
    description="Real-Time Identification of Fraud-Linked Cryptocurrency Exchanges from Victim-Reported Suspect Wallet Addresses through Automated Blockchain Analytics",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(wallet.router, prefix="/api/wallet", tags=["Wallet Analysis"])
app.include_router(transactions.router, prefix="/api/transactions", tags=["Transactions"])
app.include_router(risk.router, prefix="/api/risk", tags=["Risk Evaluation"])
app.include_router(vasp.router, prefix="/api/vasp", tags=["VASP Attribution"])
app.include_router(alerts.router, prefix="/api/alerts", tags=["LEA Alerts"])
app.include_router(reports.router, prefix="/api/reports", tags=["Investigation Reports"])

@app.get("/")
def health_check():
    return {
        "status": "ONLINE",
        "system": config.APP_NAME,
        "organization": "Indian Cyber Crime Coordination Centre (I4C), CIS Division, MHA",
        "version": "1.0.0"
    }

if __name__ == "__main__":
    import uvicorn
    logger.info(f"Starting backend server on {config.HOST}:{config.PORT}...")
    uvicorn.run("app.main:app", host=config.HOST, port=config.PORT, reload=True)
