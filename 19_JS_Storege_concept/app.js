//STORAGE//
/*
->local storage->permanent storage od data(per browser)
   ->setItem(key,value);//create / update
   here value is always string only string type of data is stored.
   object to string by JSON.stringify(),
   string to object parse();.

   ->to get as output of data
   =>getItem('key');//read

   ->delete
   =>removeItem('key')

   ->clear();

   ->secession storage->for a particular secession
     ->setItem(key,value);//create / update
   here value is always string only string type of data is stored.
   object to string by JSON.stringify(),
   string to object parse();.

   ->to get as output of data
   =>getItem('key');//read

   ->delete
   =>removeItem('key')

   ->clear();
 */


//local storage
let employeeName='john';
localStorage.setItem('name',employeeName);

//get
console.log(localStorage.getItem('name'));

//delete
localStorage.removeItem('name');

//clear
localStorage.clear();

//local storage with an array
let colors=[{id:1,name:'white'},
    {id:2,name:'black'},
    {id:3,name:'red'},
    {id:4,name:'white'}];
localStorage.setItem('colors',JSON.stringify(colors));
let theColors=JSON.parse(localStorage.getItem('colors'));
console.log(theColors);

localStorage.removeItem('colors');

//secession storage with simple string
let studentName='Rahul';
//set
sessionStorage.setItem('name',studentName);

//get
console.log(sessionStorage.getItem('name'));

//delete
console.log(sessionStorage.removeItem('name'));
sessionStorage.clear();

//local storage with an array
 colors=[{id:1,name:'white'},
    {id:2,name:'black'},
    {id:3,name:'red'},
    {id:4,name:'white'}];
sessionStorage.setItem('colors',JSON.stringify(colors));
 theColors=JSON.parse(sessionStorage.getItem('colors'));
console.log(theColors);


