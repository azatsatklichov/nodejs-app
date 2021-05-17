//generics
function gen<T>(thing: T): T {
  //tbd
  return thing;
}

let x: string = gen<string>("oki");
let y: number = gen<number>(123);
//let z : Book = gen<Book>(books);
