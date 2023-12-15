/**
 *  With ES modules, modules are defined with the use of the import and export
 * keywords instead of the require() function in CommonJS.
 */

import { strict as assert } from "node:assert";
//to run
//can not run .js so use .mjs

//or provide assert module 
//>npm install assert

//or strict mode, so '3' is not equal to 3
//import assert from 'node:assert/strict';

const { message } = new assert.AssertionError({
  actual: 1,
  expected: 2,
  operator: "strictEqual",
});

// Verify error output:
try {
  assert.strictEqual(1, 2);
} catch (err) {
  assert(err instanceof assert.AssertionError);
  assert.strictEqual(err.message, message);
  assert.strictEqual(err.name, "AssertionError");
  assert.strictEqual(err.actual, 1);
  assert.strictEqual(err.expected, 2);
  assert.strictEqual(err.code, "ERR_ASSERTION");
  assert.strictEqual(err.operator, "strictEqual");
  assert.strictEqual(err.generatedMessage, true);
}

assert.deepEqual(/a/gi, new Date());

//https://blog.logrocket.com/es-modules-in-node-today/

assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, "3"]], 4, 5]);
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected ... Lines skipped
//
//   [
//     [
// ...
//       2,
// +     3
// -     '3'
//     ],
// ...
//     5
//   ]
