//print from 0 - 1- diff is 1
function printNumbers( startNumber ,endNumber, increment)
{
    let result='';
    for(let i=startNumber;i<=endNumber;i +=increment){
        result +=`${i} `;
    }
    console.log(result);
}
printNumbers(50,100,5);//function call/execution

//Function Without Parameters
function greet(){
    console.log('Good Morning');
}
greet();

//Function Expression
let greetMe=function (){
    console.log('Good Morning');
};
greetMe();

//function with parameters
let wishMe=function (name,age){
    let message=`Hello ${name} you are ${age} years old`;
    console.log(message);

};
wishMe('Rahul',21);
wishMe('rahul');
wishMe();

//function with return type
let sum=function (a,b){
  let result=2*(a+b);
  return result;
};
let output=sum(10,20);
console.log(output);

//function with object as parameter
let printObject=function (obj){
    console.log(obj);

};
printObject({name:'Rahul',age:21,occupation:'engineer'});

let mobile={
  brand:'apple',
   colour:'black',
   price:40000

};
printObject(mobile);

//function with array as a  parameter
let printArray = function (array){
    let result='';
    for(let index in array){
        result +=`INDEX:${index}=>VALUE:${array[index]} \n`;
    }
    console.log(result);
};
printArray([10,20,30,40]);

let colors=['black','red','blue','orange','green'];
printArray(colors);

//function inside an object
let student={
  firstName:'Rahul',
  lastName:'Kumar',
  fullName:function (){
      return `${this.firstName} ${this.lastName}`;
  }
};
console.log(student.fullName());

//Nested Function
let outerFunction=function (){
  console.log('I am an outer function');
  let innerFunction=function (){
      console.log('i am an inner function ');
  }
  innerFunction();
};
outerFunction();

//Twisted Function
let twistedFn=function (){
    let name='rahul';
    let printStudent=function (){
        let student={
            name:'john',
            age:20,
            course:'cse'


        };
        return student
    }
    return printStudent;
};
let innerFun=twistedFn();
let studentObj=innerFun();
console.log(studentObj.name);