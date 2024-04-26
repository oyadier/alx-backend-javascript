import ClassRoom from './0-classroom';
/**
 * @returns group of three created Classrooms
 */
function initializeRoom() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
export default initializeRoom;
