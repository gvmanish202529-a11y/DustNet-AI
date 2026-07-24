from fastapi import FastAPI

from app.database.database import engine
from app.database.base import Base
from app.routers.auth import router as auth_router

app = FastAPI(
    title="DustNet AI Backend",
    description="Industrial Rover Management Platform",
    version="1.0.0"
)

Base.metadata.create_all(bind=engine)

app.include_router(auth_router)


@app.get("/")
async def root():
    return {
        "message": "DustNet AI Backend Running Successfully"
    }