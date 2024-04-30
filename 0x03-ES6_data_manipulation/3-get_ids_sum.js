/**
 *
 * @param {Array of objects} studentList
 * @returns accumulation(sum) of the ids
 */
function getListStudentIdsSum(studentList) {
  const sum = studentList.reduce((pv, cv) => pv + cv.id, 0);

  return sum;
}

export default getListStudentIdsSum;
