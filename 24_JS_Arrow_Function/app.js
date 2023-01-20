//1st how many way we can declare a function
/*
Function Type
1)Normal Function
2)Function Expression
3)Arrow Function
 */
let result='';
function printNumberNf(){
        let msg='';
        for(let i=0;i<=10; i++)
        {
            msg +=`${i} `;
        }
        return msg;

}
result=printNumberNf();
console.log(result);

//function expression
let printNumbersFe= function () {
        let msg='';
        for(let i=0;i<=10; i++)
        {
                msg +=`${i} `;
        }
        return msg;

      };
result=printNumbersFe();
console.log(result);

//arrow function
let printNumbersAf  = () =>  {
        let msg='';
        for(let i=0;i<=10; i++)
        {
                msg +=`${i} `;
        }
        return msg;

};
result=printNumbersFe();
console.log(result);


//Usages of Arrow Function
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

//Junior employee
let junior=employees.filter(function (employee){
        return employee.age<30;
});
console.log(junior);

//make this with arrow function
let juniorEm=employees.filter( employee => employee.age<30);

console.log(juniorEm);

//limitation of arrow function
let student={
   firstName: 'Rahul',
   lastName: 'Kumar' ,
   fullName: () => {
           return `${student.firstName} ${student.lastName}`; //this keyword is look for the current object(but in arrow this key word look for global object
   }
};
console.log(student.fullName());