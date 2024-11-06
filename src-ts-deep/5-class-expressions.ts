abstract class Animal {
  d: number;

  constructor(public name: string) {}

  abstract swim(): void;
}

//giving a class name is optional
// class extends Animal {   ---- ERR 
let Dolphin = class extends Animal { // let Dolphin = class OLa extends Animal { 
  swim(): void {
    console.log("swim like " + ` ${this.name}`);
  }
};

let myDolphin = new Dolphin("Dolphin");
myDolphin.swim();

//how to use class expression in extension, see TWO curly braces {} {}
class Sharq extends class  { name: string; } { //class with no name, like anonymous class in Java, but not exact one 
  elasmobranchii: string;
}

let mySharq = new Sharq();
mySharq.elasmobranchii = "elasmobranchii Sharq";
mySharq.name = "Alpha";

 


  