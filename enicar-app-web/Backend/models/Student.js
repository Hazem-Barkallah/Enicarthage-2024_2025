const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentNum: String,
    firstname: String,
    lastname: String,
    gpa: Number,
    level: String,
    group: String,
    passed: String,
    grades: {
        type: Map,
        of: Number,
    },
});

module.exports = mongoose.model('Student', studentSchema);
