


//Declaring Variables with var, let, and const
//var Versus let 


/// see also: src-js-deep/d-vars.js 

let xx = 32; //"John Doe";
//let xx = "sd34.40"; //Cannot redeclare block-scoped variable 'xx'
xx = "sd34.40"; //xx = 776 
console.log(xx) //sd34.40

function ScopeTest() {
  if (true) {
    //Globally available in the function in which it is declared
    var foo = "use anywhere";
    let bar = "use in this block";
    // do some more stuff
  }
  console.log(foo); // works!!
  console.log(bar); // error!!
}
//Globally available in the function in which it is declared in case automatic 
console.log(foo); // error!!


