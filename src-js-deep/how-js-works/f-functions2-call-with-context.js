

///Calling Functions with Context
/**

There are three methods inherited by all functions via prototypical inheritance, which allow us to call functions with a custom this context. These are listed below:

1. call(), which calls a function and gives it some context. Using call() can both define a context for a function and also pass variables to it (separated by commas).

2. apply(), which is the same as call() but uses an array to define the arguments of a function.
The apply method lets us construct an array of arguments to use to invoke a function.
It also lets us choose the value of this.

3. bind(), which permanently binds some context to a function – so you never have to redefine its context again.
*/


//call(). Suppose we want to define a constant value which is available within a specific function. 
// We can achieve this functionality by adding our constant to the function’s context
"use strict"
let words = function (word, punctuation) {
    return this.keyword + " " + word + punctuation + this.ola.vila
}
let wordContext = { keyword: "Hello", ola: { vola: "vOLA", vila: "vILA" } }   ////CONTEXT
let helloWorld = words.call(wordContext, "World", "!")
console.log(helloWorld) // Hello World!vILA


//Similar to the example above, apply() works in essentially the same way, 
// with the only difference being that arguments are defined in an array. With apply, the code would look like this instead:
let words2 = function (word, punctuation) {
    return this.keyword + " " + word + punctuation + this.ola.vila
}
let helloWorld3 = words2.apply(wordContext, ["World", "!"])
console.log(helloWorld3) // Hello World!vILA

console.log('-- ')
let add = function (a, b) {
    return a+b;
}
// Make an array of 2 numbers and add them.
var array = [3, 4];
var sum = add.apply(null, array); // sum is 7
console.log(sum) 


// Make an object with a status member.
var statusObject = {
status: 'A-OK'
};
// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.
//var status = Quo.prototype.get_status.apply(statusObject);
// status is 'A-OK'
console.log('-- ')

//**
//calling repetaedly makes an issue, in above two

// If we were calling words() all the time, we’ll find that we will have to
// keep mentioning our context over and over again – which is not ideal. */
"use strict"
words = function (word, punctuation) {
    return this.keyword + " " + word + punctuation
}
wordContext = {
    keyword: "Hello"
}
helloWorld = words.call(wordContext, "World", "!")
let goodbye = words.call(wordContext, "Goodbye", "!")
console.log(helloWorld) // "Hello World!"
console.log(goodbye) // "Hello Goodbye!"




///solution, use bind()
/**
 * Using bind(), we only ever mention our context once, and then it permanently becomes entangled with our function. This can be seen in the following example:
 */
"use strict"
words = function (word, punctuation) {
    return this.keyword + " " + word + punctuation
}
wordContext = {
    keyword: "Hello"
}
let boundWord = words.bind(wordContext)  //if not assigned let, causes an issue: ReferenceError: boundWord is not defined
helloWorld = boundWord("World-bind", "!")
console.log(helloWorld) // Hello World-bind!
goodbye = boundWord("Goodbye-bind", "!")
console.log(goodbye) // Hello Goodbye-bind!



console.log('\n\n-----JavaScript Function call()--------')
/**
 * The JavaScript call() Method
 * 
The call() method can be used to call a function with a specific this.

The call() method lets an object use a method belonging to another object.

In this way, the same method can be used on different objects.

Basic call() Syntax

The call() method is used to call a function with an object as an argument.

The call() method takes this as the first argument.

Additional arguments are passed as a comma-separated list.

Syntax
functionName.call(this, arg1, arg2, ...);

sing call() to Set this
When you use call(), you can decide what this should refer to.

In the example below, the greet function returns a greeting + this.name.

When you use call(), you decide that this should be the person3 object.
 */
const person1 = { name: "John" };
const person2 = { name: "Paul" };
const person3 = { name: "Ringo" };

function greet(greeting) {
  return greeting + " " + this.name  ;
}

console.log(greet.call(person3, "Hello")); 
console.log(greet.call(this, "Hello"));

console.log('\nBorrowing a Method from Another Object - you can use call() to borrow a method from another object:')
const persong = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1g = {
  firstName:"Mert",
  lastName: "Merdan"
}
const person2g = {
  firstName:"Enar",
  lastName: "Gonsy"
}

// Calls the fullName method of person, using it on person1: 
console.log(persong.fullName.call(person1g)); //This will return "Mert Merdan":
console.log(persong.fullName.call(person2g)); //This will return "Enar Gonsy":



console.log('\nThe call() Method with Arguments')
const person9 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person99 = {
  firstName:"John",
  lastName: "Doe"
}

const called = person9.fullName.call(person99, "Oslo", "Norway");//passed this object is person99
console.log(called);



console.log('\n\ncall() vs Normal Function Call - Compare a normal function call with a call() call.')
function showName() {
  return this.name; //Without call(), this is not the person object.
}

const person = { name: "John" };

//console.log(showName()); //normal call  - TypeError: Cannot read properties of undefined (reading 'name')
console.log(showName.call(person)); //call

console.log('So, Normal Function Call can not help you with defined "this" in function unless it is explicit as below')
function showName2() {
  return this; 
}

console.log(showName2()); //normal call  -  you see no error here 
console.log(showName2.call(person)); //call



