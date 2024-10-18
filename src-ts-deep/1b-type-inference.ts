//Annotations and Inferences

//static typing is optional
var num1 = 1; //Type inference (number)
var num3: number; //safe via Type Annotation
var num2: number = 23; //Type Annotation and the Value
//safe via type inference
//num1 = "d";
num1 = "sds"; //not assignable to number 

var num4 = num2 + num1; //Type inference (number)
var str1 = num2 + "" + num1; //Type inference (string)
console.log(str1);
//var num5:number = num2 + '' + num1; //Type inference (string)
console.log(str1);

 
const person: {
  name: string;
  born: {
    where: string;
    when: string;
  };
} = {
  name: 'Alym',
  born: {
    where: 'Merv',
    when: 'c.1797',
  }
};


const person2 = {
  name: 'Alym',
  born: {
    where: 'Merv',
    when: 'c.1797',
  },
};


//Allowing types to be inferred can also facilitate refactoring
interface Product {
  id: number;
  name: string;
  price: number;
}

function logProduct(product: Product) {
  const id: number = product.id;
  const name: string = product.name;
  const price: number = product.price;
  console.log(id, name, price);
}


function logProduct2(product: Product) {
  const { id, name, price } = product;
  console.log(id, name, price);
}


const p = { id: 2323, name: "Ola", price: 3434 }
logProduct(p);
logProduct2(p);



//avoid using type annotations everywhere
const arr: string[] = ['a', 'b', 'c'];
arr.forEach((str: string) => {
    //TBD
});
//prefer below, we will get full type safety, TS already know it
arr.forEach((str) => {
    //TBD
});


//output
/**
 * 23sds
23sds
2323 Ola 3434
2323 Ola 3434
 */

//Type Inference TypeScript can infer the type of an array if it has values.
const numbers2 = [1,2,3];// inferred to type number[]
numbers2.push(4); // no error 
// comment line below out to see the successful assignment
numbers2.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let heads: number = numbers2[0]; // no error


//////////////
//TS Dynamic typing
var any1;
var general: any = 4; //no type inference
//general.     // NO INTELLISENCE, try control space
general = "document";

general = false;
general = 123;

console.log(general);

let msg; //implicit ANY
msg = "abc"; //NO  SMARTNESS

//1-way cast
(<string>msg).startsWith("a"); //you see, already autocompletion 
//if msg is number
(<number>msg).toPrecision;

//2-way
(msg as string).startsWith("a");


//for objects
// var table : HTMLTableElement = document.createElement('table');
// var table : HTMLTableElement = <HTMLTableElement>document.createElement('table');
