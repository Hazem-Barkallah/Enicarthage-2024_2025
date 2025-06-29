require('dotenv').config();
const express= require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        app.listen(process.env.PORT, () => {
        console.log('Database connected and Server is running on port ',process.env.PORT);
        })
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });
const studentsRouter = require('./routes/Students');
app.use(express.json());
app.use('/api/students',studentsRouter);
