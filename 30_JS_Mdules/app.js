//Modules
//key word to access the file outside the file is
/*
import->this is use to import  other class from other file
export->this class use in some other file
*/

import {Employee} from "./employees/Employees.js";
let employee=new Employee('rahul','kumar','21','manager');
employee.greet();


import {Person} from "./persons/Personjs.js";
let person=new Person('Rahul','kumar');
person.greet();

import {Customers} from "./customers/Customers.js";
let customer=new Customers('Rahul','kumar','21','chandigarh');
customer.greet();