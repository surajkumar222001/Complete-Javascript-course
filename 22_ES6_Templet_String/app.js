//Template String (`) back tick operator
let mobile={
  brand:'apple',
    color:'black',
    price:35000

};

let msg="brand : "+ mobile.brand +" color : " + mobile.color + " price : "+ mobile.price;
console.log(msg);
let msg1= `brand : ${mobile.brand} color : ${mobile.color} price : ${mobile.price}`;
console.log(msg1);

//html template
let template1="<ul>+" +
                "<li>"+ mobile.brand+"</li>"+
                 "<li>"+ mobile.color+"</li>"+
                 "<li>"+ mobile.price+"</li>"+
               "</ul>";
let template2=`<ul>
                  <li>${mobile.brand}</li>
                  <li>${mobile.color}</li>
                  <li>${mobile.price}</li>
               </ul>`;
