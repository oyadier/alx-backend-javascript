import ClassRoom from './0-classroom';

/**
 * Creates an array of {@link ClassRoom}s with a specific size.
 * @returns An array of {@link ClassRoom}s.
 */

export default function initializeRooms() {
  const maxStudentsSizes = [19, 20, 34];

  const classrooms = maxStudentsSizes.map((size) => new ClassRoom(size));

  return classrooms;
}
