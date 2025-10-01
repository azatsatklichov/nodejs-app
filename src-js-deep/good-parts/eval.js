

/**
 * eval
The eval function passes a string to the JavaScript compiler and executes the result.
It is the single most misused feature of JavaScript. It is most commonly used by people
who have an incomplete understanding of the language. For example, if you
know about the dot notation, but are ignorant of the subscript notation, you might
write:
 */
let myObject = {"key": "ola"}
let myKey = "key"

//if you know about the dot notation, but are ignorant of the subscript notation,
eval("myValue = myObject." + myKey + ";");
//instead of:
myvalue = myObject[myKey];

/**
 * The eval form is much harder to read. This form will be significantly slower because
it needs to run the compiler just to execute a trivial assignment statement.


The eval function also compromises the security of your application because it
grants too much authority to the eval’d text. And it compromises the performance of
the language as a whole in the same way that the with statement does.
The Function constructor is another form of eval, and should similarly be avoided.
The browser provides setTimeout and setInterval functions that can take string
arguments or function arguments. When given string arguments, setTimeout and
setInterval act as eval. The string argument form also should be avoided.
 */