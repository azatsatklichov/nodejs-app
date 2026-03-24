//https://www.w3schools.com/js/js_array_reference.asp


console.log('\n\nArray methods')
console.log('\nconcat()')
/**
 * array.concat(item…)
The concat method produces a new array containing a shallow copy of this array with the
items appended to it.  Not sure SHALLOW copy, because when I change a I did not see the impact. 
 */
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.concat(b, true);
// c is ['a', 'b', 'c', 'x', 'y', 'z', true]

a[2] = "ZZ";
console.log(a)
console.log(c)

console.log('\njoin()')
/**
 * array.join(separator)
The join method makes a string from an array.
 */
var a = ['a', 'b', 'c'];
a.push('d');
var c = a.join(''); // c is 'abcd';
console.log(c)

console.log('\npop()')
/**
 * array.pop( )
The pop and push methods make an array work like a stack. The pop method removes and
returns the last element in this array. If the array is empty, it returns undefined.
 */
var a = ['a', 'b', 'c'];
var c = a.pop(); // a is ['a', 'b'] & c is 'c'
console.log(c)

//pop can be implemented like this:
/**
 * Array.method('pop2', function ( ) {
return this.splice(this.length - 1, 1)[0];
});
 */
Array.pop2 = function (arr) {
    return arr.splice(arr.length - 1, 1)[0];
};
a = ['a', 'b', 'c'];
var c2 = Array.pop2(a)
console.log(c2)


console.log('\npush()')
/**
 * array.push(item…)
The push method appends items to the end of an array. Unlike the concat method, it modifies
the array and appends array items whole. It returns the new length of the array:
 */
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.push(b, true);
console.log(c)
// a is ['a', 'b', 'c', ['x', 'y', 'z'], true]
// c is 5;
//push can be implemented like this:
/**
 * Array.method('push2', function ( ) {
this.splice.apply(
this,
[this.length, 0].
concat(Array.prototype.slice.apply(arguments)));
return this.length;
});
 */
Array.push2 = function (arr) {
    arr.splice.apply(
        arr,
        [arr.length, 0].
            concat(Array.prototype.slice.apply(arguments)));
    return arr.length;
};

c2 = Array.push2(a, b)
console.log(c2)





console.log('\n reverse()')
var a = ['a', 'b', 'c'];
console.log(a)
var b = a.reverse();
// both a and b are ['c', 'b', 'a']
console.log(b)


console.log('\nslice() - not confuse with splice')
/**
 * array.slice(start, end)
The slice method makes a shallow copy of a portion of an array. The first element copied
will be array[start]. It will stop before copying array[end]. The end parameter is optional,
and the default is array.length. If either parameter is negative, array.length will be added
to them in an attempt to make them nonnegative. 
If start is greater than or equal to array.
length, the result will be a new empty array. Do not confuse slice with splice. Also see
string.slice later in this chapter.
 */
var a = ['a', 'b', 'c'];
var b = a.slice(0, 1); // b is ['a']
var c = a.slice(1); // c is ['b', 'c']
var d = a.slice(1, 2); // d is ['b']




console.log('\nsort() - shockingly incorrect result.')
//The sort method sorts the contents of an array in place. It sorts arrays of numbers incorrectly:
var arr = [4, 8, 15, 16, 23, 42];
arr.sort();
console.log(arr) // n is [15, 16, 23, 4, 42, 8]
//JavaScript’s default comparison function assumes that the elements to be sorted are strings.

/**
 * Fortunately, you may replace the comparison function with your own. Your comparison
function should take two parameters and return 0 if the two parameters are equal, a negative
number if the first parameter should come first, and a positive number if the second
parameter should come first. (Old-timers might be reminded of the FORTRAN II arithmetic
IF statement.)
 */
arr.sort(function (a, b) {
    return a - b;
});
// n is [4, 8, 15, 16, 23, 42];
console.log(arr + "\n")

/**
 * That function will sort numbers, but it doesn’t sort strings. If we want to be able to sort
any array of simple values, we must work harder:
 */
var m = ['aa', 'bb', 'a', 4, 8, 15, 16, 23, 42];
m.sort(function (a, b) {
    if (a === b) {
        return 0;
    }
    if (typeof a === typeof b) {
        return a < b ? -1 : 1;
    }
    return typeof a < typeof b ? -1 : 1;
});
// m is [4, 8, 15, 16, 23, 42, 'a', 'aa', 'bb']
console.log(m + "\n")



console.log('\nSmarter comparison function - Relative sorting (Like Java Comparator) The sort method is not stable, so:')
/**
 * With a smarter comparison function, we can sort an array of objects. To make things easier
for the general case, we will write a function that will make comparison functions:
 */
