const person = {firstName:"John", lastName:"Doe", age:50,yeColor:"blue"}
console.log(person)
console.log(person.firstName)

// Create an Object
const person2 = new Object();
// Add Properties
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";
console.log(person2)
console.log(person2.firstName)

// Constructor Function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
} // Create a Person object
const person3 = new Person("John", "Doe", 50, "blue");
console.log(person3)
console.log(person3.firstName)
 //how to delete object property 
console.log(person3.age)
delete person3.age;
console.log(person3.age)



console.log()

//how to access properties
let myObject = { 
    "key": "value", 
    "someKey": 5, 
    "anotherKey" : true
}
        console.log(myObject.key) // shows "value“
        console.log(myObject["key"]) // shows "value“
    
let keyName = "key"
console.log(myObject[keyName]) // shows "value"
console.log(myObject.keyName) // shows undefined 
