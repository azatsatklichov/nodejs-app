//New Ecmascript 2015 feature, in tsconfig.json change compiler option: "target": "ES2015“ (no ES5)

const mySym1 = Symbol(23);
const mySym2 = Symbol(23);
console.log(mySym1 === mySym2); //false
console.log(typeof mySym2); //symbol

const myObj = {
  [mySym1]: "mySym1 desc",
};
console.log(myObj);
//console.log(myObj[mySym1]);
