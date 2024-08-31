function* someGenerator(x) {
    let index = 0
    while(true) {
        yield x * 10 * index
        ++index
    }
}
const runG = someGenerator(5)
console.log(runG.next()) // {value: 0, done: false}
console.log(runG.next()) // {value: 50, done: false}
console.log(runG.next()) // {value: 100, done: false}
console.log(runG.next()) // {value: 150, done: false}