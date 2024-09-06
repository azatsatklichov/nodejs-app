console.log('undefined vs null');

var x = "JS-value";
//in Java duplicate field error
var x; //but not for x=6
console.log('If you re-declare a JavaScript variable, it will not loose its value. x = '+x);// x = JS-value


console.log(typeof undefined );
console.log(typeof null )
console.log(null === undefined)
console.log(null == undefined);

let myObj = {}
value = myObj["age"]; //undefined
if (value == null) {
  console.log("I am null"); //I am null
}
if (value == undefined) {
  console.log("I am undefined"); //I am undefined
}
if (value === null) {
  console.log("I am null"); //skipped
}
if (value === undefined) {
  console.log("I am undefined"); //I am undefined
}
