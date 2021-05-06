var x = "100";
var y = "10";

var z = x * y;
console.log(z); //1000

var z = x / y;
console.log(z);//10

var z = x - y;
console.log(z);//90

var z = x + y;
console.log(z);//10010 - String concatenation, no coercion


console.log("3" + "2");//32
console.log("3" - "2");//1


var x = 100 / "Apple";
console.log(100 / "Apple"); //NaN
console.log(isNaN(x)); //true
console.log(100 / "10"); //coercion OK
var x = 100 / "10";
console.log(isNaN(x)); //false

var x = NaN;
var y = 5;
console.log(x + y); //NaN

var x = NaN;
var y = "5";
console.log(x + y); //NaN5

var x = 2 / 0;
var y = -2 / 0;
console.log(x); //Infinity
console.log(y); //-Infinity
console.log(x + y); //NaN     Infinity - Infinity = NaN  (undefined)
console.log(x - y); //Infinity:    Infinity + Infinity = Infinity
console.log(x * y); //Infinity:    Infinity * Infinity = -Infinity
console.log(x / y); //Infinity:    Infinity / Infinity = NaN  (undefined)


console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("  10"));
console.log(Number("10  "));
console.log(Number(" 10  "));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("John"));

console.log(Number(new Date("2017-09-30")));
console.log(parseFloat("years 10"));
console.log(parseFloat("10.33"));
console.log(parseFloat("10.33"));
console.log(parseFloat("10 6"));


console.log(Number.POSITIVE_INFINITY);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

//<h2>JavaScript Number Object Properties</h2>
//<p>Using a Number property on a variable, expression, or value, will return undefined:</p>

var x = 6;
console.log(x.MAX_VALUE);

console.log("------------------");

console.log(isNaN(NaN));       // true
console.log(isNaN(0));  //false
console.log(isNaN('opt')); // true
console.log(isNaN('0'));   // false
console.log(100 / "Apple"); //NaN
console.log(isNaN(100 / "Apple")); //NaN
console.log(100 / "10"); //10, coercion OK
console.log(isNaN(100 / "10")); //10, coercion OK
