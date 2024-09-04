let newString = String("hello") // "hello"
let objString = String({ "some" : "object" }) // "[object Object]"
let newString2 = String(5) // "5“
let newNumber2 = Number("5") // 5

console.log(newString + "; "+objString+"; "+newString2+"; "+newNumber2)

let newString3 = new String("hello") // String { "hello" }
let objString3 = new String({ "some" : "object" })  
let newString4 = new String(5) // "5“
let newNumber3 = new Number(5) // Number { 5 }
console.log()
console.log(newString3 + "; "+objString3+"; "+newString4+"; "+newNumber3)




let check  = new Boolean (false);
if(check) {
    console.log("WOW FOUND, even FALSE");//FOUND, even FALSE
} 
let check2  = false;
if(check2) {
    console.log("WOW FOUND, even FALSE");//skipped
}


//Another WEIRD thing with OBJECTs, printed differently in console  
var x = new String("JavaScript"); // x is an object
console.log(x); // [String: 'JavaScript']  //ARRAR [] ;) 
var xx = {c: "s"};//{ c: 's' }            //OBJECT {} ;) 
console.log(xx);  

//but below object printed with curly braces
// Constructor Function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
} // Create a Person object
const person = new Person("John", "Doe", 50, "blue");
console.log(person)