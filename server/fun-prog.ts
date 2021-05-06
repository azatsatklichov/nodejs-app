
//https://gist.github.com/donnut/fd56232da58d25ceecf1 

const test = (a: string, b: string) => b + " " + a;
test("I am arg1", " I am arg2"); // I am arg1 I am arg2

//  Currying is basically the fact of nesting returning functions and be able to partially consume a function.
const curr = (a: string) => (b: string) => b + " " + a;
curr("I am arg1")(" I am arg2"); // I am arg1 I am arg2

//const compute = (a: number, f: (x:number) => number) : number => f(a);

const square = (a: number): number => {
          let res = a * a;
          console.log(res);
          return res;
}
const cube = (a: number): number => a * a * a
const compute: (a: number) => (f: (x: number) => number) => number = a => f => f(a)

const square10 = compute(10)(square) // 100
const cube10 = compute(10)(cube) // 1000

const partialResult = compute(5) // (number => number) => number
const square5 = partialResult(square) // 25
const cube5 = partialResult(cube) // 125


// A curried function
let add = (x: number) => (y: number) => x + y;

// Simple usage
add(123)(456);

// partially applied
let add123 = add(123);

// fully apply the function
add123(456);