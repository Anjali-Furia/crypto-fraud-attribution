import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    PORT = int(os.getenv("PORT", 8000))
    HOST = os.getenv("HOST", "0.0.0.0")
    ENV = os.getenv("ENV", "development")
    APP_NAME = os.getenv("APP_NAME", "I4C Crypto Fraud Intelligence & VASP Attribution Engine")
    
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    DATA_DIR = os.path.join(BASE_DIR, "data")
    ML_MODELS_DIR = os.path.join(BASE_DIR, "ml_models")
    REPORTS_DIR = os.path.join(BASE_DIR, "reports", "generated")

config = Config()
