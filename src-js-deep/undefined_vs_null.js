console.log('undefined vs null');

var x = "JS-value";
//in Java duplicate field error
var x; //but not for x=6
console.log('If you re-declare a JavaScript variable, it will not loose its value. x = ' + x);// x = JS-value


console.log(typeof undefined);
console.log(typeof null)
console.log(null == undefined); //loose equality 
console.log(null === undefined) //strict equality

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
 
console.log()
//not object 
myObj = null;
//at least an object with undefined value  
var myObj2; //or = undefined;
if (myObj === undefined) {
  console.log("I am an object"); 
}
if (myObj2 === undefined) {
  console.log("I am an object2"); 
}
console.log(myObj)
console.log(myObj2)
 
//you see, !myObj
if(!myObj && typeof myObj  === 'object'){
  console.log('I am obj');
}
 