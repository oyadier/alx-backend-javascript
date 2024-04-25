import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const maxStudentsSizes = [19, 20, 34];

  // Create an array of ClassRoom objects with different _maxStudentsSize values
  const classrooms = maxStudentsSizes.map((size) => new ClassRoom(size));

  return classrooms;
}
