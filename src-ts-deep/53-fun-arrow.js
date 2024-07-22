var display = function (msg) {
    console.log(msg);
};
display("fun");
//arrow function
var display2 = function (msg) {
    console.log(msg);
};
display2("fun2");
//optional and default parameters
var myFun2 = function (x, y) {
    if (y === void 0) { y = "I am default value"; }
    return x + y;
};
var myFun22 = function (_m, x, y) {
    if (y === void 0) { y = "I am default value"; }
    console.log("s");
    return x + y;
};
var myArrFun = function (x, y) { return x * y; };
var greetMe;
greetMe = function (msg) {
    console.log(msg);
};
greetMe("Hello!");
var xs = greetMe("Hello!");
console.log(xs);
//Arrow function syntax
var myBooks = []; //tbd
myBooks.forEach(function () { return console.log("Done reading!"); });
myBooks.forEach(function (title) { return console.log(title); });
myBooks.forEach(function (title, idx, arr) { return console.log(idx + " -" + title); });
//fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));
myBooks.forEach(function (title, idx, arr) {
    console.log(idx + " -" + title);
    //tbd
});
//capturing THIS
function MyBook() {
    //because this will refer different in callback function below
    var self = this; //workaround in JS
    self.author = "matem";
    setInterval(function () {
        console.log(self.author);
    }, 100);
}
function MyBook2() {
    var _this = this;
    //just use this directly in arrow function
    this.author = "matem";
    setInterval(function () {
        console.log(_this.author);
    }, 100);
}
