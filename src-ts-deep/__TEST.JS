//JavaScript’s equality operator (==) coerces its operands, leading to unexpected behavior:
if ("" == 0) {
  // It is! But why??
  console.log('Trueeee')
}
x = "s-9"; //number or any number, text in a string   
if (1 < x < 3) {
  // True for *any* value of x!
  console.log('Trueeee');
}
 