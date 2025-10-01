



let myArr = ["banana", "apple", "squid", "cake", "pear"]

//Push and Unshift
/**
 * When we want to add an item to an array, push and unshift let us do that at the end and the start
 *  of the array, respectively. 
 * 
 * Adding items to the end of an array is always faster. The reason
 *  it is faster is because unshift needs to reallocate memory to add elements to the beginning of the array.
 */

myArr.push("pear") //faster
console.log(myArr) // [ "banana", "apple", "squid", "cake", "pear" ], puts at the end


//In the next example, unshift is used to add something the beginning:, puts in the beginning 
myArr.unshift("pear") //slower, because it re-allocates the array 
console.log(myArr) // [ "pear", "banana", "apple", "squid", "cake", pear" ]
console.log("-----")




//Pop and Shift
/**
 * While push and unshift both let you add data to the end and beginning 
 * of your array, respectively, pop and shift let you do the same but for removal.
 */
myArr = ["banana", "apple", "squid", "cake", "pear"]
myArr.pop() //we want to remove the value “pear”, use pop()
console.log(myArr) // [ "banana", "apple", "squid", "cake" ]
//we want to remove “banana” from the beginning of the array, we can use shift():
myArr.shift()
console.log(myArr) // [ "apple", "squid", "cake" ]


console.log("-----")
/**
 * we’ll want to change something in the middle of an array. To do this, we can use another method called splice().
 * 
 * Unlike the methods we have seen so far, splice() takes a couple of arguments, although only one is required. Since only one argument is required, 
 * the syntax for splice can look like any of the following variations:
 * 
someArray.splice(start)
someArray.splice(start, end)
someArray.splice(start, end, item1)
someArray.splice(start, end, item1, item2, item3 ... itemN)
The arguments we give to splice provide information to the function on what we want to do. These arguments are defined in the following:
•
start (required) – This is the position in the array you want to start the splice at. If it’s a negative number, it will count back from the end of the array.
•
end (optional) – This is how many items you want to delete. If you only want to insert something, then set this to 0. If you don’t put a number here, 
then all elements after the start position will be deleted.
•
item1 ... itemN (optional) – These are array items that will be inserted after the start position. You can add as many as you like here, all comma-separated.

If we only use the first argument in splice, then every element after a certain point in the array will be deleted, as is shown in the following example:
 * */
myArr = ["banana", "apple", "squid", "cake"]
myArr.splice(1)
console.log(myArr) // [ "banana", "apple" ]
myArr = ["banana", "apple", "squid", "cake"]
myArr.splice(2)
console.log(myArr) // [ "banana", "apple" ]
console.log("-----")

/**
 * If we define an end value, we can delete items in the middle of an array instead. For example, let’s delete “apple” and “octopus”:
 */
myArr = [ "banana", "apple", "squid", "cake" ]
myArr.splice(0, 2)
console.log(myArr) // [ 'squid', 'cake' ]

console.log("-----")
/**
 * Finally, if we use the arguments after start and end, we can add new items in specific parts of our array. Let’s add “strawberry” and “box” in between “banana” and “cake”, 
 * using the third and fourth arguments. Any argument given after the end argument will be added to the array at the start position:
 */
myArr = [ "banana", "apple", "squid", "cake" ]
myArr.splice(0, 2)
console.log(myArr) // [ 'squid', 'cake' ]
myArr.splice(1, 0, "strawberry", "box")
console.log(myArr) // [ 'squid', 'strawberry', 'box', 'cake' ]
