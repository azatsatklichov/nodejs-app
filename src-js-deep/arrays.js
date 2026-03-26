console.log('\n\n Arrays')
/**
  An array is a linear allocation of memory in which elements are accessed by integers
that are used to compute offsets. Arrays can be very fast data structures. Unfortunately,
JavaScript does not have anything like this kind of array.

Instead, JavaScript provides an object that has some array-like characteristics. It converts
array subscripts  (or index) into strings that are used to make properties. 

['a', 'b', 'c'] --> {"1": "a", "2":"b", "3":"c"}

It is significantly slower than a real array, but it can be more convenient to use. 

Retrieval and updating of properties work the same as with objects, except that there is a special trick
with integer property names. 

Arrays have their own literal format. Arrays also have a much more useful set of built-in methods.
 */

var empty = [];
var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
];
empty[1] // undefined
numbers[1] // 'one'
empty.length // 0
numbers.length // 10

console.log(numbers)
console.log(numbers.length)


//The object literal:
var numbers_object = {
    '0': 'zero', '1': 'one', '2': 'two',
    '3': 'three', '4': 'four', '5': 'five',
    '6': 'six', '7': 'seven', '8': 'eight',
    '9': 'nine'
};

console.log(numbers_object)
console.log(numbers_object.length) //Object has no length 

console.log('\nSignificant differences. numbers inherits from Array.prototype, whereas number_object inherits from Object.prototype. Also every array has a length property.')
/**
 * produces a similar result. Both numbers and number_object are objects containing 10
properties, and those properties have exactly the same names and values. But there
are also significant differences. numbers inherits from Array.prototype, whereas
number_object inherits from Object.prototype, 

so numbers inherits a larger set of useful methods. Also, numbers gets the mysterious length property, while number_object does not.
 */


var v = "In most languages, the elements of an array are all required to be of the same type. JavaScript allows an array to contain any mixture of values:"
console.log("\n" + v)
var misc = [
    'string', 98.6, true, false, null, undefined,
    ['nested', 'array'], { object: true }, NaN,
    Infinity
];
console.log(misc.length)


console.log('\n\nLENGTH - every array has a length property.')
//The length property is the largest integer property name in the array plus one.
/**
 * The [] postfix subscript operator converts its expression to a string using the expression’s
toString method if it has one. That string will be used as the property name. If
the string looks like a positive integer that is greater than or equal to the array’s current
length and is less than 4,294,967,295, then the length of the array is set to the
new subscript plus one.
 */
var myArray = [];
myArray.length // 0
myArray[1000000] = true;
console.log(myArray.length) // 1000001
// myArray contains one property.


console.log('\nThe length can be set explicitly.')
/**
 *  Making the length larger does not allocate more
space for the array. Making the length smaller will cause all properties with a subscript
that is greater than or equal to the new length to be deleted:
 */
numbers.length = 3;
// numbers is ['zero', 'one', 'two']

//A new element can be appended to the end of an array by assigning to the array’s current length:
numbers[numbers.length] = 'shi';
// numbers is ['zero', 'one', 'two', 'shi']
//It is sometimes more convenient to use the push method to accomplish the same thing:
numbers.push('go');
// numbers is ['zero', 'one', 'two', 'shi', 'go']



console.log('\nDelete - Unfortunately, that leaves a hole in the array. ')
/*
Since JavaScript’s arrays are really objects, the delete operator can be used to remove elements from an array:

Unfortunately, that leaves a hole in the array. This is because the elements to the
right of the deleted element retain their original names. What you usually want is to
decrement the names of each of the elements to the right.
*/
delete numbers[2];
// numbers is ['zero', 'one', undefined, 'shi', 'go']


console.log('Delete - surgery by splice method on an array')
//Fortunately, JavaScript arrays have a splice method. It can do surgery on an array, deleting some number of elements and replacing them with other elements.
numbers.splice(2, 1); //The first argument is an ordinal in the array. The second argument is the number of elements to delete.
// numbers is ['zero', 'one', 'shi', 'go']
/**
 * The property whose value is 'shi' has its key changed from '4' to '3'. Because every
property after the deleted property must be removed and reinserted with a new key,
this might not go quickly for large arrays.
 */






console.log('\nENUMERATION - surgery by splice method on an array')
/**
 * Since JavaScript’s arrays are really objects, the for in statement can be used to iterate
over all of the properties of an array. 

Unfortunately, for in makes no guarantee
about the order of the properties, and most array applications expect the elements to
be produced in numerical order. 

Also, there is still the problem with unexpected
properties being dredged up from the prototype chain.
 */
for (x in numbers)
    console.log(x) //also prints by INDEX, 

for (x of numbers)
    console.log(x) //also prints VALUE  

console.log('\n')
/**
 * Fortunately, the conventional for statement avoids these problems. JavaScript’s for
statement is similar to that in most C-like languages. It is controlled by three
clauses—the first initializes the loop, the second is the while condition, and the third
does the increment:
 */
var i;
for (i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}




console.log('\nCONFUSION - when to use Arrays or Object: JavaScript itself is confused about the difference between arrays and objects ;)  ')
/**
 * A common error in JavaScript programs is to use an object when an array is required
or an array when an object is required. The rule is simple: when the property names
are small sequential integers, you should use an array. Otherwise, use an object.


JavaScript itself is confused about the difference between arrays and objects. 

The typeof operator reports that the type of an array is 'object', which isn’t very helpful.

JavaScript does not have a good mechanism for distinguishing between arrays and
objects. We can work around that deficiency by defining our own is_array function:
 */
