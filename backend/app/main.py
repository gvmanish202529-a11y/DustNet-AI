from fastapi import FastAPI

from app.database.database import engine
from app.database.base import Base

app = FastAPI(
    title="DustNet AI Backend",
    description="Industrial Rover Management Platform",
    version="1.0.0"
)

Base.metadata.create_all(bind=engine)


@app.get("/")
async def root():
    return {
        "message": "DustNet AI Backend Running Successfully"
    }