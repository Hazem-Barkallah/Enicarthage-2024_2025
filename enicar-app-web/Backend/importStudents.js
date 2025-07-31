require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('csv-parser');
const Student = require('./models/Student');

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB');
        importCSV();
    })
    .catch(err => console.error('❌ DB Error:', err));

function importCSV() {
    const results = [];

    fs.createReadStream('Info_1ere.csv')
        .pipe(csv())
        .on('data', (data) => {
            const student = {
                studentNum: data.studentNum,
                firstname: data.firstname,
                lastname: data.lastname,
                gpa: parseFloat(data.gpa),
                level: data.level,
                group: data.group,
                passed: data.passed,
                grades: {}
            };

            for (const [key, value] of Object.entries(data)) {
                if (key.startsWith('cc_') || key.startsWith('exam_') || key.startsWith('moy_')) {
                    student.grades[key] = parseFloat(value) || 0;
                }
            }

            results.push(student);
        })
        .on('end', async () => {
            try {
                await Student.deleteMany({});
                await Student.insertMany(results);
                console.log('First raw row from CSV (transformed):', results[0]);
                console.log(`✅ Inserted ${results.length} students`);
                mongoose.disconnect();
            } catch (error) {
                console.error('❌ Insert error:', error);
                mongoose.disconnect();
            }
        });
}
