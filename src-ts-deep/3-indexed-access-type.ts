//How to access object properties -   Dot Notation vs. Square Brackets 
//Use quotation marks when accessing with square
//Brackets, but be careful same is not true when accessing 
//Using .Dot notation. 

let myObject = { 
       "key": "value", 
       "someKey": 5, 
       "anotherKey" : true
    }
    console.log(myObject.key) //  "value“
    console.log(myObject["key"]) //  "value“
    
    let keyName = "key"
    console.log(myObject[keyName]) //  "value"
    console.log(myObject.keyName) //   undefined 
    



//We can use an indexed access type to look up a specific property on another type:
type Adam = { age: number; name: string; alive: boolean };
//console.log(Adam["age"]) //'Adam' only refers to a type, but is being used as a value
type Age = Adam["age"]; //type Age = number
type Name = Adam["name"]; //type Name = string



//The indexing type is itself a type, so we can use unions, keyof, or other types entirely:
type I1 = Adam["age" | "name"]; //type I1 = string | number
type I2 = Adam[keyof Adam];//type I2 = string | number | boolean

type AliveOrName = "alive" | "name";
type I3 = Adam[AliveOrName]; //type I3 = string | boolean

//You’ll even see an error if you try to index a property that doesn’t exist:
type I4 = Adam["alma"]; //Property 'alma' does not exist on type 'Adam'

/**
 * Another example of indexing with an arbitrary type
 *  is using number to get the type of an array’s elements. 
 * We can combine this with typeof to conveniently capture 
 * the element type of an array literal:
 */
const MyArray0 = [ "Alice", 15, true  ];

type PersonA0 = typeof MyArray0[number]; 

const MyArray1 = [
    { name: "Alice", age: 15 },
    { boolean: true, age: 15 }, 
    { name: "Eve", age: 38 }
];

type PersonA1 = typeof MyArray1[number]; 

const MyArray2 = [
    { name: "Alice", age: 15 },
    { boolean: true, age: 15 },
    { name: "Bob", age: 23 },
    { string: "Indira", date: "2024-18-18" },
    { name: "Eve", age: 38 },
];

type PersonA2 = typeof MyArray2[number]; 
/**
 * type PersonA = {
    name: string;
    age: number;
}
 */

type PersonB = {
    name: string;
    age: number;
}
type AgeA = typeof MyArray2[number]["age"];
type AgeB = number
// Or
type Age2 = PersonA2["age"];

//You can only use types when indexing, meaning you can’t use a const to make a variable reference:
const key = "age";

//type AgeW = Adam["age"]; //OK
type AgeW = Adam[key];


