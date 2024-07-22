//New Ecmascript 2015 feature, in tsconfig.json change compiler option: "target": "ES2015“ (no ES5)
var _a;
var mySym1 = Symbol(23);
var mySym2 = Symbol(23);
console.log(mySym1 === mySym2); //false
console.log(typeof mySym2); //symbol
var myObj = (_a = {},
    _a[mySym1] = "mySym1 desc",
    _a);
console.log(myObj);
//console.log(myObj[mySym1]);
