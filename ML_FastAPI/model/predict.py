import joblib
import numpy as np
from schemas.studentInput import StudentInput

model = joblib.load("model/model.pkl")

def predict(input_features: StudentInput) -> dict:
    features_list = list(input_features.model_dump().values())
    features_array = np.array(features_list).reshape(1, -1)
    prediction = model.predict(features_array)[0]
    probability = model.predict_proba(features_array)[0][0]

    return {
        "success": "Success" if prediction == 'A' else "No success",
        "probability": round(probability, 3),
    }
