console.log('\n\n------------optimized logic  -------');
let a = false;
let b = false;
let c = false;

if (!a && !b && !c) {
    console.log("inverse");
}
if (!(a || b || c)) {
    console.log("mine-optimized");
}



console.log('\n\n------------comma operator -------');


/**
 * Comma
The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.
The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.
 */
let az = (1 + 2, 3 + 4, 6 - 8);
console.log(az); // -2 (the result of 6-8)
/**
Comma has a very low precedence
Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.

Without them: a = 1 + 2, 3 + 4, 6-8 evaluates + first, summing the numbers into a = 3, 7, -2
then the assignment operator = assigns az = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4, 6-8
 */
az = 1 + 2, 3 + 4, 6 - 8;
console.log(az); // 3 (the result of 6-8)


/**
 * Why do we need an operator that throws away everything except the last expression?
  Sometimes, people use it in more complex constructs to put several actions in one line.
 */
// three operations in one line
for (a = 1, b = 3, c = a * b; c < 10; c++) {
    console.log('Ulaglar gutly bolsyn ikinizede')
}



//let x2 = 1 && 2 ?? 3; // Syntax error



console.log('\nshortcut logical operators')
//&& and || are shortcut operators, && if first false then second,   || if first right then second not processed 
let x = (1 && 2) ?? 3; // 
console.log(x); //2

x = (false && 2) ?? 3;
console.log(x); //false


x = (1 || 2) ?? 3;
console.log(x); //1 

x = (false || 2) ?? 3;
console.log(x); //2 


x = (undefined) ?? 3;
console.log(x); //1 



console.log('\nlogical operators')
//& and | are different than above operators, && if first false then second,   || if first right then second not processed 
x = (1 & 2) ?? 5; //0001 & 0010 = 00000  
console.log(x); //0

x = (false & 2) ?? 5;  //false & 0010 = false
console.log(x); //0 


x = (1 | 2) ?? 5; //0001 | 0010 = 0011 = 3   
console.log(x); //1 

x = (false | 2) ?? 5;    
console.log(x); //2 
 