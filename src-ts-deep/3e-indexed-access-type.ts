//We can use an indexed access type to look up a specific property on another type:
type Adam = { age: number; name: string; alive: boolean };
//console.log(Adam["age"]) //'Adam' only refers to a type, but is being used as a value
type Age = Adam["age"];

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
const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];

type PersonA = typeof MyArray[number];
type PersonB = {
    name: string;
    age: number;
}
type AgeA = typeof MyArray[number]["age"];
type AgeB = number
// Or
type Age2 = PersonA["age"];

//You can only use types when indexing, meaning you can’t use a const to make a variable reference:
const key = "age";
//type AgeW = Adam["age"]; //OK
type AgeW = Adam[key];


