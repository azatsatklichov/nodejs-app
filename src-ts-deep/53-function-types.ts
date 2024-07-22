let x: number;
x = 5;

let IdGenFunc: (chars: string, nums: number) => string;
IdGenFunc = (name: string, id: number) => {
  return id + name;
};

let myID: string = IdGenFunc("gulsirin", 63);
console.log(myID);

//or
function PubMsg(year: number): string {
  return "Pub: " + year;
}
let pubFunc: (someYear: number) => string;
pubFunc = PubMsg;
let msg: string = pubFunc(2022);
console.log(msg);
