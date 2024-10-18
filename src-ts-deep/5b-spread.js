var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var greenApples = ["Granny Smith", "Lodi", "Smeralda"];
//using spread operator
var allApples = __spreadArray([
    "Opal",
    "Goldspur",
    "Ligol",
    "Melba"
], greenApples, true);
console.log(allApples);
var data = {
    temp1: "001",
    temp2: "002",
    firstName: "John",
    lastName: "Doe",
};
var _a = [10, 20, 30, 40], first = _a[0], restOfItems = _a.slice(1);
var temp1 = data.temp1, temp2 = data.temp2, adam = __rest(data, ["temp1", "temp2"]);
var newArray = __spreadArray([], restOfItems, true);
var newObject = __assign({}, adam);
var myObj2 = {
    z: undefined,
    y: 4,
    xx: 3
};
var xx = myObj2.xx, rest = __rest(myObj2, ["xx"]);
console.log(rest);
// Only shows z and y: { z: undefined, y: 4 }
function words(word1, word2) {
    return word1 + " " + word2;
}
var validWords = ["Hello", "John"];
console.log(words.apply(void 0, validWords)); // Hello John
var user1 = { "name": "John", age: 24 };
var user2 = { "name": "Joe" };
var combineUsers = __assign(__assign({}, user1), user2);
console.log(combineUsers); // { "name" : "Joe", age: 24 }
var animals = ["cats", "dogs"];
var objectAnimals = __assign({}, animals);
console.log(objectAnimals);
// {0: 'cats', 1: 'dogs'}
