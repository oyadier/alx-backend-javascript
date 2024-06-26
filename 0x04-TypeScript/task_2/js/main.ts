interface DirectorInterface {
    workFromHome():string;
    getCoffeeBreak():string;
    workDirectorTasks():string;
}

interface TeacherInterface {
    workFromHome():string;
    getCoffeeBreak():string;
    workTeacherTasks():string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
return 'Working from home'
    }
    getCoffeeBreak(): string {
return 'Getting a coffer break'
    }
    workDirectorTasks(): string {
return 'Getting to work'
    }
    
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
return 'Cannot work from home'
    }
    getCoffeeBreak(): string {
return 'Getting a coffee break'
    }
    workTeacherTasks(): string {
        throw new Error("Method not implemented.");
    }

}

function createEmployee(salary:any):Director | Teacher{
    if (typeof salary === 'number' && salary < 500)
        {
            return new Teacher;
        }else
    return new Director;
}


function isDirector(employee:any):boolean {

return (employee instanceof Director)
}

function executework(employee:any){
    if (employee instanceof Director)
        {
            employee.workDirectorTasks();
        }
        if (employee instanceof Teacher)
            {
                employee.workTeacherTasks();
            }  

}

type Subjects = 'Math' | 'History';


function teachClass(todayClass:Subjects):string{

    if (todayClass === 'Math'){
        return 'Teaching Math';
    }
    if (todayClass === 'History'){
        
         return 'Teaching History'
    }
   
}