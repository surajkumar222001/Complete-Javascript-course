//function of arrays
//shift()-> remove the first element from array
let technologies=['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.shift();
console.log(technologies);

//unshift -> add the first element to array
 technologies=['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.unshift('nodejs');
console.log(technologies);

//push() -> add the last element to array
technologies=['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.push('nodejs');
console.log(technologies);

//pop() -> remove the last element from array
technologies=['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.pop();
console.log(technologies);

//sort()-> to sort the array in ascending order
technologies=['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.sort();
console.log(technologies);

//reverse()-> to reverse the array element
technologies=['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

//reverse order of elements
technologies=['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.sort().reverse();
console.log(technologies);

//splice() -> to remove/replace from the middle
//1. splice(index)->it removes all the element from the given index
technologies=['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.splice(2);
console.log(technologies);
//2. splice(index,no-of elements) -> it removes the given no of elements from the index
technologies=['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.splice(2,1);
console.log(technologies);
//3. splice(index,1,replace element) ->it replace the given element at the given index
technologies=['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.splice(4,1,'node js');
console.log(technologies);

//join()-> to join the array element to string
technologies=['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
let testString=technologies.join('-');
console.log(testString);

//split()->to split the string in to array
console.log(testString);
let newTechs=testString.split('-');
console.log(newTechs);




