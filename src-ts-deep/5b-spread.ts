let greenApples: string[] = ["Granny Smith", "Lodi", "Smeralda"];

//using spread operator
let allApples: string[] = [
  "Opal",
  "Goldspur",
  "Ligol",
  "Melba",
  ...greenApples,
];
console.log(allApples);


const data = {
  temp1: "001",
  temp2: "002",
  firstName: "John",
  lastName: "Doe",
};
const [first, ...restOfItems] = [10, 20, 30, 40];
const { temp1, temp2, ...adam } = data;
const newArray = [...restOfItems];
const newObject = {
  ...adam,
};

const myObj2 = {
  z: undefined,
  y: 4,
  xx: 3
}
const { xx, ...rest } = myObj2
console.log(rest)
// Only shows z and y: { z: undefined, y: 4 }



function words(word1, word2) {
  return word1 + " " + word2
}
let validWords = ["Hello", "John"]
console.log(words(...validWords)) // Hello John


let user1 = { "name" : "John", age: 24 }
let user2 = { "name" : "Joe" }
let combineUsers = { ...user1, ...user2 }
console.log(combineUsers) // { "name" : "Joe", age: 24 }


let animals = [ "cats", "dogs"]
let objectAnimals = { ...animals }
console.log(objectAnimals) 
// {0: 'cats', 1: 'dogs'}
