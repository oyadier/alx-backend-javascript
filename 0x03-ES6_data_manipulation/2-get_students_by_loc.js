/**
 *
 * @param {Array of Objects} studentList
 * @param {String} city of the student
 * @returns list objects by location
 */

function getListStudentLocation(studentList, city) {
  return studentList.filter((students) => students.location === city);
  studentList.reduce()
}
export default getListStudentLocation;
