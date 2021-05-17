let x1: string | number = 144;
if (typeof x1 === "number") {
  //here important is TYPE is NARROWED (here NUMBER)
  //(not exist in Java until Java 15)
  //TBD
} else {
  //narrowed to STRING. Compiler does this
}

//typeof drawback -  only used for specific types
// (string, number, booleand and symbol)

//Instanceof -   works on other types, which has a constructor, ..
class Football {}
class Hockey {}
let sport: Football | Hockey = new Football();
if (sport instanceof Football) {
  //narrowed to Football, so safe to use
}

interface Drink {
  taste: string;
}
//Java has sealed Classes concept, similar usage, ..
function isDrink(d: any): d is Drink {
  return (<Drink>d).taste !== undefined;
}
let f = new Football();
if (isDrink(f)) {
  console.log("Yes it is a drink type");
} else {
  console.log("It is not a drink");
}
