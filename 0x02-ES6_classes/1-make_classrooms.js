import ClassRoom from './0-classroom';
/**
 * @returns group of three created Classrooms
 */
function initializeRoom() {
    let data = [19, 20, 34]
    let rows ={};

  rows = data.map((age) => new ClassRoom(age))
   return rows;
 
}
export default initializeRoom;
