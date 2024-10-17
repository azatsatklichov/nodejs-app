//Use unknown Instead of any for Values with an Unknown Type
/**
 * Suppose you want to write a YAML parser (YAML can represent the same
set of values as JSON but allows a superset of JSON’s syntax). What should
the return type of your parseYAML method be? It’s tempting to make it any
(like JSON.parse):
 */
function parseYAML(yaml) {
    // ...
}
var book = parseYAML("\n    name: Wuthering Heights\n    author: Emily Bront\u00EB\n    ");
/**
 *    Without the type annotation, though, the book variable would quietly get an
any type, thwarting type checking wherever it’s used:
 */
var book2 = parseYAML("\nname: Jane Eyre\nauthor: Charlotte Bront\u00EB\n");
book2('read'); // No error, throws "book is not a function" at runtime
