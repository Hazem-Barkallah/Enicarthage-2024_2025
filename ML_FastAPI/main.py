from fastapi import FastAPI
from model.predict import predict
from schemas.predictionResult import PredictionResult
from schemas.studentInput import StudentInput
from pydantic import BaseModel

app = FastAPI()


class PredictionResponse(BaseModel):
    prediction: PredictionResult

@app.post("/predict", response_model=PredictionResponse)
def predict_student(input_data: StudentInput):
    pred = predict(input_data)
    return PredictionResponse(prediction=pred)
