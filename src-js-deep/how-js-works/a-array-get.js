let myArr = [ "one", 2, "three", { "value": "four" } ]
let arrayLength = myArr.length
console.log(arrayLength) // shows 4

//last element
console.log(myArr[myArr.length - 1]) // shows "four"


/**
 * While you will see this way of getting the last element of an array everywhere, 
 * a more modern and efficient method is to use the array method, .at().
 * 
 * The main difference is that if you use negative numbers, it starts counting 
 * from the opposite end – so .at(-1) also gets the last element of an array:
 */
console.log(myArr.at(-1)) // shows "four"
console.log(myArr.at(-3)) // shows 2