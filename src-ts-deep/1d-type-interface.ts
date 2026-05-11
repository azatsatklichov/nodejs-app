
//https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
/**
 * 
Defining Types

You can use a wide variety of design patterns in JavaScript. However, some design patterns make it difficult for types to be inferred 
automatically (for example, patterns that use dynamic programming). To cover these cases, TypeScript supports an extension of the JavaScript 
language, which offers places for you to tell TypeScript what the types should be.
For example, to create an object with an inferred type which includes name: string and id: number, you can write: 
 */

const user = {
  name: "Hayes",
  id: 0,
};

//You can explicitly describe this object’s shape using an interface declaration:
interface User {
  name: string;
  id: number;
}

//You can then declare that a JavaScript object conforms to the shape of your new interface by using syntax like : TypeName after a variable declaration:
const user2: User = {
  name: "Hayes",
  id: 0,
};

//If you provide an object that doesn’t match the interface you have provided, TypeScript will warn you: 
const user3: User = {
  username: "Hayes", //Object literal may only specify known properties, and 'username' does not exist in type 'User'.
  id: 0,
};
 
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
//this is actually a|DUCK TYPE check, not a class check. If the object has the required properties, it is considered to be of the correct type, 
// regardless of its actual class or prototype chain. This is a fundamental aspect of TypeScript's type system, which is based on structural typing 
// rather than nominal typing. 
const user4: User = new UserAccount("Murphy", 1); 

//this is a correct implementation of the User interface, as it has all the required properties (name and id) and their types match the interface definition. 
class UserAccount2 implements User {  
  name: string;
  id: number;
  own: number;
 
  constructor(name: string, id: number, own: number) {
    this.name = name;
    this.id = id;
    this.own = own;
    //this.own = 0; //This is also valid, as it assigns a default value to the own property, which is not required by the User interface. 
  }
}
 
//In Java this is possible, because class implementation is based on nominal typing, 
// where the type of an object is determined by its class or interface declaration. 
// In TypeScript, however, the type of an object is determined by its structure
// (i.e., the properties it has and their types), rather than its class or interface declaration.
const user5: User = new UserAccount("Murphy", 1, 93); 




//You can use interfaces to annotate parameters and return values to functions:
function deleteUser(user: User) {
  // ...
}
 
function getAdminUser(): User {
  //...
  return new UserAccount("Murphy", 1);
}
