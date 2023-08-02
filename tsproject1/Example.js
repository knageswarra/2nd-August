"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mydemo6_1 = require("./mydemo6");
var mydemo6_2 = require("./mydemo6");
var RegularEmployee_1 = require("./RegularEmployee");
var student = new mydemo6_2.Student('John', 'Doe', 'john@email.com', new mydemo6_1.Address('India', 'Kolkata', 'Kolkata'));
var employee = new RegularEmployee_1.RegularEmployee(10000, 'John', 'Doe');
console.log(employee.getDetails());
console.log(student.getDetails());
