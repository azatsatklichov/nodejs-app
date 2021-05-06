abstract class Animal { 

   d: number;

    constructor(public name:string){ 
    }

    abstract swim(): void;
}


//giving a class name is optional
let Dolphin = class extends Animal {
   swim(): void {
      console.log('swim like '  + ` ${this.name}`);  
   }
}

let myDolphin = new Dolphin('Dolphin');
myDolphin.swim();

//how to use class expression in extension
class Sharq extends class {name : string} {
   elasmobranchii : string;
}

let mySharq = new Sharq();
mySharq.elasmobranchii = 'elasmobranchii Sharq';
mySharq.name = 'Alpha';
          