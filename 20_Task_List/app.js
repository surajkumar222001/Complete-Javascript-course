//Task list App
let taskFormEl=document.querySelector('#task-form');
taskFormEl.addEventListener('submit',function (event){

          let taskInputEl=document.querySelector('#input-item');
          let task=taskInputEl.value.trim();
          //get tasks from local storage
       let taskList=localStorage.getItem('tasks')? JSON.parse(localStorage.getItem('tasks')) : [] ;
       taskList.unshift(task);
       //set to local storage
    localStorage.setItem('tasks',JSON.stringify(taskList));
    displayTask();
    window.reload();

});

//display task
let displayTask= () => {
    let taskListEl=document.querySelector('#task-list')
    let taskList= localStorage.getItem('tasks')? JSON.parse(localStorage.getItem('tasks')) : [] ;
    if(taskList.length !== 0){
         let eachTask='';
          for(let task of taskList){
              eachTask += `<li class="list-group-item list-group-item-action list-group-item-danger">
                    <span class="font-weight-bold">${task}</span>
                    <button class="close">
                      <i class="fa fa-times-circle"></i>
                    </button>
                </li>`;


          }
          taskListEl.innerHTML=eachTask;
    }


};
displayTask();

//remove task
let taskListElement=document.querySelector('#task-list');
taskListElement.addEventListener('click',function (event){
    let targetElement = event.target;
    if (targetElement.classList.contains('fa-times-circle')) {

        let actualEl =targetElement.parentElement.parentElement;
        let selectedTask=actualEl.innerText;
        console.log(selectedTask);
        //get task from local storage
        let taskList= localStorage.getItem('tasks')? JSON.parse(localStorage.getItem('tasks')) : [] ;
        taskList=taskList.filter(function (task){
            return task.trim() !== selectedTask.trim();

        });
        localStorage.setItem('tasks',JSON.stringify(taskList));
        displayTask();
    }



});
