//Promises in JavaScript
/*
---------------------
promise concept with callback
 */
let doTask=(success,failure) =>{
  //doing the task
  let isDone=true;
  if(isDone){
      success('task is done');
  }
  else{
      failure( 'task is not done');
  }
};
doTask((message)=>{
    console.log(message);
},(message) =>{
   console.error(message);
});

//actual promise in javascript
let cleanCamera = new Promise( (resolve, reject) => {
    //cleaning camera
    let isDone=true;
    if(isDone){
        resolve("cleaning is done");
    }
    else {
        reject('cleaning is not done');
    }
});
cleanCamera.then( (message) => {
    console.log(message)
}).catch((err)=>{
    console.error(err);

});