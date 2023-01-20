/*
do while loop
print 0 - 10 and the difference is 1
 */
let result='';
let i=0;
do{
    result +=`${i} `;
    i++;
}
while(i<=10);
console.log(result);

/*
print from 20 -0 nad diff is 2
 */
result='';
i=20;
do{
    result +=`${i} `;
    i -=2;
}
while (i>=0);
console.log(result);
