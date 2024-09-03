

let myMap = new Map()
myMap.set("key", "value")
myMap.set("secondKey", "value")
myMap.delete("key")
console.log(myMap) // Map(1) {'secondKey' => 'value'}
myMap.clear()
console.log(myMap) // Map(0) {}

let myMap2 = new Map()
myMap2.set("hello", "world")
myMap2[0] = "hello"
console.log(myMap2)

let myMap3 = new Map()
myMap3.set(() => { return true }, "value")
console.log(myMap3) // Map(1) { [Function (anonymous)] => 'value' }

let myMap4 = new Map()
let someArray = [ 1, 2 ]
myMap4.set(someArray, "value")
//To retrieve the someArray entry, we reference the variable, someArray:
const c = myMap4.get(someArray) // value
console.log(c)

/**
 * The functionality that allows us to set map keys to any value leads to some interesting problems. 
 * Since the map holds a reference to the object, someArray, someArray will never be garbage collected. 
 * Normally, when objects become unreferenced, JavaScript will automatically remove them from memory.
 * 
 * This means that if you do what we did in the preceding example enough, you might run into memory 
 * issues, and ultimately memory errors in your code.
To overcome that particular problem, another type of map called a WeakMap exists. WeakMaps have a more 
limited set of methods (get, set, has, and delete) but will allow for garbage collection of objects 
where the only reference to that object is in the WeakMap. WeakMaps are not iterable, meaning 
accessing them relies solely on get(). This makes them much more limited than maps but useful when solving this particular problem.
 You can create a WeakMap in the same way as a map, but by using the WeakMap constructor instead:
 */
let myMap5 = new WeakMap()
let someArray5 = [ 1, 2 ]
myMap5.set(someArray5, "value")


let myMapOne = new Map()
myMapOne.set("key", "value")
let myMapTwo = new Map()
myMapTwo.set("secondKey", "value")
myMapTwo.set("key", "value2")
// Map{2} {4, 5}
let bigMap = new Map([...myMapOne, ...myMapTwo])
console.log(bigMap) // Map(2) {'key' => 'value', 'secondKey' => 'value'}