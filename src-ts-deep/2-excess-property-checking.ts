

/**
 * When you assign an object literal to a variable with a declared type,
TypeScript makes sure it has the properties of that type and no others:
 */
interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}
/**
 * While it is odd that there’s an elephant property, this error doesn’t make
much sense from a structural typing point of view (Item 4).
 */
const r: Room = { //not ok - excess property check
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present',
// ~~~~~~~ Object literal may only specify known properties,
}

/**
 * That constant is
assignable to the Room type, which you can see by introducing an
intermediate variable:
 */
const obj2 = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present',
};
const r2: Room = obj2;  // OK - with intermediate variable


/**
 * So what’s different about these two examples? In the first you’ve triggered
a process known as “excess property checking,” which helps catch an
important class of errors that the structural type system would otherwise
miss. 

But this process has its limits, and conflating it with regular
assignability checks can make it harder to build an intuition for structural
typing. Recognizing excess property checking as a distinct process will help
you build a clearer mental model of TypeScript’s type system.


As Item 1 explained, TypeScript goes beyond trying to flag code that will
throw exceptions at runtime. 

It also tries to find code that doesn’t do what
you intend. Here’s an example of the latter:
 */
interface Options {
  title: string;
  darkMode?: boolean;
}

function createWindow(options: Options) {
  if (options.darkMode) {
    setDarkMode();
  }
  // ...
}

createWindow({
  title: 'Spider Solitaire',
  darkmode: true
// ~~~~~~~ Object literal may only specify known properties,
//         but 'darkmode' does not exist in type 'Options'.
//         Did you mean to write 'darkMode'?
});



/**
It’s easy to forget how expansive TypeScript types can be. Here are a few
more values that are assignable to Options:

 The excess property check is a special process that only applies to object
 literals. It’s designed to catch typos and other mistakes that would 
 otherwise  go unnoticed in a structural type system.

 Both document and instances of HTMLAnchorElement have title
properties that are strings, so these assignments are allowed. Options is a
broad type indeed!
 */
const o1z: Options = document;  // OK
const o2z: Options = new HTMLAnchorElement(); 



const o: Options = { darkmode: true, title: 'Ski Free' };
                  // ~~~~~~~~ 'darkmode' does not exist in type 'Options'...

const intermediate = { darkmode: true, title: 'Ski Free' };
const o22: Options = intermediate;  // OK




const oz = { darkmode: true, title: 'MS Hearts' } as Options;  // OK




interface Options {
  darkMode?: boolean;
  [otherOptions: string]: unknown;
}
const ozz: Options = { darkmode: true };  // OK


interface LineChartOptions {
  logscale?: boolean;
  invertedYAxis?: boolean;
  areaChart?: boolean;
}
function setOptions(options: LineChartOptions) { /* ... */ }

const opts = { logScale: true };
setOptions(opts);

function setDarkMode() {
    throw new Error("Function not implemented.");
}
//         ~~~~ Type '{ logScale: boolean; }' has no properties in common
//              with type 'LineChartOptions'


