from pydantic import BaseModel

class PredictionResult(BaseModel):
    success: str
    probability: float