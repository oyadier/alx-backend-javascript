import game_objects from "./objects";


class SelectedObject{
    constructor(){

    }

selecteObject(user){
 //   const ran = Math.floor(Math.random() * 3)
    return game_objects[parseInt(user)];
}

computerObject(){
    const cmp = Math.floor(Math.random() * 3);
    console.log(cmp)
    return game_objects[parseInt(cmp)];
}
}




export default SelectedObject;