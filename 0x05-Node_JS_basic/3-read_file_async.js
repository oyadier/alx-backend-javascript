const fs = require('fs');
const csv = require('csv-parser');

function countStudents(dbfile) {
  const result = [];
  const promise = new Promise((resolve, reject) => {
    if (!fs.existsSync(dbfile)) {
      throw new Error('Cannot load the database');
    }
    if (!fs.statSync(dbfile).isFile()) {
      throw new Error('Cannot load the database');
    }
    fs.createReadStream(dbfile)
      .pipe(csv())
      .on('data', (data) => {
        result.push(data);
      })
      .on('end', () => {
        try {
          const allStudent = result;
          const cs = allStudent.filter((student) => student.field === 'CS').map((name) => name.firstname).join(', ');
          const SWE = allStudent.filter((student) => student.field === 'SWE').map((name) => name.firstname).join(', ');

          console.log(`Number of students: ${allStudent.length}`);
          console.log(`Number of students: ${cs.length}. List: ${cs}`);
          console.log(`Number of students: ${SWE.length}. List: ${SWE}`);
          resolve();
        } catch (err) {
          reject(new Error('Cannot load the database'));
        }
      })
      .on('error', (error) => {
        reject(new Error(`Cannot load the database: ${error.message}`));
      });
  });

  return promise;
}
module.exports = countStudents;
