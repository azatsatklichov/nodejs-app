let x = parseInt('07');
console.log(x);

console.log();
console.log(parseInt('08'));
console.log(parseInt('09'));

//if string begins with "0x" then  radix is 16, if 0 then 8, any other value then radix is 10
console.log(parseInt('09', 8));//0
console.log(parseInt('05', 8));//5
console.log(parseInt('012', 8));//10
console.log();

console.log(parseInt("23"));          //=> 23
console.log(parseInt("023"));        //=> 19 (octal)

function roughScale(x, base) {
    const number = Number.parseInt(x, base);
    console.log("Parsed number: "+number);
    if (Number.isNaN(number)) {
        return 0;
    }
    return number * 100;
}


console.log('-- roughScale --')
console.log(roughScale(' 0xF', 16));// expected output: 1500
console.log(roughScale('321', 2));//0
console.log()

console.log(parseInt("23")  );        //=> 23
console.log(parseInt("023")   );      //=> 19 (octal)  //why 23? 
console.log(parseInt("023", 8)   );      //=> 19 (octal)  //explicitly defining helped
console.log(parseInt('030',10));
console.log(parseInt('030',8));
//console.log(typeof(typeof document.all));
// expected output: 0
console.log()



// Unicode
console.log('hello'); //Plane 0 contains code points from U+0000 to U+FFFF,   (Basic Multilingual Plane)
console.log('\uD83D\uDE00'); // => '😀'   //Plane 1 - to encode U+1F600 (😀) in UTF-16 a surrogate pair is used: 0xD83D 0xDE00.
console.log('mañana' == 'mañana');


console.log('------')
//parse
console.log(parseInt('32'));
console.log(parseInt('32 meters'));

let xx = parseInt('07');
console.log(xx);
console.log(parseInt('08'));
console.log(parseInt('09'));
console.log(parseInt('010'));

//if string begins with "0x" then  radix is 16, if 0 then 8, any other value then radix is 10
console.log(parseInt('09', 8));


console.log(parseInt("23"));          //=> 23
console.log(parseInt("023"));        //=> 19 (octal)


console.log(0.1 + 0.2); //0.30000000000000004
console.log((10 * 0.1 + 10 * 0.2) / 10); //0.3

console.log('--- Browser compatibility issues ----')
var str = "HELLO WORLD";
str[0]; //IE 7 or earlier, … 
str[0] = "A";// Gives no error, but does not work
str[0]; // returns H
console.log(str[0])

console.log()


console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false // ???
x = 1.0000000000000001
console.log(x === 1); //true // ???
console.log(typeof NaN); //"number" // NaN is a number??? But...
console.log(NaN != NaN); //true
console.log(NaN !== NaN) //true


console.log()
var xc = 6;
console.log(xc.MAX_VALUE); //no warning, in JAVA you have a compiler error
