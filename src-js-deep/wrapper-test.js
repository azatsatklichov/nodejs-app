var x = new String("JavaScript");
var y = new String("JavaScript");
console.log(x == y);
console.log(x === y);






//JavaScript’s equality operator (==) coerces its operands, leading to unexpected behavior:
if ("" == 0) {
    // It is! But why??
    console.log('Trueeee')
}
if (1 < x < 3) {
    // True for *any* value of x!
    console.log('Trueeee');
}




//JavaScript also allows accessing properties which aren’t present:
const obj = { width: 10, height: 15 };
// Why is this NaN? Spelling is hard!
const area = obj.width * obj.heigth;

/**
 * As another example, this is JavaScript code that you can run in your browser, 
and it will log a value:
 */

console.log(4 / []); //Infinity




const someVariable = "cat";
someVariable.charAt(1) //a
someVariable.charAt(2) //s 
    //to apply Number methods, wrap with bracket or two dots
    (5).toString() // '5'
5..toString() // ''5'