
/**
 * Generator Functions
The final type of function we’ll look at is known as the generator function. Earlier,
 when we looked at array iteration, we mentioned how we could create an iterator with 
 access to the next() method by accessing the iterator protocol:
 */
let myArray = ["lightning", "apple", "squid", "speaker"]
let getIterator = myArray[Symbol.iterator]()
console.log(getIterator.next()) // {value: 'lightning', done: false}


//Generator functions work in a similar way and are denoted by function*. A simple generator function looks like this:
function* someGenerator(x) {
    let index = 0
    while (true) {
        yield x * 10 * index
        ++index
    }
}

let runG = someGenerator(5)
console.log(runG.next()) // {value: 0, done: false}
console.log(runG.next()) // {value: 50, done: false}
console.log(runG.next()) // {value: 100, done: false}
console.log(runG.next()) // {value: 150, done: false}




function* someGenerator2(x) {
    let index = 0
    while (true) {
        yield x * 10 * index
        return 5
    }
}

console.log()
runG = someGenerator(5)
console.log(runG.next()) // {value: 0, done: false}
console.log(runG.next()) // {value: 5, done: true}
console.log(runG.next()) // {value: undefined, done: true}

//from test4z - TS way 
/**
function* readAllFiles(dir: string): Generator<string> {
  const files = readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      yield* readAllFiles(path.join(dir, file.name));
    } else {
      yield path.join(dir, file.name);
    }
  }
}
   */