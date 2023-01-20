//number
//max number
console.log(Number.MAX_SAFE_INTEGER);
//min number
console.log(Number.MIN_SAFE_INTEGER);
//positive infinity
console.log(Number.POSITIVE_INFINITY);
//negative infinity
console.log(Number.NEGATIVE_INFINITY);
//parse int
let str='100';
console.log(typeof str);
let num1=Number.parseInt(str);
console.log(`${typeof str}=>${typeof num1}`);
//parse float
let str1='100.265';
console.log(typeof str1);
let num2=Number.parseFloat(str1);
console.log(`${typeof str1}=>${num2}`);

//number to string toString
let num3=100;
let numString=num3.toString();
console.log(`${typeof num3}=>${typeof numString}`);
//string to  number
let amount=520;
let numString1=amount.toFixed(2);
console.log(`${typeof amount}=>${typeof numString1}`);
console.log(numString1);


//string related operations
let msg=String('good morning');
//length
console.log(msg.length);

//lowercase
console.log(msg.toLowerCase());

//uppercase
console.log(msg.toUpperCase());

//substring
//substr(start index,no of character)
console.log(msg.substr(0,4));

//substr
console.log(msg.substr(5));

//charAt
console.log(msg.charAt(5));

//charCodeAt(ASSCII)
console.log(msg.charCodeAt(5));
//json object
/*
string=>object:parse()
object=>string:stringify()
 */
//object to string
let student={
  name:'rahul',
    age:20,
    course:'cse'
};
console.log(student);
let studentString=JSON.stringify(student);
console.log(studentString);

//string to object
let newStudent=JSON.parse(studentString);
console.log(newStudent);
