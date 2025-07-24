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
    passed: {
        type: String,
        required: true
    },
    cc_math_ing: {
        type: Number,
        required: true
    },
    exam_math_ing: {
        type: Number,
        required: true
    },
    moy_math_ing: {
        type: Number,
        required: true
    },
    cc_analyse_s1: {
        type: Number,
        required: true
    },
    exam_analyse_s1: {
        type: Number,
        required: true
    },
    moy_analyse_s1: {
        type: Number,
        required: true
    },
    cc_algo: {
        type: Number,
        required: true
    },
    exam_algo: {
        type: Number,
        required: true
    },
    moy_algo: {
        type: Number,
        required: true
    },
    cc_prog: {
        type: Number,
        required: true
    },
    exam_prog: {
        type: Number,
        required: true
    },
    moy_prog: {
        type: Number,
        required: true
    },
    cc_TIC: {
        type: Number,
        required: true
    },
    exam_TIC: {
        type: Number,
        required: true
    },
    moy_TIC: {
        type: Number,
        required: true
    },
    cc_logique: {
        type: Number,
        required: true
    },
    exam_logique: {
        type: Number,
        required: true
    },
    moy_logique: {
        type: Number,
        required: true
    },
    cc_GL: {
        type: Number,
        required: true
    },
    exam_GL: {
        type: Number,
        required: true
    },
    moy_GL: {
        type: Number,
        required: true
    },
    cc_circuit: {
        type: Number,
        required: true
    },
    exam_circuit: {
        type: Number,
        required: true
    },
    moy_circuit: {
        type: Number,
        required: true
    },
    cc_semi: {
        type: Number,
        required: true
    },
    exam_semi: {
        type: Number,
        required: true
    },
    moy_semi: {
        type: Number,
        required: true
    },
    cc_eco_s1: {
        type: Number,
        required: true
    },
    exam_eco_s1: {
        type: Number,
        required: true
    },
    moy_eco_s1: {
        type: Number,
        required: true
    },
    cc_ang_s1: {
        type: Number,
        required: true
    },
    exam_ang_s1: {
        type: Number,
        required: true
    },
    moy_ang_s1: {
        type: Number,
        required: true
    },
    cc_fr_s1: {
        type: Number,
        required: true
    },
    exam_fr_s1: {
        type: Number,
        required: true
    },
    moy_fr_s1: {
        type: Number,
        required: true
    },
    cc_proba_stat: {
        type: Number,
        required: true
    },
    exam_proba_stat: {
        type: Number,
        required: true
    },
    moy_proba_stat: {
        type: Number,
        required: true
    },
    cc_analyse_s2: {
        type: Number,
        required: true
    },
    exam_analyse_s2: {
        type: Number,
        required: true
    },
    moy_analyse_s2: {
        type: Number,
        required: true
    },
    cc_structure: {
        type: Number,
        required: true
    },
    exam_structure: {
        type: Number,
        required: true
    },
    moy_structure: {
        type: Number,
        required: true
    },
    cc_POO: {
        type: Number,
        required: true
    },
    exam_POO: {
        type: Number,
        required: true
    },
    moy_POO: {
        type: Number,
        required: true
    },
    cc_archi: {
        type: Number,
        required: true
    },
    exam_archi: {
        type: Number,
        required: true
    },
    moy_archi: {
        type: Number,
        required: true
    },
    cc_reseau: {
        type: Number,
        required: true
    },
    exam_reseau: {
        type: Number,
        required: true
    },
    moy_reseau: {
        type: Number,
        required: true
    },
    cc_web: {
        type: Number,
        required: true
    },
    exam_web: {
        type: Number,
        required: true
    },
    moy_web: {
        type: Number,
        required: true
    },
    cc_BD: {
        type: Number,
        required: true
    },
    exam_BD: {
        type: Number,
        required: true
    },
    moy_BD: {
        type: Number,
        required: true
    },
    cc_conception: {
        type: Number,
        required: true
    },
    exam_conception: {
        type: Number,
        required: true
    },
    moy_conception: {
        type: Number,
        required: true
    },
    cc_eco_s2: {
        type: Number,
        required: true
    },
    exam_eco_s2: {
        type: Number,
        required: true
    },
    moy_eco_s2: {
        type: Number,
        required: true
    },
    cc_ang_s2: {
        type: Number,
        required: true
    },
    exam_ang_s2: {
        type: Number,
        required: true
    },
    moy_ang_s2: {
        type: Number,
        required: true
    },
    cc_fr_s2: {
        type: Number,
        required: true
    },
    exam_fr_s2: {
        type: Number,
        required: true
    },
    moy_fr_s2: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);