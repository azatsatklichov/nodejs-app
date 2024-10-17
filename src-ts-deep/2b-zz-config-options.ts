

//Does this code pass the type checker? 
function add(a, b) {
    return a + b;
} 
const xx = add(10, null);
console.log(xx)

/**
 * You can set flag via command line or tsconfig.json

> tsc --noImplicitAny .\2-zz-config-options.ts
 */



//This code is valid when strictNullChecks is off:
const x1: number = null; // OK, null is a valid number
const x2: number = undefined; // OK, null is a valid number
//but triggers an error when you turn strictNullChecks on:
const x3: number = null;
// ~ Type 'null' is not assignable to type 'number'



const statusEl = document.getElementById('status');
statusEl.textContent = 'Ready';
// ~~~~~ 'statusEl' is possibly 'null'.
if (statusEl) {
statusEl.textContent = 'Ready'; // OK, null has been excluded
}
statusEl!.textContent = 'Ready'; // OK, we've asserted that el is non-null


//For example, this code has no type errors under --strict but throws an exception at runtime:
const tensez = ['past', 'present', 'future'];
tensez[3].toUpperCase();
//With noUncheckedIndexedAccess set, this is an error:
const tenses = ['past', 'present', 'future'];
tenses[3].toUpperCase(); // ~~~~~~ Object is possibly 'undefined'.
//This is not a free lunch, however. Many valid accesses will also be flagged as possibly undefined:
tenses[0].toUpperCase(); // ~~~~~~ Object is possibly 'undefined'.


//for TS better use tsconfig compiler options

//or you use JS approach,.... or single command line option 
"use strict"
console.log(this) // Window { }
let words3 = () => {
console.log(this)
}