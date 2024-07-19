var a = 3; 

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
console.log(MYAPP)

//alert(a);
console.log(a);
var a = 10;
console.log(a);

f();

function f() {
    console.log("f()")
}

function g() {
    return b;
}
console.log(g());
console.log("--")

//HOISTING is not working for initialized variables
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


//SECURITY issue, If a variable is not explicitly declared, then JS assumes that the variable was global see varaible2
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
 
//SECURITY issue, If a variable is not explicitly declared, then JS assumes that the variable was global see varaible2
function foo2() {
    var variable1, variable2;
    variable1 = 5; varaible2 = 6; //????
    return variable1 + varaible2;
}


console.log(foo2());
console.log(variable1);//ReferenceError: variable1 is not defined
console.log(varaible2);
