//Real time use of call back function
let employees=[{id:1,name:'rahul',age:21},
              { id:2,name:'Ram',age:22 }];

let createEmployees=(employee,callback) => {

    setTimeout(()=>{
        employees.push(employee);
       callback();
    } ,2000);
};

let getEmployees= () => {
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
createEmployees({id:3,name:'wilson',age:45},getEmployees);
