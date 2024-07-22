"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
var Bio = /** @class */ (function () {
    function Bio() {
    }
    return Bio;
}());
var Poet = /** @class */ (function () {
    function Poet() {
    }
    return Poet;
}());
var Fiction = /** @class */ (function () {
    function Fiction() {
    }
    return Fiction;
}());
var Cat1;
(function (Cat1) {
    Cat1[Cat1["Bio"] = 0] = "Bio";
    Cat1[Cat1["Poet"] = 1] = "Poet";
    Cat1[Cat1["Fiction"] = 2] = "Fiction";
})(Cat1 || (Cat1 = {})); // 0, 1, 2
var Cat2;
(function (Cat2) {
    Cat2[Cat2["Bio"] = 1] = "Bio";
    Cat2[Cat2["Poet"] = 2] = "Poet";
    Cat2[Cat2["Fiction"] = 3] = "Fiction";
})(Cat2 || (Cat2 = {})); // 1, 2, 3
var Cat3;
(function (Cat3) {
    Cat3[Cat3["Bio"] = 5] = "Bio";
    Cat3[Cat3["Poet"] = 8] = "Poet";
    Cat3[Cat3["Fiction"] = 9] = "Fiction";
})(Cat3 || (Cat3 = {})); // 5, 8, 9
var fvIdx = Cat3.Bio;
console.log(fvIdx); //5
console.log(Cat3.Fiction); //9
var fvVal = Cat3[fvIdx];
console.log(fvVal); //Bio
console.log(Cat3[9]); //Fiction
//Cobol Punch Card has 5 fields on positions 0-6, 7, 8-11, 12-72, 72-80
var PunchCard;
(function (PunchCard) {
    PunchCard[PunchCard["Sequence"] = 0] = "Sequence";
    PunchCard[PunchCard["Indicator"] = 7] = "Indicator";
    PunchCard[PunchCard["AreaA"] = 8] = "AreaA";
    PunchCard[PunchCard["AreaB"] = 12] = "AreaB";
    PunchCard[PunchCard["IdentificationArea"] = 73] = "IdentificationArea";
})(PunchCard || (PunchCard = {}));
var startPosition = PunchCard.AreaA;
console.log(startPosition); //8
console.log(PunchCard.IdentificationArea); //73
var fieldName = PunchCard[startPosition];
console.log(fieldName); //AreaA
console.log(PunchCard[12]); //AreaB
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (exports.Category = Category = {}));
