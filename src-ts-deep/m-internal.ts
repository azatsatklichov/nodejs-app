/// <reference path="shapes.ts" />
/// <reference path="Utility.ts" />

//“Triple-Slash” References
//Enhances editor support for referenced files
//import util = Utility.Fees;


namespace ShapeMaker {
  var rect = new Shapes2.Rectangle2(2, 4);
}



let fee = Utility.Fees.CalculateLateFee(10);
console.log(`Fee: ${fee}`);
