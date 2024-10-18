

//DYNAMIC PROPERTIES
const dyno = "dynamo"; //can be provided at runtime
const LOG2E = Math.LOG2E;
const obje = {
 a: "oka",
 f1() {},  //function with object literal
 f2: () => {}, //arrow function
 [dyno] : 63, //not confuse with array ;), dynamo : 63 
 LOG2E //shorter than LOG2E : LOG2E 
};

console.log(obje[dyno])//63
console.log(obje["dyno"])//undefined
//dyno
console.log(obje.dynamo) //63
console.log(obje['dynamo']) //63


 