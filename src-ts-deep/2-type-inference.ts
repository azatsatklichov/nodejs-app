
const person: {
    name: string;
    born: {
        where: string;
        when: string;
    };
} = {
    name: 'Aly',
    born: {
        where: 'Merv',
        when: 'c.1797',
    }
};


//you can just write:
const person = {
    name: 'Aly',
    born: {
        where: 'Merv',
        when: 'c.1797',
    },
};


/**
 * 
Allowing types to be inferred can also facilitate refactoring. Say you have a
Product type and a function to log it:
 */
interface Product {
    id: number;
    name: string;
    price: number;
}
function logProduct(product: Product) {
    const id: number = product.id;
    const name: string = product.name;
    const price: number = product.price;
    console.log(id, name, price);
}

/**
 * Once Change Request happened, and IDs might have letters in them in addition to numbers. So, ID must be changed. 
 
 */
interface Product2 {
    id: string;
    name: string;
    price: number;
}

/**
 * 
 
Here’s a better implementation of logProduct that allows the types of all
local variables to be inferred (it also switches to destructuring assignment):
 */
function logProduct2(product: Product) {
    const { id, name, price } = product;
    console.log(id, name, price);
}

/**
 * The corresponding version with explicit type annotations is repetitive and
cluttered:
 */
function logProduct22(product: Product) {
    const { id, name, price }: { id: string; name: string; price: number } =
        product;
    console.log(id, name, price);
}


//use different variables for different types
let productId: string | number = "12-34-56";
fetchProduct(productId);
productId = 123456; // OK
fetchProductBySerialNumber(productId); // OK


//better solution 
const productId = "12-34-56";
fetchProduct(productId);
const serial = 123456; // OK
fetchProductBySerialNumber(serial); // OK

//This is not to be confused with “shadowed” variables, as in this example
const productId = "12-34-56";
fetchProduct(productId);
{
    const productId = 123456; // OK
    fetchProductBySerialNumber(productId); // OK
}

/// Understand Type Narrowing
/**
 * This is a somewhat unusual ability amongst
programming languages: in C++, Java, and Rust, for example, a variable
has a single type for its entire lifetime.
 */
const elem = document.getElementById('what-time-is-it'); //HTMLElement | null
//narrower type - type checker is generally quite good at following your logic and narrowing types in conditionals like these
if (elem) {
    elem.innerHTML = 'Party Time'.blink(); //HTMLElement 
} else {
    elem  // null
    alert('No element #what-time-is-it');
}

/**
 * There are many ways that you can narrow a type. Throwing or returning
from a branch will narrow a variable’s type for the rest of a block
 */
const elem = document.getElementById('what-time-is-it');
if (!elem) throw new Error('Unable to find #what-time-is-it');
elem.innerHTML = 'Party Time'.blink();

//You can also use instanceof:
function contains(text: string, search: string | RegExp) {
    if (search instanceof RegExp) {
        return !!search.exec(text);
    }
    return text.includes(search);
}

/**
 * A property check also works:
 */
interface Apple { isGoodForBaking: boolean; }
interface Orange { numSlices: number; }
function pickFruit(fruit: Apple | Orange) {
    if ('isGoodForBaking' in fruit) {
        fruit //Apple
    } else {
        fruit // Orange
    }
    fruit //either
    // ^? (parameter) fruit: Apple | Orange
}

/**
 * Some built-in functions such as Array.isArray are also able to narrow
types: 
 */
function contains(text: string, terms: string | string[]) {
    const termList = Array.isArray(terms) ? terms : [terms];
    // ^? const termList: string[]
    // ...
}

//can not narrow

/**
 * TypeScript is generally quite good at tracking types through conditionals.
Think twice before adding a type assertion—it might be on to something
that you’re not! For example, this is the wrong way to exclude null from a
union type
 */
const elem = document.getElementById('what-time-is-it');
// ^? const elem: HTMLElement | null
if (typeof elem === 'object') {
    elem;
    // ^? const elem: HTMLElement | null
}


/**
 * Similar surprises can come from falsy
primitive values:

Because the empty string and 0 are both falsy, x could still be a string or
number in that branch.
 */
function maybeLogX(x?: number | string | null) {
    if (!x) {
        console.log(x);
        // ^? (parameter) x: string | number | null | undefined
    }
}

///another way - using TAG
interface UploadEvent { type: 'upload'; filename: string; contents: string }
interface DownloadEvent { type: 'download'; filename: string; }
type AppEvent = UploadEvent | DownloadEvent;
function handleEvent(e: AppEvent) {
    switch (e.type) {
        case 'download':
            console.log('Download', e.filename);
            // ^? (parameter) e: DownloadEvent
            break;
        case 'upload':
            console.log('Upload', e.filename, e.contents.length, 'bytes');
            // ^? (parameter) e: UploadEvent
            break;
    }
}