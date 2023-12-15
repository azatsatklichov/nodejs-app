/**
 * https://www.geeksforgeeks.org/node-js-constructor-new-vm-script-method/
 * 
 * The Constructor: new vm.Script() method creates a new vm.Script object and 
 * compiles the stated code but it does not run the code. Moreover, the 
 * compiled vm.Script can run afterwards as many times as required. Here, 
 * the code is not connected to any global object, rather it’s connected before 
 * each run, just for that particular run.

Syntax:

Constructor: new vm.Script( code, options )
 */
// Constructor: new vm.Script() method

// Including vm and util module
const util = require("util");
const vm = require("vm");

// Creating context
const context = {
  number: 2,
};

// Calling the constructor
const script = new vm.Script('Type = "Int"; number *= 2;');

// Contextifying object
vm.createContext(context);

// Calling runInContext method
script.runInContext(context);

// Displays output
console.log(context);


 
  
// Defining x and y
 var x = 40; var y = 17;
   
// Adding x and y
const z = x + y;
  
// Dwfining code
let code = console.log(z);
  
// Defining script
let script2 = new vm.Script(code);
  
// Calling runInThisContext method
script2.runInThisContext();


/**
 * The vm.createContext() method is used to create a single context that can 
 * be utilized to run more than one scripts. Moreover, if the stated 
 * contextObject is neglected then a new, empty contextified object is returned. 
 * However, if contextObject is stated then, this method will ready that object 
 * so that it can be used in calling vm.runInContext() or script.runInContext(). 
 * Where the contextObject will be the global object inside such scripts which 
 * can retain its active properties. And outside the scripts, it run by vm 
 * module and even global variables remain constant.

Syntax: 

vm.createContext( contextObject, options )
 */

// Assigning value to the global variable
global.globalVar = 10;
  
// Defining Context object
const object = { globalVar: 4 };
  
// Contextifying stated object
// using createContext method
vm.createContext(object);
  
// Compiling code
vm.runInContext('globalVar /= 2;', object);
  
// Displays the context
console.log("Context: ", object);
  
// Displays value of global variable
console.log("Global Variable is ", global.globalVar);