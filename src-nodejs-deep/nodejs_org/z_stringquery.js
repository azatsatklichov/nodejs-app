// Import the querystring module
/**
 * Syntax: 

querystring.parse( str[, sep[, eq[, options]]]) )
Parameters: This function accepts four parameters as mentioned above and described below: 

str: It is a String that specifies the URL query that has to be parsed.
sep: It is a String that specifies the substring used to delimit the key and value pairs in the specified query string. The default value is “&”.
eq: It is a String that specifies the substring used to delimit keys and values in the specified query string. The default value is “=”.
options: It is an object which can be used to modify the behavior of the method. It has the following parameters: 
decodeURIComponent: It is a function that would be used to decode percent-encoded characters in the query string. The default value is querystring.unescape().
maxKeys: It is a number which specifies the maximum number of keys that should be parsed from the query string. A value of “0” would remove all the counting limits. The default value is “1000”.
 */
const querystring = require("querystring");

// Specify the URL query string
// to be parsed
let urlQuery = "username=user1&units=kgs&units=pounds&permission=false";

// Use the parse() method on the string
let parsedObject = querystring.parse(urlQuery);

console.log("Parsed Query:", parsedObject);

// Use the parse() method on the string
// with sep as `&&` and eq as `-`
urlQuery = "username-user1&&units-kgs&&units-pounds&&permission-false";
parsedObject = querystring.parse(urlQuery, "&&", "-");

console.log("\nParsed Query:", parsedObject);

//eg.2
urlQuery = "user=admin&articles=1&articles=2&articles=3&access=true";

// Use the parse() method on the string
// with default values
parsedObject = querystring.parse(urlQuery, "&", "=");

console.log("Parsed Query:", parsedObject);

// Use the parse() method on the string
// with maxKeys set to 1
parsedObject = querystring.parse(urlQuery, "&", "=", { maxKeys: 1 });

console.log("\nParsed Query:", parsedObject);

// Use the parse() method on the string
// with maxKeys set to 2
parsedObject = querystring.parse(urlQuery, "&", "=", { maxKeys: 2 });

console.log("\nParsed Query:", parsedObject);

// Use the parse() method on the string
// with maxKeys set to 0 (no limits)
parsedObject = querystring.parse(urlQuery, "&", "=", { maxKeys: 0 });

console.log("\nParsed Query:", parsedObject);

///inverse operation
// Specify the URL object
// to be serialized
let urlObject = {
  user: "sam",
  access: true,
  role: ["admin", "editor", "manager"],
};

// Use the stringify() method on the object
let parsedQuery = querystring.stringify(urlObject);

console.log("Parsed Query:", parsedQuery);

//2
// Specify the URL object
// to be serialized
urlObject = {
  user: "max",
  access: false,
  role: ["editor", "manager"],
};

// Use the stringify() method on the object
// with sep as `, ` and eq as `:`
parsedQuery = querystring.stringify(urlObject, ", ", ":");

console.log("Parsed Query 1:", parsedQuery);

// Use the stringify() method on the object
// with sep as `&&&` and eq as `==`
parsedQuery = querystring.stringify(urlObject, "&&&", "==");

console.log("\nParsed Query 2:", parsedQuery);
