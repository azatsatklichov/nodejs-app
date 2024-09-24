let display = function (msg) {
  console.log(msg);
};

display("fun");

//arrow function
let display2 = (msg) => {
  console.log(msg);
};

display2("fun2");

//optional and default parameters
var myFun2 = function (x?: number, y: string = "I am default value") {
  return x + y;
};


//un-used parameters, no-complain with warning 
var myFun22x = function (m: string, m2:string) {
  return "Ola";
};

var myFun22 = function (
  _m: string,
  x?: number,
  y: string = "I am default value"
) {
  console.log("s");
  return x + y;
};





var myArrFun = (x: number, y: number) => x * y;

var greetMe: (msg: string) => void;

greetMe = function (msg) {
  console.log(msg);
};

greetMe("Hello!");
let xs = greetMe("Hello!");
console.log(xs);

//Arrow function syntax
let myBooks = []; //tbd
myBooks.forEach(() => console.log("Done reading!"));
myBooks.forEach((title) => console.log(title));
myBooks.forEach((title, idx, arr) => console.log(idx + " -" + title));
//fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));
myBooks.forEach((title, idx, arr) => {
  console.log(idx + " -" + title);
  //tbd
});

//capturing THIS
function MyBook() {
  //because this will refer different in callback function below
  let self = this; //workaround in JS
  self.author = "matem";
  setInterval(function () {
    console.log(self.author);
  }, 100);
}

function MyBook2() {
  //just use this directly in arrow f unction
  this.author = "matem";
  setInterval(() => {
    console.log(this.author);
  }, 100);
}
