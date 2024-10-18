var d = ["lightning", "apple", "squid", "speaker"];
for (var _i = 0, d_1 = d; _i < d_1.length; _i++) { //loops via values
    var item = d_1[_i];
    console.log(item); //lightning, apple, squid, speaker  
}
var e = ["lightning", "apple", "squid", "speaker"];
for (var item in eval) { //loops via properties/keys/indexes
    console.log(item); //0, 1, 2, 3  
}
var f = []; //let f: never[]
f[5] = "some value"; //type 'string' is not assignable to type 'never'
for (var _a = 0, f_1 = f; _a < f_1.length; _a++) {
    var item = f_1[_a];
    console.log(item);
}
//undefined, undefined, undefined, undefined, undefined, "some value"
for (var item in f) {
    console.log(item);
} // Will show: 5let x = [ "lightning", "apple", "squid", "speaker" ]
d.forEach(function (value, index, array) {
    console.log("".concat(value, " is at index ").concat(index));
});
//iterator
var myArray = ["lightning", "apple", "squid", "speaker"];
var getIterator = myArray[Symbol.iterator]();
console.log(getIterator);
console.log(getIterator.next()); // {value: 'lightning', done: false}
