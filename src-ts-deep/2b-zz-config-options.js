//Does this code pass the type checker? 
function addd(a, b) {
    return a + b;
}
var xx = addd(10, null);
console.log(xx);
/**
 * You can set flag via command line or tsconfig.json

> tsc --noImplicitAny .\2-zz-config-options.ts
 */
