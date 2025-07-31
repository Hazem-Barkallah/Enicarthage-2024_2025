from pydantic import BaseModel

class PredictionResult(BaseModel):
    prediction: str
    probability: float