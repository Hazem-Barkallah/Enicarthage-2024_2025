const Student = require('../models/Student');
const mongoose = require('mongoose');
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find({}).sort({lastname: 1});
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports={
    getAllStudents
}