//class
/*
let mobile={
  brand:'apple',
  price:35000,
  color:'silver'
};
console.log(mobile);
*/
class Mobile {
  constructor(brand, price, color) {
    //constructor is responsible to initialise object
    //also known as method in object oriented programming
    this.brand = brand;
    this.color = color;
    this.price = price;
  }

  getBrand() {
    return this.brand;
  }
  setBrand(brand){
    this.brand=brand;
  }


  getPrice() {
    return this.price;
  }
  setPrice(price){
    this.price=price;

  }

  getColor() {
    return this.color;
  }

  printSpecification() {
    let spec = `brand : ${this.getBrand()} , price : ${this.getPrice()} , color : ${this.getColor()}`;
    console.log(spec);
  }


}
let mobile=new Mobile('apple',30000,'black');
mobile.printSpecification();
mobile.setBrand('nokia');
mobile.printSpecification();
mobile.setPrice(45000);
mobile.printSpecification();