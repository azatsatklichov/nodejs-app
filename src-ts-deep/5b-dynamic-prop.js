var _a;
//DYNAMIC PROPERTIES
var dyno = "dynamo"; //can be provided at runtime
var LOG2E = Math.LOG2E;
var obje = (_a = {
        a: "oka",
        f1: function () { }, //function with object literal
        f2: function () { }
    },
    _a[dyno] = 63,
    _a.LOG2E = LOG2E //shorter than LOG2E : LOG2E 
,
    _a);
console.log(obje[dyno]); //63
console.log(obje["dyno"]); //undefined
//dyno
console.log(obje.dynamo); //63
console.log(obje['dynamo']); //63
