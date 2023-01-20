

let employees=[{id:1,name:'john',age:25},
    {id:2,name:'jack',age:27}];

//create employee
let createEmployee=(employee)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            employees.push(employee);
            let isDone=true;
            if(isDone){
                resolve();
            }
            else {
                reject('Employee creation is failed ! ');
            }
        },2000)
    });
};

//get employee
let getEmployee=()=>{
    setTimeout(() => {
        let employeeRows='';
        employees.forEach( (employee) => {
            employeeRows += `<tr> 
                         <td>${employee.id}</td>
                         <td>${employee.name}</td>
                         <td>${employee.age}</td>
                          </tr>`;
        });
        document.querySelector('#table-body').innerHTML=employeeRows;
    }, 1000);
};

/*createEmployee({id:3,name:'harry',age:30}).then(()=>{
    getEmployee();
}).catch((err)=>{
    console.error(err);
});
*/
let init = async ()=>{
    let result = await createEmployee({id:3,name:'harry',age:25});
    getEmployee();
};
init();


