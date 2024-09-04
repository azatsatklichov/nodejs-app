
function foo() {
    var variable1, variable2;
    variable1 = 5; varaible2 = 6; //????
return variable1 + varaible2;
}

varaible2 = 56;
console.log(foo());



var carName = "Ford";
console.log(carName);
var carName; //still has value  Ford
console.log(carName);
var carName = 76; //type changed (terrible)
console.log(carName);


var x = 10;// x is 10
{
    var x = 2;
    console.log(x) // x is 2
}
console.log(x) // x is 2


let y = 10;// y is 10
{
    let y = 2;
    console.log(y) // y is 2
}
console.log(y) // x is 10


let xx = 32; //"John Doe";
//let xx = "sd34.40"; //Cannot redeclare block-scoped variable 'xx'
xx = "sd34.40"; //xx = 776 
console.log(xx) //sd34.40

for (var i = 1; i <= 10; i++) {
    // Block Scope
 }
 console.log('iiiii = '+i)
     
 for (let j = 1; j <= 10;j++) {
    // Block Scope
 }
 console.log('jjjjj = '+j)
 
