
/**
 * Classes
JavaScript is a prototypical language, and as we’ve seen already, inheritance 
occurs via prototypes. Many other languages have classes, which can make JavaScript seem like quite a departure in syntax.
To alleviate this problem of unfamiliarity, JavaScript implemented classes. 

For the most part though, classes in JavaScript are basically just syntactic 
sugar for writing constructor functions, with a few additional capabilities specific to classes.
Classes do not have to be used to write JavaScript since they provide little 
in the way of new functionality, but they are becoming more common as 
JavaScript inherits more developers who are used to writing class based software. 
Classes always have to be called with the new keyword, and they always run in strict 
mode, so they create their own context by default without the need of strict mode.


Classes and Constructor Functions
------------------------
Classes can have a constructor function, which is the function that runs any 
time they are called, but they don’t need to have one.
In classes, constructor functions are defined using the constructor keyword, 
and you can only have one constructor function per class.
 */

//Classes can be written in two ways, either where we use a let or const variable to define the class:
let class1 = class {
    constructor(id) {
        console.log(id)
    }
}
console.log(new class1(2323));

//2
class class2 {
    constructor(addr) {
        console.log(addr)
    }
}
console.log(new class2("Mrakovska 8"));




//below class is same as, next function definition 
let myClass = class {
    constructor(name) {
        console.log(name)
    }
}
new myClass("hello") // Console logs "hello"


//this example is the equivalent of writing the following functional code:
let myFunction = function (name) {
    console.log(name)
}
new myFunction("hello") // Console logs "hello"



let HotSauce = class {
    #privateField = 1 //private


    // Fields here are added to this, so they are available
    // via this.units and this.maxHotness in methods
    units = 'scoville'
    maxHotness = 20000000
    constructor(name, hotness) {
        // We can assign arguments from new instances of
        // our class to this as well
        this.hotness = hotness
        this.name = name
    }
    getName() {
        if (this.hotness < this.maxHotness) {
            return `${this.name} is ${this.hotness} ${this.units}`
        }
        else {
            return `${this.name} is too hot!`
        }
    }
}

let newSauce = new HotSauce('Chilli Wave', 4600)
// Console logs 'Chilli Wave is 4600 scoville scovilles'
console.log(newSauce.getName())
console.log("PRIVATE field access: " + newSauce.privateField) //undefined, in JAVA it is a compiler time error 



//Static Method Fields
let Utility = class {
    #nonstaticVar = "alym";
    static className = "Utility Functions"
    static author = "Bernard Showmys"


    //initializer 
    static {
        this.author = "Berdi Kerbabayew"
    }

    /**
     * Since we don’t initiate a new instance of our class, 
     * static methods will also not have access to non-static properties on the class
     */
    static classDetails() {

        return `${this.className} by ${this.author} ` //${this.#nonstaticVar}
    }


    /**
     * 
     *  Static methods can also be getters and setters.
     * If we changed our classDetails() function from static 
     * classDetails() to static get classDetails(), we could then call it as Utility.classDetails. 
     * The same applies to setters.
     */
    static getInfo() {

        return `By GETTER ${this.className} by ${this.author} ` //${this.#nonstaticVar}
    }
}

let callUtility = new Utility
//it is not like JAVA, you can not access static methods or fields by reference 
//console.log(callUtility.classDetails()) //TypeError: callUtility.classDetails is not a function

//only possible via this way  
console.log(Utility.classDetails())
console.log(Utility.author)

//getter way
console.log(Utility.getInfo()) //Utility.info - not working as suggested 


//even thoug a feature, it is a SECURITY ISSUE
/**
 * Just like their public counterparts, static methods can be deleted or 
 * changed on the class itself. For example, 
 * we could redefine classDetails() to something completely different:
 */
Utility.classDetails = function () {
    return "Some suspicious return text"
}

console.log(Utility.classDetails())






////class inheritance 
/**
 * Since classes are mostly syntactic sugar on top of objects, 
 * they also have typical prototypical inheritance too. 
 * 
 * We’re introducing the super() function for the first time. 
 * This is a special function which calls the parent class, 
 * along with its constructor. Here, this is the same as 
 * running new HotSauce(name, hotness).
 * 
Essentially, this means we’re running the HotSauce constructor 
anytime VeganHotSauce is run, while also setting this.meat to 
the meat variable from VeganHotSauce.


 */
class VeganHotSauce extends HotSauce {
    constructor(meat, name, hotness) {
        super(name, hotness)
        this.meat = meat
    }

    //Class Inheritance Super Keyword
    checkMeatContent() {
        console.log()
        if (this.meat) {
            return "this is not vegan.. but " + super.getName()
        }
        else {
            return "no meat detected.. and " + super.getName()
        }
    }
}

newVeganOption = new VeganHotSauce(false, "Vegan Lite", 2400)
console.log(newVeganOption)
 
// console logs
// no meat detected.. and Vegan Lite is 2400 scovilles
console.log(newVeganOption.checkMeatContent())


const gosliOwkat = new VeganHotSauce(true, "Kebab", 7400)
console.log(gosliOwkat)
 
// console logs
// no meat detected.. and Vegan Lite is 2400 scovilles
console.log(gosliOwkat.checkMeatContent())