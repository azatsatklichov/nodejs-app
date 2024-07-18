
console.log(this);  // {} , this === module.exports which is an empty object for now

module.exports.foo = 5;

console.log(this);  // { foo:5 }

let obj = {
    func1: function () { console.log(this); },
    func2: () => { console.log(this); }
}

obj.func1();  // obj is left of the dot, so this is obj
obj.func2();  // arrow function don't have their own this
              // binding, so this is module.exports, which is{ foo:5 } 

console.log('==========');


var a = this; // "this" is an empty object
this.anObject = {name:"An object"};

var aFunction = function() {
    var innerThis = this; // "this" is node global object
    console.log(innerThis);
    console.log('----------');
};

aFunction();

//IIFE
(function(anyParameter){
    console.log(anyParameter.anObject);
})(
    this // "this" is same having anObject. Not "global"  
); 