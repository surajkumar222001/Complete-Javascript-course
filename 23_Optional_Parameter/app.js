//optional parameter
let greet = function (name,age=20){
    let msg=`Hello ${name} you are ${age} years old`;
    console.log(msg);

};
greet('Rahul',21);

let printNumber=function (startNumber,endNumber=10){

    let result='';
    for (let i=startNumber;i<=endNumber;i++)
    {
       result += `${i} `;
    }
    console.log(result);

};
printNumber(2);
