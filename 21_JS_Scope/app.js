//JS Scopes
/*
1)Block Scope
   ex:-statement,if,for,switch,while
2)function Scope
   ex:Functions
 */

//JS block scope
let m=10;//global scope/parent scope
{
    let n=20;//local scope /child scope
    //we can also access the a in this statement.
    //if we declare and redeclare we get the error(if the scope id different then we dont get bth error)
    //most preference is going to local variable.
}

//complex example
let a=1;
{
    let a = 20;
    {
        //let a=30;
        {
            //let a=40;
            console.log(a)
        }

    }

}

//block scope
let course='engineering';
    if(course === 'engineering'){
        let dept='software';
    }
console.log(course);

//function

let greet=function (){
    let msg='good morning';
console.log(msg);
};
greet();

