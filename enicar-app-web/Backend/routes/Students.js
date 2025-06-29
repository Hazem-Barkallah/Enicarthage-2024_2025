const express = require('express');
const {getAllStudents, getStudentById, createStudent,deleteStudent,updateStudent} = require('../controllers/studentController');
const router = express.Router();
router.get('/',getAllStudents);
router.get('/:id', getStudentById);
router.post('/', createStudent);
router.patch('/:id', updateStudent);
router.delete('/:id', deleteStudent);
module.exports=router;