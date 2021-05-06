
class Bio {

}

class Poet {

}

class Fiction {

}

enum Cat1 { Bio, Poet, Fiction }; // 0, 1, 2
enum Cat2 { Bio = 1, Poet, Fiction }; // 1, 2, 3
enum Cat3 { Bio = 5, Poet = 8, Fiction = 9 }; // 5, 8, 9

let fvIdx: Cat3 = Cat3.Bio;
console.log(fvIdx); //5
console.log(Cat3.Fiction); //9

let fvVal: string = Cat3[fvIdx];
console.log(fvVal); //Bio 
console.log(Cat3[9]); //Fiction




//Cobol Punch Card has 5 fields on positions 0-6, 7, 8-11, 12-72, 72-80
enum PunchCard { Sequence = 0, Indicator = 7, AreaA = 8, AreaB = 12, IdentificationArea = 73 };

let startPosition: PunchCard = PunchCard.AreaA;
console.log(startPosition); //8
console.log(PunchCard.IdentificationArea); //73

let fieldName: string = PunchCard[startPosition];
console.log(fieldName); //AreaA 
console.log(PunchCard[12]); //AreaB

