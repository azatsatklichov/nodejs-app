//The process of assigning the elements of an array or the properties of an object to individual variables.

// const LN10 = Math.LN10;
// const LOG10E = Math.LOG10E;
const {LN10, LOG10E } = Math;

let apples: string[] = ["Granny Smith", "Opal", "Goldspur", "Ligol", "Melba"];

let apple1 = apples[0];
let apple2 = apples[1];
let apple3 = apples[3];
console.log(apple1); //Granny Smith

//destructing arrays
let [jablko1, jablko2, jablko3] = apples;
console.log(jablko1); //Granny Smith

let car = {
  model: "Skoda Fabia Kombi",
  karoserie: "Kombi",
  assembly: "Mlada Boleslav",
  cena: 34,
};

// let model = car.model;
// let karoserie = car.karoserie
// let assembly = car.assembly;

//property names exact match.
let { model, karoserie, assembly, cena } = car;
console.log(model); //new variable
//if object props not match or different naming
let { model: znacka, karoserie: style, assembly: factory } = car;
console.log(znacka); //new variable
