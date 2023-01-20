//for-of loops to get element from array
let employees=[
    {
        id:1,
        name:'Rahul',
        age:21,
        isActive:true,
        designation:'Manager'

    },
    {
        id:2,
        name:'jhon',
        age:23,
        isActive:false,
        designation:'co-Manager'

    },
    {
        id:3,
        name:'nick',
        age:45,
        isActive:true,
        designation:'sr.manager'

    },
    {
        id:4,
        name:'laura',
        age:21,
        isActive:false,
        designation:'software engineer'

    }

];
//normal for loop
let result='';
for (let i=0;i<=employees.length-1;i++){
    let employee=employees[i];
    result +=`${employee.name.toUpperCase()} `;
}
console.log(result);

//for-in loop (we get the index of the element)
result='';
for(let index in employees){
    let employee=employees[index];
    result +=`${employee.name.toUpperCase()} `;
}
console.log(result);

//for-of loop (directly we get the value)
result='';
for(let employee of employees){

    result +=`${employee.name.toUpperCase()} `;
}
console.log(result);

//for-each function es5
result='';
employees.forEach(function (employee){
    result +=`${employee.name.toUpperCase()} `;
});
console.log(result);

//for each with arrow function (ES6)
result='';
employees.forEach( employee => {
    result +=`${employee.name.toUpperCase()} `;
});
console.log(result);