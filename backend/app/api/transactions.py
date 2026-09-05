from fastapi import APIRouter
from typing import List, Dict, Any
from app.database.models import db_manager

router = APIRouter()

@router.get("/")
def get_transactions():
    return db_manager.get_all_transactions()
