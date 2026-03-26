
/**
 * Memoization
Functions can use objects to remember the results of previous operations, making it
possible to avoid unnecessary work. This optimization is called memoization.
JavaScript’s objects and arrays are very convenient for this.
Let’s say we want a recursive function to compute Fibonacci numbers. A Fibonacci
number is the sum of the two previous Fibonacci numbers.
 */

var fibonacci = function (n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};
for (var i = 0; i <= 10; i += 1) {
    console.log('// ' + i + ': ' + fibonacci(i));
}

/**
 * This works, but it is doing a lot of unnecessary work. The fibonacci function is
called 453 times. We call it 11 times, and it calls itself 442 times in computing values
that were probably already recently computed. If we memoize the function, we can
significantly reduce its workload.
We will keep our memoized results in a memo array that we can hide in a closure.
When our function is called, it first looks to see if it already knows the result. If it
does, it can immediately return it:
 */
console.log('\n')

var fibonacci2 = function () {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
}();

//This function returns the same results, but it is called only 29 times. We called it 11
//times. It called itself 18 times to obtain the previously memoized results.
for (var i = 0; i <= 10; i += 1) {
    console.log('// ' + i + ': ' + fibonacci2(i));
}

/**
 * We can generalize this by making a function that helps us make memoized functions.
The memoizer function will take an initial memo array and the fundamental function.
It returns a shell function that manages the memo store and that calls the
fundamental function as needed. We pass the shell function and the function’s
parameters to the fundamental function:
 */
var memoizer = function (memo, fundamental) {
    var shell = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fundamental(shell, n);
            memo[n] = result;
        }
        return result;
    };
    return shell;
};

//We can now define fibonacci with the memoizer, providing the initial memo array and fundamental function:
var fibonacci3 = memoizer([0, 1], function (shell, n) {
    return shell(n - 1) + shell(n - 2);
});


/**
 * By devising functions that produce other functions, we can significantly reduce the
amount of work we have to do. For example, to produce a memoizing factorial function,
we only need to supply the basic factorial formula:
 */
console.log('\n')
for (var i = 0; i <= 10; i += 1) {
    console.log('// ' + i + ': ' + fibonacci3(i));
}



