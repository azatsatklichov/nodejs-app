"use strict";
;
const alice = { name: 'Alice' };
//    ^? const alice: Person
const bob = { name: 'Bob' };
//    ^? const bob: Person

const alice3a = {};
//    ~~~~~ Property 'name' is missing in type '{}' but required in type 'Person'
const bob3a = {}; // No error

