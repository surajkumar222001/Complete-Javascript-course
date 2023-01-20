/*
print the values from 0 - 10
 */
let i=0;
let result='';
while(i<=10) {
    if (i <= 9) {
        result += `${i} , `;
    } else {

    result += `${i}`;
    }
  i++;
}
console.log(result);

/*
print the value from 20 - 0 of difference 2
 */
result ='';
i=20;
while(i>=0){
    if(i>=1){
        result +=`${i} , `;
    }
    else{
        result +=`${i}`;
    }
    i -=2;
}
console.log(result);