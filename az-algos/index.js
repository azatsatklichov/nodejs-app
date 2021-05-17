module.exports =  function fibonacci(num) {
  let a = 1,
    b = 0,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

// //recursive
// module.exports  = function fibonacci2(num) {
//   if (num <= 1) return 1;

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

// //momoization
// function fibonacci3(num, memo) {
//   memo = memo || {};

//   if (memo[num]) return memo[num];
//   if (num <= 1) return 1;

//   return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
// }

// module.exports  = function factorial(num) {
//   if (num === 0 || num === 1) return 1;
//   for (var i = num - 1; i >= 1; i--) {
//     num *= i;
//   }
//   return num;
// }

// module.exports  = function factorial2(n) {
//   //base case
//   if (n == 0 || n == 1) {
//     return 1;
//     //recursive case
//   } else {
//     return n * factorial(n - 1);
//   }
// }
