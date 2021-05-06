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
