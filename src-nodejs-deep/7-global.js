
console.dir(global, { depth: 0 }); 
console.dir(global); 

require('./7-global-set');

//ReferenceError: ahoj is not defined
console.log(ahoj);
console.log(ans);
