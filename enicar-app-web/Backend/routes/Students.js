const express = require('express');
const {getAllStudents} = require('../controllers/studentController');
const router = express.Router();
router.get('/',getAllStudents);

module.exports=router;