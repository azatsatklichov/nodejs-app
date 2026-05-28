"use strict";
const Cylinder = (radius, height) => ({ radius, height });
function calculateVolume(shape) {
    if (shape instanceof Cylinder) {
        shape.radius;
        //    ~~~~~~ Property 'radius' does not exist on type '{}'
    }
}


const v1 = 'string literal';
const v2 = 123;

const jane = { first: 'Jane', last: 'Jacobs' }; //value space  


function email(to, subject, body) { 
    return new Response(); 
}



class Cylinder2 {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
}
function calculateVolume2(shape) {
    if (shape instanceof Cylinder2) {
        shape;
        // ^? (parameter) shape: Cylinder2
        shape.radius;
        //    ^? (property) Cylinder2.radius: number
    }
}


const v1z = typeof jane; // Value is "object"
const v2z = typeof email; // Value is "function"


const first = jane['first']; // Or jane.first


function email2(options) {
    // ...
}


function email3({ to: Person, 
//  ~~~~~~ Binding element 'Person' implicitly has an 'any' type
subject: string, 
//       ~~~~~~ Binding element 'string' implicitly has an 'any' type
body: string
//    ~~~~~~ Binding element 'string' implicitly has an 'any' type
 }) { }


 function email4({ to, subject, body }) {
    // ...
}