/*
example of looping(nested for loop)
 */
let result='';
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        result += `${j} `;

    }
    result +=`\n`;
}
console.log(result);
/*2nd example

 */
result='';
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        result +=`${i} `;
    }
    result +='\n';
}
console.log(result);

/*\
3rd example
 */
result='';
for(let i=5;i>=1;i--){
    for(let j=1;j<=i;j++)
    {
        result +=`${j} `;

    }
    result +=`\n`;
}
console.log(result);
/*4th example

 */
result='';
for(let i=5;i>=1;i--){
    for(let j=1;j<=i;j++)
    {
        result +=`${i} `;

    }
    result +=`\n`;
}
console.log(result);