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

const getStudentById = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid student ID' });
        }
        const student = await Student.findById(id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const createStudent = async (req, res) => {
    const { studentNum, firstname, lastname, gpa, level, group } = req.body;

    try {
        const student = await Student.create({ studentNum, firstname, lastname, gpa, level, group });
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { studentNum, firstname, lastname, gpa, level, group } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid student ID' });
        }
        const student = await Student.findByIdAndUpdate(id, { studentNum, firstname, lastname, gpa, level, group }, { new: true });
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid student ID' });
        }
        const student = await Student.findByIdAndDelete(id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }}
module.exports={
    getAllStudents,getStudentById,createStudent,deleteStudent,updateStudent
}