var obj = { inner: { x: 0 } };
obj.inner = { x: 1 };
// ~~~~~ Cannot assign to 'inner' because it is a read-only property
obj.inner.x = 1; // OK
console.log(obj);
// ^? type T = {
// readonly inner: {
// x: number;
// };
// }
