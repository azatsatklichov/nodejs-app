abstract class Animal {
  d: number;

  constructor(public name: string) {}

  abstract swim(): void;
}

//giving a class name is optional
let Dolphin = class  extends Animal { // class Dolphin extends Animal  
  swim(): void {
    console.log("swim like " + ` ${this.name}`);
  }
};

let myDolphin = new Dolphin("Dolphin");
myDolphin.swim();

//how to use class expression in extension, see TWO curly braces {} {}
class Sharq extends class {  //class with no name, like anonymous class in Java, but not exact one  
  name: string;
} {
  elasmobranchii: string;
}

let mySharq = new Sharq();
mySharq.elasmobranchii = "elasmobranchii Sharq";
mySharq.name = "Alpha";
