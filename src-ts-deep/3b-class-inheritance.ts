class Letters {

    /**
     * Private keyword: The private keyword in TypeScript is used to 
     * mark a member private which makes it inaccessible outside the declared class.
     * The fields are preceded by the private keyword to mark them private.
     */
    private a;

    /**
     * not supported in JS, so why # is used
     * 
     * @param alphabet Private fields: Private fields in TypeScript 
     * are the ones that have been newly added to JavaScript, 
     * the members to be declared private are preceded by a #. 
     * Private members cannot be accessed outside their class.
     */
    #b;



    constructor(alphabet) {
        this.a = alphabet;
        this.#b = alphabet;
    }

    getA() {
        return this.a;
    }

    getB() {
        return this.#b;
    }


}
const l = new Letters("gfg");
console.log(l.getA());
console.log(l.getB());

//inhertance
class Vehicle {
    honk(): void {
        console.log("Vehicle Honks");
    }
}
class Car extends Vehicle {
    display(): void {
        console.log("This is a Car");
    }
}
let car = new Car();
/**
Explanation: Here, class Car inherits the honk() method from the Vehicle class.
 This way the Car class can reuse the methods of its parent class.
 */
car.honk();//Vehicle Honks
car.display();//This is a Car

/**
 * Super Keyword:
TypeScript uses the super keyword to call the properties and methods of the parent class. The primary use of the super keyword is:

To call a constructor of a parent class
To call the method of the parent class
 */

class Person { 
    constructor(private firstName: string,
        private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayInfo(): string {
        return `I am ${this.firstName} ${this.lastName}.`;
    }
}
class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {

        // Invoking the constructor of Person class
        super(firstName, lastName);
    }
    displayInfo(): string {
        return super.displayInfo()
            + `The job title is ${this.jobTitle}.`;
    }
}
let employee = new Employee('Mehul',
    'Sharma', 'Web Developer');

console.log(employee.displayInfo());


//now field inheritance - define FIELD/STATE in Interface (bot possible in JAVA)
interface OnlyInTS{
    ady:string,
    state:string,
    info():string
}

const v1: OnlyInTS = {
    ady: "Oraz", 
    state: "boydak",
    info() {
        return this.ady+" - "+ this.state
    }
}

const v2: OnlyInTS = {
    ady: "Alym", 
    state: "married",
    info() {
        return this.ady+" - "+ this.state
    }
}

//same TYPE different implementations 
console.log(v1.info()) //Oraz - boydak
console.log(v2.info())//Alym - married