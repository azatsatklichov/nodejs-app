//timers are not guaranteed method calls
setTimeout(() => {
  console.log("hello after 6 sec");
}, 6 * 1000);

// Blocking operation - CPU intensive
// for (let i = 0; i < 1e10; i++) {
//   console.log("loop");
// }
