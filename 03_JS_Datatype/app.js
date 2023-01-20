/*
js data type
1) number
2)string
3)boolean
4)undefined
5)null

 */
//string
let employeeName = 'Rahul';
console.log(employeeName);
console.log(typeof employeeName);
console.log(`value is : ${employeeName} Type : ${typeof employeeName}`);

//number
let myAge=40;
console.log(`value is: ${myAge} Type is : ${typeof myAge}`);

//boolean
let isManager=true;
console.log(`value is :${isManager} type is :${typeof  isManager}`);

//undefined
let name;//variable declaration
console.log(name);
console.log(`value is :${name} type is :${typeof  name}`); //output : undefined

//null(a dummy value)
let test=null;
console.log(`value is :${test} type is :${typeof  test}`);

//Re assignment is allowed

let abc;
abc=10;
abc='test';
console.log(`value is :${abc} type is :${typeof  abc}`);

