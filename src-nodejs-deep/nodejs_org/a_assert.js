console.clear();
const assert = require("assert");
//const assert = require('assert').strictEqual;

// Function call
(async () => {
  assert.strictEqual(1, 2);
  await assert
    .rejects(
      async () => {
        throw new TypeError("Wrong value");
      },
      (err) => {
        assert.strictEqual(err.name, "TypeError");
        assert.strictEqual(err.message, "Wrong value");
        return true;
      }
    )
    .then(() => {
      console.log("Reject Demo");
    });
})();

// Function call
try {
  assert.ok(false, "It's false");
} catch (error) {
  console.log("Error: ", error);
}

let x = 4;
let y = 5;

try {
  // Checking condition
  assert(x == y);
} catch {
  // Error output
  console.log(`${x} is not equal to ${y}`);
}

// Function call
try {
  assert.doesNotThrow(() => {
    throw new TypeError("Wrong value");
  });
} catch (error) {
  console.log("Error:", error);
}

// Function call
try {
  assert.ifError("error");
} catch (error) {
  console.log("Error:", error);
}

// Function call
try {
  assert.doesNotThrow(
    () => {
      throw new TypeError("The Wrong value error");
    },
    /abcd/,
    "Whoops"
  );
} catch (error) {
  console.log("Error:", error);
}

// Function call
try {
  assert.notDeepStrictEqual({ a: "1" }, { a: "24" });
  console.log("No Error Occurred");
} catch (error) {
  console.log("Error: ", error);
}

try {
  assert.deepStrictEqual({ a: 1 }, { a: "1" });
} catch (error) {
  console.log("Error: ", error);
}
