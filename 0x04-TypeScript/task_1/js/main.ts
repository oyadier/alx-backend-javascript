

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}


interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeachFunction{
  (firstName: string, lastName: string): void;
}

const printTeacher: printTeachFunction = (fName, lName) => { return (`${fName[0]}. ${lName}`)};


/**
 * Student interface to be implemented by a class
 */
export interface IStudentInterface{
    firstName: string;
    lastName: string;
    workONHomeWork():string;
    displayName():string;

}
/**
 * A class that implement all the attribute of the interface
 */
class StudentClass implements IStudentInterface{
    firstName:string;
    lastName:string;
    

    constructor(firstName:string, lastName: string){

        this.firstName = firstName;
        this.lastName = lastName;

    }

    workONHomeWork():string{

        return 'Currently Working'

    }

    displayName():string{

        return this.firstName;
    }
}
