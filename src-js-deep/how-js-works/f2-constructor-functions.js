

///Constructor Functions in JavaScripts
/**

In the same way that we were able to make new instances of arrays and objects, we can use the new keyword to generate new instances of functions in JavaScript.

When you use the new keyword, it also has the added benefit of creating a new context – so your function will not inherit this from the global context. 
Due to this reason, you cannot use the new keyword with arrow notation functions then since they lack context.
*/

//Functions called with new act much like functions which do not have new:
let myFunction = function (name, age, country) {
    console.log(this) // myFunction { }
}
let newFunction = new myFunction("John", 24, "Britain")

/**
 * Note With the new keyword, you can omit the double brackets when calling your function if you have no arguments. Sso new myFunction() is the same as new myFunction.
 */
myFunction("John", 24, "Britain")
newFunction;


let User = function (firstName, lastName, age) {
    this.fullName = firstName + " " + lastName
    this.age = age
}
let userOne = new User("John", "Big", 24)
console.log(userOne) // { fullName: "John Big", age: 24 }
let userTwo = new User("John", "Small", 24)
console.log(userTwo) // { fullName: "John Small", age: 24 }



//Additional Function Methods -- actually this is a SECURITY risk 
User = function (firstName, lastName, age) {
    this.fullName = firstName + " " + lastName
    this.age = age
}
User.prototype.giveName = function () {
    return `My name is ${this.fullName}!`
}


console.log(User.prototype.name)


console.log()
//Getters and Setters
let Animals = {
    value: ['dog', 'cat'],
    get listAnimals() {
        return this.value
    },
    set newAnimal(name) {
        this.value.push(name)
        console.log("New animal added: " + name)
    }
}
Animals.newAnimal = "sheep"
console.log(Animals.listAnimals)