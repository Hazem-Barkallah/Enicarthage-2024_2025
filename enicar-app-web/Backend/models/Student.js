const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    studentNum: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    gpa: {
        type: Number,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true
    },

}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);