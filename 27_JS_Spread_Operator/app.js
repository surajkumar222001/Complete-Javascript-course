//spread operators
//to pass array element as parameter of function
//use to combine multiple array to make a single one
let numbers=[10,34,65,66,2,5,1,45,23,77,444,8459];
let min=Math.min(...numbers);
console.log(min)

//how to merge two array using spread operators
/*
let array1=['pink','black','red','white'];
let array2=['yellow','silver','orange'];
let colors=[];
for(let color of array1){
    colors.push(color);
}
for(let color of array2){
    colors.push(color);
}
console.log(colors);

 */

//short cut
let array1=['pink','black','red','white'];
let array2=['yellow','silver','orange'];
let colors=[...array1,...array2];
console.log(colors);
