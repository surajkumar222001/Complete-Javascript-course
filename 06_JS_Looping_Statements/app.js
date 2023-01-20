/*
print the value from 0 - 10 diff by one
 */
let result='';
for(let i=0;i<=10;i++)
{
    if(i<=9){
        result += `${i} , `;
    }
    else
        result +=`${i}`;

}
console.log(result);

/*
print the values from 20 to zero with the difference 2
 */
result='';
for(let i=20; i>=0;i -=2){
    if(i>0){
        result +=`${i} ,`;
    }
    else
        result +=`${i}`;
}
console.log(result);
/*nested for loop

 */
let number=5;
result='';
for(let i=1;i<=number;i++){
    for(let j=1;j<=i;j++){
        result +=`* `;
    }
    result +=`\n`;
}
console.log(result);
