const fs = require('fs');
const csv = require('csv-parser');

function countStudents(dbpath) {
  if (!fs.existsSync(dbpath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(dbpath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const results = [];
  fs.createReadStream(dbpath)
    .pipe(csv())
    .on('data', (data) => {
      results.push(data);
    })
    .on('end', () => {
      try {
        const students = results;
        const CSstudents = students.filter((student) => student.field === 'CS');
        const SWEstudents = students.filter((student) => student.field === 'SWE');
        console.log(`Number of students: ${students.length - 1}`);
        console.log(`Number of students in CS: ${CSstudents.length}. List: ${CSstudents.map((student) => student.firstname).join(', ')}`);
        console.log(`Number of students in SWE: ${SWEstudents.length}. List: ${SWEstudents.map((student) => student.firstname).join(', ')}`);
      } catch (error) {
        throw new Error('Error processing the data:', error.message);
      }
    });
}

module.exports = countStudents;