var is_array = function (value) {
    return value &&
        typeof value === 'object' &&
        value.constructor === Array;
};
/**
 * Unfortunately, it fails to identify arrays that were constructed in a different window
or frame. If we want to accurately detect those foreign arrays, we have to work a little
harder:
 */
var is_array = function (value) {
    return value &&
        typeof value === 'object' &&
        typeof value.length === 'number' &&
        typeof value.splice === 'function' &&
        !(value.propertyIsEnumerable('length'));
};
/**
 * First, we ask if the value is truthy. We do this to reject null and other falsy values.

Second, we ask if the typeof value is 'object'. This will be true for objects, arrays,
and (weirdly) null. 

Third, we ask if the value has a length property that is a number.
This will always be true for arrays, but usually not for objects. 

Fourth, we ask if the value contains a splice method. This again will be true for all arrays. Finally, we ask
if the length property is enumerable (will length be produced by a for in loop?).

That will be false for all arrays. This is the most reliable test for arrayness that I have
found. It is unfortunate that it is so complicated.

Having such a test, it is possible to write functions that do one thing when passed a
single value and lots of things when passed an array of values.
 */







console.log('\nMethods - Augmented ')
/**
 * JavaScript provides a set of methods for acting on arrays. The methods are functions stored in Array.prototype. 
 * 
 * We saw that Object.prototype can be augmented. Array.prototype can be augmented as well.
 * 
 * e.g.
 * 
 Array.method('reduce', function (f, value) {
    var i;
    for (i = 0; i < this.length; i += 1) {
        value = f(this[i], value);
    }
    return value;
});

this also not working 

 Array.prototype.method = function (reduce2, f) {
    this.prototype[reduce2] = func;
    var i;
    for (i = 0; i < this.length; i += 1) {
        value = f(this[i], value);
    }
    return value;
};


console.log(numbers.reduce2())

 */

Array.reduce2 = function (arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i += 1) {
        sum += arr[i];
    }
    return sum;
};



// Create an array of numbers.
var data = [4, 8, 15, 16, 23, 42];

var reduced = Array.reduce2(data)
console.log("Finally I made it working: sum = " + reduced)



//By adding a function to Array.prototype, every array inherits the method.

// Define two simple functions. One will add two
// numbers. The other will multiply two numbers.
var add = function (a, b) {
    return a + b;
};
var mult = function (a, b) {
    return a * b;
};
// Invoke the data's reduce method, passing in the
// add function.
var sum = data.reduce(add, 0); // sum is 108
// Invoke the reduce method again, this time passing
// in the multiply function.
var product = data.reduce(mult, 1);
console.log(product)
// product is 7418880


console.log('Because an array is really an object, we can add methods directly to an individual array:')
// Give the data array a total function.
data.total = function () {
    return this.reduce(add, 0);
};
total = data.total(); // total is 108
console.log(total)


console.log('It is not useful to use the Object.create method from Chapter 3 on arrays because it produces an object, not an array.')


console.log('\n\nDimensions ')
/**
 * JavaScript arrays usually are not initialized. If you ask for a new array with [], it will
be empty. If you access a missing element, youwill get the undefined value. 

But if you are implementing algorithms that assume that every element
starts with a known value (such as 0), then you must prep the array yourself.
 */
Array.dim = function (dimension, initial) {
    var a = [], i;
    for (i = 0; i < dimension; i += 1) {
        a[i] = initial;
    }
    return a;
};
// Make an array containing 10 zeros.
var myArray = Array.dim(10, 0);
console.log(myArray)


// JavaScript does not have arrays of more than one dimension, but like most C languages, it can have arrays of arrays:
var matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
matrix[2][1] // 7
console.log(matrix)
/*

for (i = 0; i < 10; i += 1) {
    my_array[i] = [];
}
// Note: Array.dim(n, []) will not work here.
// Each element would get a reference to the same
// array, which would be very bad.

*/

Array.matrix = function (m, n, initial) {
    var a, i, j, mat = [];
    for (i = 0; i < m; i += 1) {
        a = [];
        for (j = 0; j < n; j += 1) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};


console.log('JavaScript should have provided better support for matrixes. We can correct that, too:')
// Make a 4 * 4 matrix filled with zeros.
var myMatrix = Array.matrix(4, 4, 0);
console.log(myMatrix[3][3]); // 0
// Method to make an identity matrix.
Array.identity = function (n) {
    var i, mat = Array.matrix(n, n, 0);
    for (i = 0; i < n; i += 1) {
        mat[i][i] = 1;
    }
    return mat;
};
myMatrix = Array.identity(4);
console.log(myMatrix[3][3]); // 1





console.log('Get Array values get');

let myAr = [ "one", 2, "three", { "value": "four" } ]
let arrayLength = myAr.length
console.log(arrayLength) // shows 4

//last element
console.log(myAr[myAr.length - 1]) // shows "four"


/**
 * While you will see this way of getting the last element of an array everywhere, 
 * a more modern and efficient method is to use the array method, .at().
 * 
 * The main difference is that if you use negative numbers, it starts counting 
 * from the opposite end – so .at(-1) also gets the last element of an array:
 */
console.log(myAr.at(-1)) // shows "four"
console.log(myAr.at(-3)) // shows 2


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
