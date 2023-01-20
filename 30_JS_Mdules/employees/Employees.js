import {Person} from "../persons/Personjs.js";

 export class Employee extends Person{
    constructor(firstName,lastName ,age,designation) {
        super(firstName,lastName);
        this.age=age;
        this.designation=designation;

    }
    getAge(){
        return this.age;

    }
    getDesignation(){
        return this.designation;
    }
    greet() {
        let msg=`Hello Mr. ${this.getFirstName()} ${this.getLastName()} your age is ${this.getAge()}  and you are ${this.getDesignation()}`;

        console.log(msg);
    }
}
