export default function createReportObject(employeesList) {
  const employees = {};
  employees.allEmployees = employeesList;
  /* employees['getNumberOfDepartments'] = function (employe){
    return Object.keys(employe).length;
   } */
  // Creating function for an object. using array function returning the length of an array
  employees.getNumberOfDepartments = (em) => Object.keys(em).length;
  return employees;
}
