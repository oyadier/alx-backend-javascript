function updateStudentGradeByCity(studentList, city, newGrades) {
  if (studentList instanceof Array) {
    return studentList.filter((student) => student.location === city)
      .map((stu) => ({
        id: stu.id,
        firstName: stu.firstName,
        location: stu.location,
        grade: (newGrades.filter((grade) => grade.studentId === stu.id).pop() || { grade: 'N/A' }).grade,
      }));
  }
  return [];
}
export default updateStudentGradeByCity;
