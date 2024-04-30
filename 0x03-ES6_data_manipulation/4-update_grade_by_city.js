/**
 * 
 * @param {Number} studentId 
 * @param {*Grade Objects} grades 
 * @returns 
 */
const findGrade = (studentId, grades) => {
  const grade = grades.find((grade) => grade.id === studentId);
  return grade ? grade.grade : 'N/A';
};
/**
 *
 * @param {Array of obj} studentList
 * @param {*String } city location of students
 * @param {*Array} newGrade objects that contains grades by Id
 * @returns array of students contain grades
 */

function updateStudentGradeByCity(studentList, city, newGrade) {
  return studentList
    .map((value) => ({
      ...value,

      grade: findGrade(studentList.id, newGrade),
    }))
    .filter((student) => student.location === city);
}
export default updateStudentGradeByCity;
