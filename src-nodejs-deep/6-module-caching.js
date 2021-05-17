// let exports = module.exports;

// exports.id = 1; // this is ok
//
// exports = { id: 1 }; // this is not ok
//
// module.exports = { id: 1 }; // this is ok
//
// // WHY??
//
// var g = 42; // local to this file.

// require = function() {
//   return { mocked: true };
// };
//
// const fs = require('fs');
// console.log(fs);

// const printStars = require('./printStars');
// printStars(10, 'Hi!');

//reads from cache 
require('./ascii-art')();
console.log(require.cache);
//delete require.cache['C:\workspace\nodejs-app\src-nodejs-deep\ascii-art.js'];
console.log(require.cache);

//as a function executed - no need to delete cache then 
require('./ascii-art')();
