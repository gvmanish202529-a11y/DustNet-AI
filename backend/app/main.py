from fastapi import FastAPI
from app.routers import dashboard
from app.database.database import Base, engine
from app.routers import auth

import app.models

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="DustNet AI API",
    version="1.0.0"
)

app.include_router(auth.router)
app.include_router(dashboard.router)

@app.get("/")
def home():
    return {
        "message": "DustNet AI Backend Running"
    }