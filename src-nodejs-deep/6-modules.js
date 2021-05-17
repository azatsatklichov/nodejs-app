
function dynamicArgsFunction() {
  console.log(arguments);
  console.log("------");
}

dynamicArgsFunction(3, 7, 5, 4);

//module 
let g= 23;
exports.x = 63;
module.exports.g=144; //alias relationship

//but you can not
//exports = () => {console.log("not works");}; //NOT  
//alternative
//module.exports = () => {console.log(" works");}

console.log(arguments);