// Function by takes a member name string and returns
// a comparison function that can be used to sort an
// array of objects that contain that member.
var by = function (name) {
    return function (o, p) {
        var a, b;
        if (typeof o === 'object' && typeof p === 'object' && o && p) {
            a = o[name];
            b = p[name];
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw {
                name: 'Error',
                message: 'Expected an object when sorting by ' + name
            };
        }
    };
};
var s = [
    { first: 'Joe', last: 'Besser' },
    { first: 'Moe', last: 'Howard' },
    { first: 'Joe', last: 'DeRita' },
    { first: 'Shemp', last: 'Howard' },
    { first: 'Larry', last: 'Fine' },
    { first: 'Curly', last: 'Howard' }
];
s.sort(by('first')); // s is [
// {first: 'Curly', last: 'Howard'},
// {first: 'Joe', last: 'DeRita'},
// {first: 'Joe', last: 'Besser'},
// {first: 'Larry', last: 'Fine'},
// {first: 'Moe', last: 'Howard'},
// {first: 'Shemp', last: 'Howard'}
// ]
s.sort(by('first')).sort(by('last'));
console.log(s)


console.log('\nsplice() - delete and insert is possible at the same time ')
/**
 * array.splice(start, deleteCount, item…)
The splice method removes elements from an array, replacing them with new items. The
start parameter is the number of a position within the array. The deleteCount parameter is
the number of elements to delete starting from that position. If there are additional parameters,
those items will be inserted at the position. It returns an array containing the deleted
elements.
 */
var a = ['a', 'b', 'c'];
var r = a.splice(1, 1, 'ache', 'bug');
// a is ['a', 'ache', 'bug', 'c']
// r is ['b']
console.log(a)
console.log(r)

/**
 * splice can be implemented like this:
 * */

Array.splice2 = function (arr, start, deleteCount) {
    var max = Math.max,
        min = Math.min,
        delta,
        element,
        insertCount = max(arguments.length - 2, 0),
        k = 0,
        len = arr.length,
        new_len,
        result = [],
        shift_count;
    start = start || 0;
    if (start < 0) {
        start += len;
    }
    start = max(min(start, len), 0);
    deleteCount = max(min(typeof deleteCount === 'number' ?
        deleteCount : len, len - start), 0);
    delta = insertCount - deleteCount;
    new_len = len + delta;
    while (k < deleteCount) {
        element = arr[start + k];
        if (element !== undefined) {
            result[k] = element;
        }
        k += 1;
    }
    shift_count = len - start - deleteCount;
    if (delta < 0) {
        k = start + insertCount;
        while (shift_count) {
            arr[k] = arr[k - delta];
            k += 1;
            shift_count -= 1;
        }
        arr.length = new_len;
    } else if (delta > 0) {
        k = 1;
        while (shift_count) {
            arr[new_len - k] = arr[len - k];
            k += 1;
            shift_count -= 1;
        }
    }
    for (k = 0; k < insertCount; k += 1) {
        arr[start + k] = arguments[k + 2];
    }
    return result;
};

console.log('new way')
console.log(a)
r = Array.splice2(a, 1, 1)
console.log(r)



console.log('\nshift()')
/**
 *The shift method removes the first element from an array and returns it. If the array is
empty, it returns undefined. shift is usually much slower than pop:
 */
a = ['a', 'b', 'c'];
var c = a.shift(); // a is ['b', 'c'] & c is 'a'
console.log(c)
/**
 * 
shift can be implemented like this:
Array.method('shift', function ( ) {
return this.splice(0, 1)[0];
});
 */
a = ['a', 'b', 'c'];
Array.shift2 = function (arr) {
    return arr.splice(0, 1)[0];
};
var c2 = Array.shift2(a)
console.log(c2)






console.log('\nunshift()')
/**
The unshift method is like the push method except that it shoves the items onto the front
of this array instead of at the end. It returns the array’s new length
 */
var a = ['a', 'b', 'c'];
var r = a.unshift('?', '@');
// a is ['?', '@', 'a', 'b', 'c']
// r is 5
console.log(a)
console.log(r)
/**
 * 
shift can be implemented like this:
Array.method('unshift', function ( ) {
this.splice.apply(this,
[0, 0].concat(Array.prototype.slice.apply(arguments)));
return this.length;
});
 */
a = ['a', 'b', 'c'];
Array.unshift2 = function (arr) {
    arr.splice.apply(arr,
        [0, 0].concat(Array.prototype.slice.apply(arguments)));
    return arr.length;
};
var c2 = Array.unshift2(a)
console.log(c2)



console.log('\n\nString  methods')
console.log('\localeCompare()')
/**
 * The localCompare method compares two strings. The rules for how the strings are
compared are not specified. If this string is less than that string, the result is negative. If
they are equal, the result is zero. This is similar to the convention for the array.sort
comparison function:
 */
var m = ['AAA', 'A', 'aa', 'a', 'Aa', 'aaa'];
m.sort(function (a, b) {
    return a.localeCompare(b);
});
// m (in some locale) is
// ['a', 'A', 'aa', 'Aa', 'aaa', 'AAA']
console.log(m)


console.log('\nconcat')
console.log('\nconcat')
console.log('\nconcat')
console.log('\nconcat')
console.log('\nconcat')


