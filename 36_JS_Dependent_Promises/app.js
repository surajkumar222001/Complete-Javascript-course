//Dependent promises
/*
1) buildProject
   2)attend technical round
       3)attend manager round
          4)attend hr round
 */
let buildProject = new Promise((resolve, reject) => {
   setTimeout(()=>{
       let isDone=true;
       if(isDone){
           resolve('project is finished');
       }
       else {
           reject('project is not finished');
       }
   },2000);
});

let attendTechnicalRound = new Promise((resolve, reject) => {
   setTimeout(()=>{
       let isDone=true;
       if(isDone){
           resolve('technical round is finished');
       }
       else {
           reject('technical round is not finished');
       }
   },3000)
});

let attendManagerRound = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let isDone=true;
        if(isDone){
            resolve('manager round is finished');
        }
        else {
            reject('manager round is not finished');
        }
    },5000);
});

let attendHRRound = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let isDone=true;
        if(isDone){
            resolve('hr round is finished,got job');
        }
        else {
            reject('hr round is not finished');
        }
    },7000);
});

buildProject.then( (message) =>{
    let result =`${message} -> `;
    console.log(message);
    attendTechnicalRound.then((message)=>{
        result += `${message} -> `;
        console.log(message);
        attendManagerRound.then((message)=>{
            result +=`${message} -> `;
            console.log(message);
            attendHRRound.then((message)=>{
              result += `${message}`;
              console.log(message);
              //console.log(result);
            }).catch((err)=>{
                console.error(err);

            });
        }).catch((err)=>{
            console.error(err);

        });
    }).catch((err)=>{
        console.error(err);

    });

}).catch( (err)=>{
    console.error(err);

});