//default  parameter 
var myFun1 = function (y: string = "I am default value") {
  return  y;
};

console.log(myFun1("23"));//23
console.log(myFun1());//default param is used if not profided //I am default value

//optional  parameter 
var myFun11 = function (y?: string) {
  return  y;
};
console.log(myFun11("23")); //23
console.log(myFun11());//optional - no need  //undefined


//optional and default parameters
var myFun2 = function (x?: number, y: string = "I am default value") {
  return x + y;
};

//rest parameters
var myFun3 = function (x: number, ...ids: number[]) {
  //tbd
};

myFun3(2);
myFun3(2, 3);
myFun3(2, 55, 453);


//No warningfor un-used variables
function fun(_variable:string){
  console.log('Justsee,nowarningevenvariablenotused');
}
  