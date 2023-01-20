//1.find the number of 'o' in the given string
let msg='Good Morning';
let findZero= (str) => {
    let count=0 ;
    for(let i=0;i<=str.length-1;i++)
    {
        let char =str.charAt(i);
        if(char ==='o'||char ==='O')
        {
            count++;
        }
    }
    return count;
};
console.log(`The zeroes in String is :${findZero(msg)}`);

//2. find the reverse string of the given string
msg='Good Morning';
let reverseString = (str) => {
    let tempString='';
    for(let i=str.length-1;i>=0;i--){
        let char=str.charAt(i);
        tempString +=char;
    }
    return tempString;

};
console.log(`${msg} => ${reverseString(msg)}`);

//3. check the given string is palindrome or not
//reverse and non-reverse is also same
msg='ABBA';
let isPalindrome = (str) =>{
    if (str === reverseString(str))//we can simply use return if (str === reverseString(str));
    {
        return true;
    }
    else {
        return false;
    }

};
console.log(`${msg} is palindrome ? ${isPalindrome(msg)}`);

//4. TRIANGLE STRING ome
msg='RAHUL KUMAR';
let triangleOne = (str) => {
    let tempStr='';
    for(let i=1;i<=str.length;i++){
        tempStr +=`${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleOne(msg));

//4. TRIANGLE STRING two
let addSpace = (number) => {
    let tempSpace='';
    for(let i=1;i<=number;i++)
    {
        tempSpace += ' ';
    }
    return tempSpace;
};
msg='RAHUL KUMAR';
let triangleTwo = (str) => {
    let tempStr='';
     for(let i=0;i<=str.length-1;i++){
         tempStr +=`${addSpace(i)}${str.substr(i)} \n`;
     }
     return tempStr;
};
console.log(triangleTwo(msg));

//5. TRIANGLE STRING three
msg='RAHUL KUMAR';
let triangleThree = (str) => {
    let tempStr='';
    for(let i=str.length;i>=1;i--){
        tempStr += `${str.substr(0,i)} \n`;

    }
    return tempStr;

};
console.log(triangleThree(msg));

//6.TRIANGLE STRING four

msg='RAHUL KUMAR';
let triangleFour = (str) => {
    let tempStr='';
    for(let i=str.length-1;i>=0;i--){
        tempStr += `${addSpace(i)} ${str.substr(i)} \n`;
    }
    return tempStr;
};
console.log(triangleFour(msg));