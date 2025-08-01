const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/predict', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:8000/predict', req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Error occurred while making prediction:', error);
        res.status(500).json({ error: 'An error occurred while making prediction.' });
    }
});
module.exports = router;

