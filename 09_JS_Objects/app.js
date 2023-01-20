//javascript object
let camera={
    brand:'canon',
    price:35000 ,
    colour:'black',
    mfg:2018

};
console.log(camera);

//access the properties of an object
console.log(camera.brand);

//access the non-existing properties

console.log(camera.megaPixel);//undefined

//access the properties using dot and [] notation
console.log(camera.price);//35000
console.log(camera['price']);//35000

//for dynamic properties dot , [] notation
let prop ='mfg';
console.log(camera.prop);
console.log(camera[prop]);

//nested object
let student={
   name:'Rahul Kumar',
   age:21,
   course:'B-Tech',
   address :{
        street:'Patna sahib',
        city:'patna',
       state:'bihar'

   }
};

//access the nested object
console.log(student.address);

//access the properties of an object
console.log(student.address.state);

//curd operation with the object

//CREATE OPERATION
let mobile={};
mobile.brand='apple';
mobile.colour='silver';
mobile.price=35000;
mobile.isInsured='false';
console.log(mobile);

//READ Operation
console.log(mobile.brand);//apple

//update operation
console.log(mobile.price);
mobile.price=45000;
console.log(mobile);


//delete operation
delete mobile.isInsured;
console.log(mobile);
