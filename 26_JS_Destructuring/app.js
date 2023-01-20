//ES6 De-structuring
let student={
  name:'Rahul',
  age:21,
    course:'BTech',
    address:{
      street: 'Mohali',
        city:'Chandigarh',
        state:'Punjab'
    },
    hobbies:{
           regular:{
            id:1,
            reHobbies:['Reading books','Playing Cricket',]
                  },

        occasional:{
            id:1,
            occHobbies:['Painting','playing cards',]
                  },
               }

};
//Destructuring
let {street,city}=student.address;
console.log(`street : ${street} , city : ${city} `);
//regular hobbies
let {reHobbies}=student.hobbies.regular;
console.log(reHobbies);
let {state}=student.address;
console.log(state);
