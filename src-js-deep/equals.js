console.log('===  and ===');


var x = "JavaScript";        // x is a string
var y = new String("JavaScript");  // y is an object
console.log(x + " " + typeof x);
console.log(y);
console.log(y + " " + typeof y);
console.log(x==y); //true
console.log(x===y); //false
console.log()
console.log(5=='5');//T
console.log(5==='5');//F
console.log(0=='');//F
console.log(1=='1');//T
console.log(0==true);//F
console.log(1==true);//T

console.log(0==='');//F
console.log(1==='1');//F
console.log(1===true);//F

var x = new String("JavaScript");  // x is an object
var y = new String("JavaScript");  // y is an object
console.log(x);
console.log(x + " " + typeof x);
console.log(y);
console.log(y + " " + typeof y);

console.log(x==y); //false
console.log(x===y); //false

console.log('When using the === operator, equal strings are not equal, because the === operator expects equality in both type and value.');
console.log('BUT even two OBJECTS are not equal ;) ');

console.log('In JAVA, two Object VALUES are always equals (equals() ) ');

console.log('Another WEIRD thing is, even OBJECT, they printed as ARRAR [] ;) but below object is with {} ');
var  xx = {c: "s"};
console.log(xx)


// --------------------- == and === with Numbers  ------------------------
var x = 67;        // x is a number
var y = new Number(67);  // y is an object
console.log(x + " " + typeof x);
console.log(y);
console.log(y + " " + typeof y);
console.log(x==y); //true
console.log(x===y); //false


var x = new Number(67);  // x is an object
var y = new Number(67);  // y is an object
console.log(x);
console.log(x + " " + typeof x);
console.log(y);
console.log(y + " " + typeof y);

console.log(x==y); //false
console.log(x===y); //false


console.log(" =======  ========");
console.log('' == '0'); // false
console.log(0 == ''); // true
console.log(0 == '0'); // true
console.log(false == 'false'); // false
console.log(false == '0'); // true
console.log(false == undefined); // false
console.log(false == null); // false
console.log(null == undefined); // true
console.log(' \t\r\n ' == 0); // true

console.log('- ; -');
//3rd way Object.is
const hero1 = {
    name: 'Batman'
};
const hero2 = {
    name: 'Batman'
};

console.log(hero1 === hero1); //true
console.log(hero1 === hero2); //false

console.log(hero1 == hero1); //true
console.log(hero1 == hero2); //false

console.log(Object.is(hero1, hero1)); //true
console.log(Object.is(hero1, hero2)); //false


let check  = new Boolean (false);
if(check) {
    console.log("WOW FOUND, even FALSE");//WOW FOUND, even FALSE
}


let check2  = false;
if(check2) {
    console.log("WOW FOUND, even FALSE");//skipped
}

