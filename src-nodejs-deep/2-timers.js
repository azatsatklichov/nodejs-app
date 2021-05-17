//NodeJS timer functions exactly matches with browser functions
//used to delay, or pause, or repeat the executions of other functions

//setTimeout - with callback as param
setTimeout(() => {
  console.log("hello after 4 sec");
}, 4 * 1000);

//inline
const cf = () => {
  console.log("hello after 4 sec");
};
setTimeout(cf, 4 * 1000);
//or with arguments
const cf2 = (x) => {
  console.log("hello after " + x + " sec");
};
//this is how you pass arguments to call-back function
setTimeout(cf2, 4 * 1000, 4);
setTimeout(cf2, 4 * 1000, 8);

//setInterval - repeat
let tmId = setInterval(() => {
  console.log("clear repeat");
}, 0); //1 * 1000
//to cancel timer
clearTimeout(tmId);

setInterval(() => {
  console.log("repeat");
}, 1 * 1000);

clearInterval(2);

//make immediate with zero millisecod
//clearImmediate
//clearImmediate


const timerId = setTimeout(
  () => console.log('You will not see this one!'),
  0
);

clearTimeout(timerId);