
console.error("error") 
console.warn("warn")
console.info("info")
console.trace("trace")
console.debug("debug")
console.assert(5 === 4, "the assertion is false")
console.log("Hi") // Top Level
console.groupCollapsed("Level 1") // Level 1 Group
console.log("Hi") // All of these are within Level 1 Group
console.log("Hi")
console.log("Hi")
console.group("Level 2") // Level 2 Group
console.log("Hi") // All of these are within Level 2 Group, which are within Level 1
console.log("Hi") 

const favoriteFruits = {
    "name" : "John",
    "age" : 105,
    "place" : "Planet Earth"
}
console.table(favoriteFruits)

console.time("my timer")
setTimeout(function() {
console.timeLog("my timer")
}, 2000)
setTimeout(function() {
console.timeLog("my timer")
console.timeEnd("my timer")
}, 2500)

/**
 * 
Console Counting
Another method that works the same as console.time is console.count. It accepts a unique value, and every time it is called, it will add 1 to the count for that value. For example:
 */
console.count("my count")
console.count("my count")
console.count("my count")
console.countReset("my count")
console.count("my count")

//console.clear()
console.count("my count")

console.log(ReferenceError) 


try {
    JSON.parse("OK")
    } catch(e) {
    if(e instanceof SyntaxError) {
       console.log("This is a syntax error");
    } else if(e instanceof EvalError) {
       console.log("This was an error with the eval() function");
    }
}
