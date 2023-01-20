//creation of an array
let numbers=[10,20,30];
console.log(numbers);

//access the element of an array
console.log(numbers[0]);

//access non-existing
console.log(numbers[3]);//undefined

//iteration of array elements
let colors=['white', 'black' ,'silver','purple','blue','yellow'];//string index

//1.normal for loop
let result='';
for(let i=0;i<=colors.length-1;i++)
{
    result +=`${colors[i]} `;
}
console.log(result);

//2. for-in loop up to ES5
result='';
for(let index in colors){
    result +=`${colors[index]} `;
}
console.log(result);

//3.for- of loop from ES6
result='';
for(let color of colors){
    result +=`${color} `;
}
console.log(result);

//4. forEach function up to ES5
result='';
colors.forEach(function (color) {
    result +=`${color} `;
});
console.log(result);

//5. forEach with arrow function from ES6
result='';
colors.forEach((color)=> result +=`${color} `);

console.log(result);

//array of object
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
//access all employee
console.log(employees);

//iterate employee
result='';
for (let employee of employees){
   result +=`${employee.name} `;
}
console.log(result);

//filter the junior employee:age<=30;
let juniorEmployee=[];
for(let employee of employees){
    if(employee.age<=30){
        juniorEmployee.push(employee);
    }
}
console.log(juniorEmployee);

//filter active employee : isActive is :true
let activeEmployee=[];
for( let employee of employees){
    if(employee.isActive){
        activeEmployee.push(employee)
    }
}
console.log(activeEmployee);

//filter the junior employee : age <=30
console.log('................filter.....');
juniorEmployee=[];
for(let employee of employees){
    if(employee.age<=30){
        juniorEmployee.push(employee);
    }
}
console.log(juniorEmployee);

let jrEmployee=employees.filter(function (employee){
    return employee.age<=30;

}) ;
console.log(jrEmployee);

console.log('....filter...');
activeEmployee=[];
for( let employee of employees){
    if(employee.isActive){
        activeEmployee.push(employee)
    }
}
console.log(activeEmployee);
let actEmployee=employees.filter(function(employee){
    return employee.isActive;
})
console.log(actEmployee);