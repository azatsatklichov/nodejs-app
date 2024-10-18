let d = ["lightning", "apple", "squid", "speaker"]
for (let item of d) { //loops via values
    console.log(item) //lightning, apple, squid, speaker  
}


let e = ["lightning", "apple", "squid", "speaker"]
for (let item in eval) {//loops via properties/keys/indexes
    console.log(item) //0, 1, 2, 3  
}

let f = [] //let f: never[]
f[5] = "some value" //type 'string' is not assignable to type 'never'
for (let item of f) {
    console.log(item)
}
//undefined, undefined, undefined, undefined, undefined, "some value"


for (let item in f) {
    console.log(item)
} // Will show: 5let x = [ "lightning", "apple", "squid", "speaker" ]
d.forEach(function (value, index, array) {
    console.log(`${value} is at index ${index}`)
})


//iterator
let myArray = ["lightning", "apple", "squid", "speaker"]
let getIterator = myArray[Symbol.iterator]()
console.log(getIterator)
console.log(getIterator.next()) // {value: 'lightning', done: false}
