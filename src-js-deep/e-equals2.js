




var a = "JavaScript";
var b = new String("JavaScript");             

if(a==b){
    console.log("a==b") //printed a==b, values are equal 
}
if(a===b){
    console.log("a==b") //skipped, because a and b have different types (string and object)
}

var c = new String("JavaScript");
if(b==c){
    console.log("b==c") //skipped, because b and c are different objects
}
if(b===c){
    console.log("b==c") //skipped, because b and c are different objects
}  


console.log(Object.is(a, a)); //true  
console.log(Object.is(a, b)); //false 
console.log(Object.is(b, c)); //false  
console.log(Object.is(b, b)); //true 

console.log('---')
console.log(5=='5')//true
console.log(5==='5')//false
console.log(0=="") //true 
console.log(1=="1")//true
console.log(1==true)//true
console.log(0==="")//false
console.log(1==="1")//false
console.log(1===true)//false



let check  = new Boolean (false);
if(check) {
    console.log("WOW FOUND, even FALSE");//FOUND, even FALSE
}

let check2  = false;
if(check2) {
    console.log("WOW FOUND, even FALSE");//skipped
}


///nodejs

//Result Size: 1185 x 1134
var assert = require('assert');
var x = { a: { n: 0 } };
var y = { a: { n: 0 } };
var z = { a: { n: '0' } };
assert.deepStrictEqual(x, y);
//assert.deepStrictEqual(x, z);


var x = { a: { n: 0 }, b: { n: 0 } };
var yy = { b: { n: 0 }, b: { n: 0 } };
assert.deepStrictEqual(x, yy);
   