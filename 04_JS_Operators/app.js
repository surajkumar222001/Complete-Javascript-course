/* Java script operators
 assignment operators :=
arithmetic operators:+ - / * %
short hand math operators:+= -= /= *=
conditional operators: < > <= >= !==
unary operators: ++ --
logical operators:&& || ^(xor)
ternary operators :  ? :
equality operator: == ===
 */

//assignment operator
let test=10;
console.log(test);

//arithmetic operator
let num1=10;
let num2=20;
console.log(`sum of ${num1} and ${num2} is ${num1+num2}`);
console.log(`sub of ${num1} and ${num2} is ${num1-num2}`);
console.log(`mul of ${num1} and ${num2} is ${num1*num2}`);
console.log(`div of ${num1} and ${num2} is ${num1/num2}`);

//find the number is even of odd
let number=11;
if(number%2 ==0){
    console.log(`even number`);
}
else{
    console.log(`odd number`);
}
//short hand math
let a=10;
let b=20;
let add=10;
add=add+(a+b);
add +=(a+b);
console.log(add);

//conditional operator
let marks=75;
if(marks<=35){
    console.log('you failed the exam');
}
else{
    console.log('you cleared the exam');
}

//unary operators
let x=10;
x=x+1;
x+=1;
x++;
console.log(x);

//logical operators
/*
and-> T&&T -> T
OR -> F||F -> F
^ ->  T^F , F^T ->T
 */
let inRelation = true;
let parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('get marry soon');

}
else{
    console.log('wait until the parents agreed');
}

//ternary operators
/*
syntax:(condition)?true:false;
 */
let mark=85;
let message;
message=(mark<=35)?'you failed the exam':'you clear the exam';
console.log(message);

//equality operators
a=10;
b='10';
if(a === b){
    console.log('both are equal');
}
else{
    console.log('both are not equal')
}
//when we compare with == it convert string to the number(automatic type conversion)
//=== directly compare



