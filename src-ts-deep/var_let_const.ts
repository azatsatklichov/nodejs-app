//Declaring Variables with var, let, and const
//var Versus let

function ScopeTest() {
  if (true) {
    /*
 Globally available in the function in which it is declared
 */
    var foo = "use anywhere";
    let bar = "use in this block";
    // do some more stuff
  }
  console.log(foo); // works!!
  console.log(bar); // error!!
}
//Globally available in the function in which it is declared
console.log(foo); // error!!
