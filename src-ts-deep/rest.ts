

//optional and default parameters 
var myFun2 = function (x?: number, y: string = 'I am default value') {
          return x + y;
}

//rest parameters  
var myFun3 = function (x: number, ... ids: number[]) {
          //tbd
}

myFun3(2);
myFun3(2, 3);
myFun3(2, 55, 453);