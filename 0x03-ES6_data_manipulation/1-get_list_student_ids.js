/**
 *
 * @param {list} studentList
 * @returns list of all ids from the students list
 */
function getListStudentIds(studentList) {
  /**
     * checks if the {@studentsList} is an array
     */
  if (!Array.isArray(studentList)) {
    return [];
  }

  return studentList.map((student) => student.id);
}
export default getListStudentIds;
