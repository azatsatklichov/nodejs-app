//Annotations and Inferences
//static typing is optional
var num1 = 1; //Type inference (number)
var num3; //safe via Type Annotation
var num2 = 23; //Type Annotation and the Value
//safe via type inference
//num1 = "d";
num1 = "sds"; //not assignable to number 
var num4 = num2 + num1; //Type inference (number)
var str1 = num2 + "" + num1; //Type inference (string)
console.log(str1);
//var num5:number = num2 + '' + num1; //Type inference (string)
console.log(str1);
var person = {
    name: 'Alym',
    born: {
        where: 'Merv',
        when: 'c.1797',
    }
};
var person2 = {
    name: 'Alym',
    born: {
        where: 'Merv',
        when: 'c.1797',
    },
};
function logProduct(product) {
    var id = product.id;
    var name = product.name;
    var price = product.price;
    console.log(id, name, price);
}
function logProduct2(product) {
    var id = product.id, name = product.name, price = product.price;
    console.log(id, name, price);
}
var p = { id: 2323, name: "Ola", price: 3434 };
logProduct(p);
logProduct2(p);
