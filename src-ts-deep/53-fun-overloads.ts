//you can not just DO overload functions as in JAVA 
function getId(user: string) {}
function getId(user: number) {}


//define overloaded functions
function getIds(user: string): string[];
function getIds(active: boolean): string[];
//implementation function
function getIds(factor: any): string[] {
  if (typeof factor == "string") {
    //tbd
  } else if (typeof factor == "boolean") {
    //tbd
  }
  return []; //result
}

console.log(getIds("string param"));
