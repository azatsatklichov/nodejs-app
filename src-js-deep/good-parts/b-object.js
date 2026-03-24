/** 
 * 
 * In JavaScript, Objects are King
If you Understand Objects, you Understand JavaScript.
In JavaScript, almost "everything" is an object:

Objects are objects
Maths are objects
Dates are objects
Arrays are objects
Maps are objects
Sets are objects
RegExp are Objects
Errors are Objects
All JavaScript values, except primitives, are objects.




Object literals are the strong part in JS. 

Object literals are a convenient notation for specifying new objects. 
A function literal defines a function value. It can have an optional name that it can use to call itself recursively. It can specify a list of parameters that will act as variables
initialized by the invocation arguments. The body of the function includes variable definitions and statements.
*/
var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};
console.log(flight)

var stooge = {
    "first-name": "Alan",
    first_name: "Mulan"
}

//The . notation is preferred because it is more compact and it reads better:
console.log(stooge["first-name"])// "Alan"
//stooge."first-name" // error 
console.log(stooge["first_name"]); // Mulan
console.log("In JS it is OPTIONAL to keep KEYs in quote, only necessary if dash is used as above. Se below no needed");
console.log(stooge.first_name);
flight.departure.IATA // "SYD"

console.log("\n\n The || operator can be used to fill in default values:")
var middle = stooge["middle-name"] || "(none)";
console.log(middle)
var status = flight.status || "unknown";
console.log(status)


//Attempting to retrieve values from undefined will throw a TypeError exception. This
//can be guarded against with the && operator:
var v = flight.equipment // undefined
console.log(v);
try {
    v = flight.equipment.model // throw "TypeError"
} catch {
    console.log("TypeError thrown");
    console.log(v);
}



console.log("\n\n The && operator can be used as a GUARD, or use new ? operator: So NO ERROR THROWN")
v = flight.equipment && flight.equipment.model // undefined
console.log(v);

//v = flight.equipment.model //TypeError: Cannot read properties of undefined (reading 'model')
v = flight.equipment?.model // undefined,  new way 
console.log(v);




//Update
/**
 *A value in an object can be updated by assignment. If the property name already
exists in the object, the property value is replaced:
stooge['first-name'] = 'Jerome';
If the object does not already have that property name, the object is augmented (added):
 */
stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'overdue';
console.log(flight)


//Reference
//Objects are passed around by reference. They are never copied: (Like in Java, only references are copied)
var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
// nick is 'Curly' because x and stooge
// are references to the same object
var a = {}, b = {}, c = {};
// a, b, and c each refer to a
// different empty object
a = b = c = {};
// a, b, and c all refer to
// the same empty object



//Prototype  - Object.prototype    (for Array it is Array.prototype)
//Every object is linked to a prototype object from which it can inherit properties.
//Just understand it like, in JAVA all objects are inherited from Object, 
// but here you can augument Prototype Object so, all other objects can benefit of it, IDEA is STRONG, but open to do an error 

//All objects created from object literals are linked to Object.prototype, an object that comes standard with JavaScript.
/**
 * When you make a new object, you can select the object that should be its prototype.
The mechanism that JavaScript provides to do this is messy and complex, but it can be significantly simplified. 
We will add a create method to the Object function. The create method creates a new object that uses an old object as its prototype.
 */
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () { };
        F.prototype = o;
        return new F();
    };
}

console.log("\nLinked to this prototype object: ")
console.log(stooge)
console.log('\n\n Prototyped object')
var another_stooge = Object.create(stooge);

//The prototype link has no effect on updating. When we make changes to an object, the object’s prototype (here 'stooge') is not touched:
another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Musa';
another_stooge.nickname = 'Moe';

console.log(another_stooge)

/**The prototype link is used only in retrieval. If we try to retrieve a property value from
an object, and if the object lacks the property name, then JavaScript attempts to
retrieve the property value from the prototype object. 

And if that object is lacking the property, then it goes to its prototype, and so on until the process finally bottoms out
with Object.prototype.

If the desired property exists nowhere in the prototype chain, then the result is the undefined value. This is called delegation.
 */


