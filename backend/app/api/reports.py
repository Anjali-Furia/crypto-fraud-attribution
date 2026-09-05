from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
import os
from typing import Dict, Any
from app.reports.generator import report_generator
from app.utils.config import config

router = APIRouter()

@router.post("/generate")
def generate_report(payload: Dict[str, Any]):
    return report_generator.generate_pdf_report(payload)

@router.get("/download/{filename}")
def download_report(filename: str):
    file_path = os.path.join(config.REPORTS_DIR, filename)
    if os.path.exists(file_path):
        return FileResponse(file_path, filename=filename, media_type="text/plain")
    raise HTTPException(status_code=404, detail="Report file not found")
