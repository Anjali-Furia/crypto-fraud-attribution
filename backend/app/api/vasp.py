from fastapi import APIRouter
from typing import List, Dict, Any
from app.vasp.database import vasp_db
from app.vasp.attribution import vasp_attributor

router = APIRouter()

@router.get("/")
def get_all_vasps():
    return vasp_db.get_all_vasps()

@router.get("/identify/{address}")
def identify_vasp(address: str):
    return vasp_attributor.identify_destination_vasp(address)
