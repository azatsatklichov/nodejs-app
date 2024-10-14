
//Use unknown Instead of any for Values with an Unknown Type

/**
 * Suppose you want to write a YAML parser (YAML can represent the same
set of values as JSON but allows a superset of JSON’s syntax). What should
the return type of your parseYAML method be? It’s tempting to make it any
(like JSON.parse):
 */
function parseYAML(yaml: string): any {
    // ...
}

interface Book {
    name: string;
    author: string;
}
const book: Book = parseYAML(`
    name: Wuthering Heights
    author: Emily Brontë
    `);
   console.log(book.title); // YES error


/**
 *    Without the type annotation, though, the book variable would quietly get an
any type, thwarting type checking wherever it’s used:
 */
const book2 = parseYAML(`
name: Jane Eyre
author: Charlotte Brontë
`);
console.log(book2.title); // No error, logs "undefined" at runtime
book2('read'); // No error, throws "book is not a function" at runtime



//A safer alternative would be to have parseYAML return an unknown type:
function safeParseYAML(yaml: string): unknown {
    return parseYAML(yaml);
}
const book3 = safeParseYAML(`
    name: The Tenant of Wildfell Hall
    author: Anne Brontë
    `);
console.log(book3.title); //'book' is of type 'unknown'
book3("read"); // Error: 'book' is of type 'unknown'

/**
 * unknown can also be used instead of any in “double assertions”:
 */
declare const foo: Foo;
let barAny = foo as any as Bar;
let barUnk = foo as unknown as Bar;