/*eslint no-redeclare: "error"*/
var a = 3;
var a = 10;


/*eslint no-use-before-define: "error"*/
/*eslint-env es6*/


var MYAPP = {};

MYAPP.student = {
    "first-name": "Alan",
    "last-name": "Shearer"
};
MYAPP.flight = {
    airline: "CSA",
    number: 123,
    departure: {
        IATA: "ROM",
        time: "20019-09-23 13:32",
        city: "Roma"
    },
    arrival: {
        IATA: "PRG",
        time: "2019-09-24 11:07",
        city: "Prague"
    }
};


//alert(a);
console.log(a);
var a = 10;

f();

function f() {
}

function g() {
    return b;
}

var b = 1;

{
    //alert(c);
    console.log(a);
    let c = 1;
}



var carName = "Ford";
console.log(carName);
var carName; //still has value  Ford
console.log(carName);
var carName = 76; //type changed
console.log(carName);
var carName = null; //null
console.log(carName);


function foo() {
    var variable1, variable2;
    variable1 = 5; varaible2 = 6;
    return variable1 + varaible2;
}


console.log(foo());
variable2 = 8;
varaible2 = 18;
console.log(foo());
console.log(varaible2);


myObj = {"sds":12}
for (myProp in myObj){
    if(myObj.hasOwnProperty("sdss")){
        console.log("--- sddsd")
    }
} 
console.log("sddsd")
 

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


//array is complex type, even though [] has typeof Object
console.log([] instanceof Array); //true
console.log(typeof []); //object
//instance of only works for complex data type 
const a = "I'm a string primitive";
const b = new String("I'm a String Object");
console.log(a instanceof String); //returns false
console.log(b instanceof String); //returns true

