/*
setInterval() -> It call the function in the given number of interval even it is infinity
setTimeout() -> It cal the function after the given number of time(suppose after 5 second then it call after 5 sec)
clearInterval -> clear the interval which is created from set interval
 */
let count=0;
let interval=0;
    let greet=() => {
        count +=1;
      console.log(`Hello i am JS developer ${count}`);
        console.log(new Date().toLocaleTimeString());
    };
 interval=setInterval(greet,1000);

console.log(new Date().toLocaleTimeString());

setTimeout(()=>{
    clearInterval(interval);

},5000);



