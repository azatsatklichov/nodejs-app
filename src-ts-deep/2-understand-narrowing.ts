
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

Truthy check
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

 

//You can also use instanceof  or typeof (for primitives) 
function contains(text: string, search: string | RegExp) {
    if (search instanceof RegExp) {
        return !!search.exec(text);
    }
    return text.includes(search);
}


/**
 * Some built-in functions such as Array.isArray are also able to narrow
types: 
 */
function contains2(text: string, terms: string | string[]) {
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
const elem3 = document.getElementById('what-time-is-it');
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