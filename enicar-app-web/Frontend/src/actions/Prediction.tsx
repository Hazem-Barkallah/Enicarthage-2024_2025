import axios from "axios";

export const getPredictions = async (grades: Record<string, number>) => {
    try {
        const response = await axios.post("/api/predict", grades);
        return response.data;
    } catch (error) {
        console.error("Error while fetching prediction:", error);
        throw error;
    }
};
