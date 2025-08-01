export const getPredictions = async () => {
    try {
        const response = await fetch('/api/predict');
        const prediction = await response.json();
        return prediction;
    } catch (error) {
        console.error(error);
    }
};
