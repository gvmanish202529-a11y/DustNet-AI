from fastapi import APIRouter

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)

@router.get("/")
def get_dashboard():
    return {
        "active_rovers": 3,
        "battery_average": 84,
        "dust_collected": 124,
        "ai_detections": 163
    }