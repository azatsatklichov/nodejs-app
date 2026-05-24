/**
 * But when you run this through a program like node that expects JavaScript,
you’ll get an error: 

>>tsc z-superset.ts --ignoreConfig | node z-superset.js
 */
function greet(who: string) {
console.log('Hello', who);
}   
greet('TypeScript'); // Hello TypeScript