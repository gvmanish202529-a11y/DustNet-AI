from fastapi import FastAPI

app = FastAPI(
    title="DustNet AI Backend",
    version="1.0.0"
)


@app.get("/")
def home():
    return {"message": "DustNet AI Backend is running 🚀"}