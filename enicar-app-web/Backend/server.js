require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(cors({origin: 'http://localhost:5173',credentials: true}));
const studentsRouter = require('./routes/Students');
const predictRouter = require('./routes/predict');
const authRoutes = require("./routes/Auth");
app.use(express.json());
app.use('/api/students', studentsRouter);
app.use('/api', predictRouter);
app.use('/api/auth', authRoutes);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Database connected and Server is running on port ', process.env.PORT);
        })
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });