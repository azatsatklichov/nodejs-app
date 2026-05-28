
/**
 * JavaScript (and TypeScript) distinguishes between a function statement and
a function expression:

 */
function rollDice1(sides: number): number { 
    return 3;
}  //function Statement

const rollDice2 = function(sides: number): number { 
    return 3;
 };  // function Expression
const rollDice3 = (sides: number): number => { 
    return 3;
 };  // Also function expression
 

/**
 * An advantage of function expressions in TypeScript is that you can apply a
type declaration to the entire function at once, rather than specifying the
types of the parameters and return type individually:

If you mouse over sides in your editor, you’ll see that TypeScript knows
its type is number. The function type doesn’t provide much value in such a
short example, but the technique does open up a number of possibilities.
 
*/
type DiceRollFn = (sides: number) => number;
const rollDice: DiceRollFn = sides => {  
    return 3;
 };

function add(a: number, b: number) { return a + b; }
function sub(a: number, b: number) { return a - b; }
function mul(a: number, b: number) { return a * b; }
function div(a: number, b: number) { return a / b; }

/**
 * or consolidate the repeated function signatures with a single function type:
 * 
 * This has fewer type annotations than before, and they’re separated away
from the function implementations. This makes the logic more apparent.
You’ve also gained a check that the return type of all the function
expressions is number.
 */
type BinaryFn = (a: number, b: number) => number;
const add1: BinaryFn = (a, b) => a + b;
const sub1: BinaryFn = (a, b) => a - b;
const mul1: BinaryFn = (a, b) => a * b;
const div1: BinaryFn = (a, b) => a / b;



/**
 * Another situation in which you should apply a type to a function expression
is to match the signature of some other function. In a web browser, for
example, the fetch function issues an HTTP request:
 */
const response = fetch('/quote?by=Mark+Twain');
//    ^? const response: Promise<Response>


/**
You extract data from the response via response.json() or
response.text():

There’s a bug here: if the request for /quote fails, the response body is
likely to contain an explanation like “404 Not Found.” This isn’t JSON, so
response.json() will return a rejected Promise with a message about
invalid JSON. This obscures the real error, which was a 404.
 */
async function getQuote() {
  const response = await fetch('/quote?by=Mark+Twain');
  const quote = await response.json();
  return quote;
}

// {
//   "quote": "If you tell the truth, you don't have to remember anything.",
//   "source": "notebook",
//   "date": "1894"
// }


/**
 * It’s easy to forget that an error response with fetch does not result in a
rejected Promise. Let’s write a checkedFetch function to do the status
check for us. The type declarations for fetch in lib.dom.d.ts look like this:
 */
declare function fetch(
  input: RequestInfo, init?: RequestInit,
): Promise<Response>;



//you can write checkedFetch like this:
//I did similar for Java Exception handling via Spring 
async function checkedFetch(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (!response.ok) {
    // An exception becomes a rejected Promise in an async function.
    throw new Error(`Request failed: ${response.status}`);
  }
  return response;
}


//Above works, but it can be written more concisely:
/**
 * We’ve changed from a function statement to a function expression and
applied a type (typeof fetch) to the entire function. 

This is a common
pattern in TypeScript, and it’s a good way to ensure that your function
matches the signature of some other function.
 */
const checkedFetch2: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response;
}


/**
 * The type annotation also guarantees that the return type of checkedFetch
will be the same as that of fetch. Had you written return instead of
throw, for example, TypeScript would have caught the mistake:
 */
const checkedFetch3: typeof fetch = async (input, init) => {
  //  ~~~~~~~~~~~~
  //  'Promise<Response | HTTPError>' is not assignable to 'Promise<Response>'
  //    Type 'Response | HTTPError' is not assignable to type 'Response'
  const response = await fetch(input, init);
  if (!response.ok) {
    return new Error('Request failed: ' + response.status);
  }
  return response;
}
checkedFetch3('/quote?by=Mark+Twain')
  .then(response => response.json())
  .then(quote => console.log(quote.quote))
  .catch(error => console.error(error.message));
  
/**
 * The same mistake in the first example would likely have led to an error, but
in the code that called checkedFetch, rather than in the implementation. In
addition to being more concise, typing this entire function expression
instead of its parameters has given you better safety.
What if you want to match the parameter types of another function but
change the return type? This is possible using a rest parameter and the builtin
Parameters utility type:
 */
async function fetchANumber(
    ...args: Parameters<typeof fetch>
): Promise<number> {
  const response = await checkedFetch(...args);
  const num = Number(await response.text());
  if (isNaN(num)) {
    throw new Error(`Response was not a number.`);
  }
  return num;
}