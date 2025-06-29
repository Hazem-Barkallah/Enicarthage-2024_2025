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

    fs.createReadStream('Schema_v1.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            try {
                await Student.deleteMany({});
                await Student.insertMany(results);
                console.log(`✅ Inserted ${results.length} students`);
                mongoose.disconnect();
            } catch (error) {
                console.error('❌ Insert error:', error);
                mongoose.disconnect();
            }
        });
}