console.log("\n\n Below THIS is very NICE feature - If we add a new property to a prototype, that property will immediately be visible in all of the objects")

//THIS is very NICE feature 
/**
 * The prototype relationship is a dynamic relationship. 
 * 
 * If we add a new property to a prototype, that property will immediately be visible in all of the objects that are
based on that prototype:
 */
stooge.profession = 'actor';
console.log(stooge)
another_stooge.profession // 'actor'
console.log(another_stooge) //NOT here
/**
 * And if that object is lacking the
property, then it goes to its prototype, and so on until the process finally bottoms out
with Object.prototype. If the desired property exists nowhere in the prototype chain,
then the result is the undefined value. This is called delegation.
 */
console.log("This is called delegation: " + another_stooge.profession) //BUT here, so missed property will be looked from prototype, until Object.prototype  



console.log('\n\nReflection')
/**
 * It is easy to inspect an object to determine what properties it has by attempting to
retrieve the properties and examining the values obtained.

The typeof operator can be very helpful in determining the type of a property:
 */
typeof flight.number // 'number'
typeof flight.status // 'string'
typeof flight.arrival // 'object'
typeof flight.manifest // 'undefined'
//Some care must be taken because any property on the prototype chain can produce a value:
typeof flight.toString // 'function'
typeof flight.constructor // 'function'

/**
 * There are two approaches to dealing with these undesired properties. The first is to
have your program look for and reject function values. Generally, when you are
reflecting, you are interested in data, and so you should be aware that some values
could be functions.

The other approach is to use the hasOwnProperty method, which returns true if the
object has a particular property. The hasOwnProperty method does not look at the
prototype chain:
 */
flight.hasOwnProperty('number') // true
flight.hasOwnProperty('constructor') // false



console.log("\n\nObject Constructors")
/**
 * Object Constructor Functions
Sometimes we need to create many objects of the same type.

To create an object type we use an object constructor function.

It is considered good practice to name constructor functions with an upper-case first letter.
 */
// Constructor Function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
// Create a Person object
const myFather = new Person("Suvhan", "Satklycov", 82, "gara");
console.log(myFather)
// Create another Person object
const myMother = new Person("Altyn", "Satklycova", 78, "gara");
console.log(myMother)



console.log('\n\nEnumeration')
console.log('There is no guarantee on the order of the names, so be prepared for the names to appear in any order.\n')
var name;
for (name in another_stooge) {
    if (typeof another_stooge[name] !== 'function') {
        //document.writeln(name + ': ' + another_stooge[name]);
        console.log(name + ': ' + another_stooge[name])
    }
}

/**
 * If you want to assure that the properties appear in a particular
order, it is best to avoid the for in statement entirely and instead make an array containing
the names of the properties in the correct order:
 */
console.log('\n\Ordered - nasty, why should I write this duplication')
var i;
var properties = [
    'first-name',
    'middle-name',
    'last-name',
    'profession'
];
for (i = 0; i < properties.length; i += 1) {
    //document.writeln(properties[i] + ': ' + another_stooge[properties[i]]);
    console.log(properties[i] + ': ' + another_stooge[properties[i]]);
}

console.log('\n\nThe delete operator can be used to remove a property from an object.')
console.log(another_stooge)
delete another_stooge.nickname;
console.log(another_stooge)

console.log('\n\nGlobal Abatement - By reducing your global footprint to a single name, you significantly reduce the \nchance of bad interactions with other applications, widgets, or libraries.')
/**
 * JavaScript makes it easy to define global variables that can hold all of the assets of
your application. Unfortunately, global variables weaken the resiliency of programs
and should be avoided.

One way to minimize the use of global variables is to create a single global variable
for your application: like in ANGULAR.

Other way is modularize your application. 


By reducing your global footprint to a single name, you significantly reduce the
chance of bad interactions with other applications, widgets, or libraries. Your program
also becomes easier to read because it is obvious that MYAPP.stooge refers to a
top-level structure. In
 */
var MYAPP = {};
MYAPP.stooge = {
    "first-name": "Joe",
    "last-name": "Howard"
};
MYAPP.flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};

console.log(MYAPP)