console.log('\n\ncall() Does Not Create a New Function - The call() method executes the function immediately. It does not return a new function.')
console.log(showName.call(person)); //call executes the function immediately

/**
 * Common Mistakes
 * 
 * Forgetting that call() Runs Immediately: call() does not return a reusable function.
 * 
 * Passing Arguments as an Array:
 *      call() requires arguments to be listed one by one. Use apply() for arrays.
 *      Using call() Without Understanding this
 * 
   Always know what this should refer to.
 */



console.log('\n\n-----JavaScript Function apply()--------')
/**
 * Method Reuse
 * 
The apply() method lets you write a method that can be used on different objects.

The apply() method is used to call a function with a specific this.

The apply() method is similar to call(), but it passes arguments in an array.


Basic apply() Syntax
The apply() method is used to call a function with an object as an argument.

The apply() method takes this as the first argument.

The second argument is an array of values passed to the function.

The apply() method is similar to the call() method (previous chapter).

Syntax
functionName.apply(this, [arg1, arg2, ...]);


Using apply() to Set this
'
When you use apply(), you can decide what this should refer to. 
 */
const appl = greet.apply(person3, ["Hello"]);
console.log(appl)



console.log('\nThe Difference Between call() and apply() - Use apply() when your arguments are already stored in an array.')
/**
 * The only difference between apply() and call() is how arguments are passed.

The call() method takes arguments separately.

The apply() method takes arguments as an array.
 */
console.log(greet.call(person, "Hello"));
console.log(greet.apply(person, ["Hello"]));


console.log('\nBorrowing a Method from Another Object - you can use call() to borrow a method from another object: - the apply() method behaves exactly the same as the call() method.') 
console.log(persong.fullName.apply(person1g)); //This will return "Mert Merdan":
console.log(persong.fullName.apply(person2g)); //This will return "Enar Gonsy":


console.log('\nThe apply() Method with Arguments')
const appled = person9.fullName.apply(person99, ["Oslo", "Norway"]);//passed this object is person99, and an array 
console.log(appled);


console.log('\n\napply() Does Not Create a New Function - call() method and the apply() method runs the function immediately')
console.log(showName.apply(person)); //apply executes the function immediately

/**
 * Common Mistakes
 * 
Forgetting to Use an Array: The second argument to apply() must be an array.

Confusing apply() with bind(): apply() runs immediately. bind() returns a new function.

Using apply() when call() is Simpler: If you do not have an array, call() is often clearer.

 */





console.log('\n\n-----JavaScript Function bind()--------')
/**
 * Method Borrowing
 * 
Like with call() and apply(), the bind() method can borrow a method from another object.

Unlike call() and apply(), the bind() method does not run the function immediately.

Instead, it returns a new function that can be called later.

The new function remembers the this value you chose.

Basic bind() Syntax
The bind() method creates a new function.

The first argument sets the this value for the new function.

Additional arguments become fixed arguments for the new function.

Syntax
const newFunction = functionName.bind(this, arg1, arg2, ...);
 */

console.log('\nUsing bind() to Fix this')
//The most common use of bind() is to make sure a function always uses the same this value.
function greet2() {
  return "Hello " + this.name;
}
const greetJohn = greet2.bind(person1);
console.log(greetJohn());


console.log('\nThe member object borrows the fullname method from the person object:') 
// Create member Object
const personn = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName + " "+this.age; //age will be provided later 
  }
}
const member = {
  firstName:"Hege",  
  age: 91,
  lastName: "Nilsen",
}
 
// Bind the fullName method to the member Object
let fullNamee = personn.fullName.bind(member);
// Later call fullname()
console.log(fullNamee())






console.log('\n\n-----bind() vs call() and apply()-------- ')
/**
 * The difference between these methods is important:

    call() calls a function immediately
    apply() calls a function immediately
    bind() returns a new function
 */
console.log('bind() for Functions Called Later')
const personp = {
  name: "John",
  sayHello: function() {
    return "Hello " + this.name;
  }
};

console.log('\nThe function below loses its this value.')
let hello = personp.sayHello; 
//console.log(hello()); // //TypeError: Cannot read properties of undefined (reading 'name')

console.log('Using bind() for Preserving this')
//The bind() method can be used to prevent losing this.
hello = personp.sayHello.bind(personp);
console.log(hello()); 


console.log('\nbind() with Arguments')
const persona = {
  name: "John",
  sayHello: function(a) {
    return "Hello " + this.name+" age: "+a;
  }
};
hello = persona.sayHello.bind(persona, 79);
console.log(hello()); 


console.log('\nbind() Does Not Change the Original Function')
/**
 *  The original function is not modified.

    Each call to bind() creates a new function.
 */
const greetJohn1 = greet2.bind({ name: "John" });
const greetAnna1 = greet2.bind({ name: "Anna" });
console.log(greetJohn1() +" : "+ greetAnna1())


/**
 * Common Mistakes
 * 
    Expecting bind() to Call the Function: bind() does not execute the function.

    Forgetting to Call the Returned Function: You must call the new function yourself.

    Overusing bind(): Sometimes a normal function call is simpler.

 */