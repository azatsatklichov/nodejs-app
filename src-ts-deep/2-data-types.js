//Annotations and Inferences
//static typing is optional
var num1 = 1; //Type inference (number)
var num3; //safe via Type Annotation
var num2 = 23; //Type Annotation and the Value
//safe via type inference
//num1 = "d";
var num4 = num2 + num1; //Type inference (number)
var str1 = num2 + "" + num1; //Type inference (string)
console.log(str1);
//var num5:number = num2 + '' + num1; //Type inference (string)
console.log(str1);
//TS Dynamic typing
var any1;
var general = 4; //no type inference
//general.     // NO INTELLISENCE
general = "document";
general = false;
general = 123;
console.log(general);
var msg; //implicit ANY
msg = "abc"; //make type string 
//1-way cast
msg.startsWith("a");
msg.toPrecision;
//2-way
msg.startsWith("a");
//for objects
// var table : HTMLTableElement = document.createElement('table');
// var table : HTMLTableElement = <HTMLTableElement>document.createElement('table');
