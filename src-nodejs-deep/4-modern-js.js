//SCOPES
{
  // Block Scope - LEAK happens
  var s = "sdd"; 
  //you can  access to S everywhere in whole application, DRAMATIC
}

if (true) {
  // Block Scope
}

for (var i = 1; i <= 10; i++) {
  // Block Scope
}

console.log('iiiii = '+i)

for (let j = 1; j <= 10;j++) {
  // Block Scope
}

//console.log('jjjjj = '+j)

function sum(a, b) {
  var s = "sdd";
  // Function Scope - it is OK, variables not LEAK
  //you can not access to S out of function
  var result = a + b;
}

sum(4 + 3);


//SO  use CONST or LET, there is no LEAK, they only defined in BLOCK
//ALSO they do not doing HOISTING 

///WHY CONST - CONSTANTS
// Scalar values, Arrays and Objects  
const ans  = 42; //read-only
/*
Used in code ...
*/
ans; // 42, no change 

// vs
let ans2 = 42;
/*
/*
Used in code ...
*/
ans2; // open to change, can have new value

//FUNCTIONS has its own scope and uses THIS, but arrow functions has no 'this'
const X = function () {
  // "this" here is the caller of X
};

const Y = () => {
  // "this" here is NOT the caller of Y
  // It's the same "this" found in Y's scope
};

// "this" here is "exports"
this.id = "exports";
console.log(this);

//testing THIS
const testerObj = {
  //regular syntax
  func1: function () {
    console.log("func1 this: ", this);
  },

  //arrow
  func2: () => {
    console.log("func2 this: ", this);
  //good for defining delaying like - events, listeners
  //arrow functions - no function keyword, no {} even for short cases
  },
};

testerObj.func1();
testerObj.func2();

const sqr = (a) => {
  return a * a;
};

// const sqr = (a) => a * a;
// const sqr = a => a * a;

[1, 2, 3, 4].map((a) => a * a);

//ARROWS FUNCTIONS
const sqr2 = (a) => {
  return a * a;
};
 

[1, 2, 3, 4].map((a) => a * a);

//OBJECTS
const obj = {
  p1: 10,
  p2: 20,
  f1() {},    //function with object literal
  f2: () => {},  //arrow function
};

//DESTRUCTING
// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 } = Math;

// With require
// const { readFile } = require('fs');

// const circle = {
//   label: 'circleX',
//   radius: 2,
// };
//
// const circleArea = ({ radius }) =>
//   (PI * radius * radius).toFixed(2);
//
// console.log(
//   circleArea(circle)
// );

//REST-SPREAD
const [first, ...restOfItems] = [10, 20, 30, 40];

const data = {
  temp1: "001",
  temp2: "002",
  firstName: "John",
  lastName: "Doe",
};

const { temp1, temp2, ...adam } = data;

const newArray = [...restOfItems];

const newObject = {
  ...adam,
};



///CLASSES
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}!`);
  }
}

class Student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }
  greet() {
    console.log(`Hello ${this.name} from ${this.level}`);
  }
}

const o1 = new Person("Max");
const o2 = new Student("Tina", "1st Grade");
const o3 = new Student("Mary", "2nd Grade");

o3.greet = () => console.log("I am special!");

o1.greet();
o2.greet();
o3.greet();

///ASYNC-AWAIT
class Person2 {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}!`);
  }
}

class Student2 extends Person2 {
  constructor(name, level) {
    super(name);
    this.level = level;
  }
  greet() {
    console.log(`Hello ${this.name} from ${this.level}`);
  }
}

const o11 = new Person2("Max");
const o21 = new Student2("Tina", "1st Grade");
const o31 = new Student2("Mary", "2nd Grade");
o31.greet = () => console.log("I am fine!");

o11.greet();
o21.greet();
o31.greet();
console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n")

  












//TEMPLATE STRING [interpolation] - dynanic expression and multiline
const cube = (a) =>   a * a * a;
const html = `
  <div>
    ${Math.random()}
    <br/>
    ${cube(3)};
  </div>
`;

console.log(html);
 
const nme = 'Yu';
const greeting = `Hello, ${nme}!`;
console.log(greeting); // "Hello, Yu!"




//DYNAMIC PROPERTIES
const dyno = "dynamo";
const LOG2E = Math.LOG2E;
const obje = {
  a1: 23,
  a2: "oka",
  f1() {},    //function with object literal
  f2: () => {},  //arrow function
  [dyno] :  63, //not confuse with array ;), dynamo : 63 
  LOG2E //shorter than LOG2E : LOG2E 
};


console.log(dyno);
console.log(obje.dyno);//undefined
console.log(obje.dynamo);
console.log(obje.LOG2E);