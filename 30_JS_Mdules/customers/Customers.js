import {Person} from "../persons/Personjs.js";

export  class Customers extends Person{
    constructor(firstName,lastName , age,location) {
        super(firstName,lastName);
        this.age=age;
        this.location=location;
    }
    getAge(){
        return this.age;
    }
    getLocation(){
        return this.location;
    }
    greet() {
        let msg= `hello mr :${this.getFirstName()} ${this.getLastName()} age: ${this.getAge()} location:${this.getLocation()}`;
        console.log(msg);
    }
}
