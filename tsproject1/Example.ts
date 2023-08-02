import { Address } from "./mydemo6";

import { HourlyPaidEmployee } from "./HourlyPaidEmployee";

import { Student } from "./mydemo6";

import { RegularEmployee } from "./RegularEmployee";

 

let student=new Student('John','Doe','john@email.com',new Address('India','Kolkata','Kolkata'));

let employee=new RegularEmployee(10000,'John','Doe');
console.log(employee.getDetails());
console.log(student.getDetails());