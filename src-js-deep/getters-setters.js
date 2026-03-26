/**
 Getters and Setters
 -------------------
As well as all of the regular function expressions we’ve looked at so far, 
special functions can be defined inside objects known as getters and setters. 
As the name suggests, they let us get or set values on an object. 

Getters and setters are just syntactic sugar – they make your code a little easier 
to understand from the outside, 
but their functionality can be achieved with standalone functions too.
 */
let Animals = {
    value: [ 'dog', 'cat' ],
    
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





