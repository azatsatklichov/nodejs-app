/**
 * One of the best features of JavaScript is its convenient syntax for creating
objects:
 */
const rocket = {
    name: 'Falcon 9',
    variant: 'Block 5',
    thrust: '7,607 kN',
};


/**
 * Objects in JavaScript map string (or symbol) keys to values of any type.
TypeScript lets you represent flexible mappings like this by specifying an
index signature on the type:
 */
type Rocket = { [property: string]: string };
const rocket2: Rocket = {
    'Name': 'Falcon 9', //It allows any keys, including incorrect ones. Had you written Name instead of name, it would have still been a valid Rocket type. 
    variant: 'v1.0',   //still key is referred as string 
    'thrust': '4,940 kN',
}; // OK

/**
 * The [property: string]: string is the index signature. It specifies
three things:

A name for the keys
This is purely for documentation; it is not used by the type checker in
any way.

A type for the key
This needs to be a subtype of string | number | symbol (aka
PropertyKey). Typically it’s string or a subtype of string such as a
union of string literals. number indexes are best avoided, as you’ll see in
Item 17. symbol is rare in application code.


A type for the values
This can be anything.


While this code does type check, it has a few downsides:
- It allows any keys, including incorrect ones. Had you written Name
instead of name, it would have still been a valid Rocket type.
- It doesn’t require any specific keys to be present. {} is also a valid
Rocket.
- It cannot have distinct types for different keys. For example, we might
want thrust to be a number rather than a string.
- TypeScript’s language services can’t help you with types like this. As
you’re typing name:, there’s no autocomplete because the key could be
anything.
 */



/** * 
 * In short, index signatures are not very precise. There are almost always
better alternatives to them. In this case, Rocket could be an interface:


 * A better way to represent the rocket type is to use an interface with
 * explicitly declared properties:
 */
interface Rocket2 {
  name: string;
  variant: string;
  thrust_kN: number;
}

/**
 * This is more verbose, but it has several advantages:
- It requires specific keys to be present. {} is not a valid Rocket.
- It can have distinct types for different keys. thrust can be a number
  rather than a string.
- TypeScript’s language services can help you with types like this. As
  you’re typing name:, there’s autocomplete because the key is known.

  Now thrust_kN is a number and TypeScript will check for the presence of
all required fields. All the great language services that TypeScript provides
are available: autocomplete, jump to definition, and rename.
 */
const falconHeavy: Rocket2 = {
  Name: 'Falcon Heavy',
  variant: 'v1',
  thrust_kN: 15200,
};


/**
 * What should you use index signatures for? Historically, they were the best
way to model truly dynamic data. This might come from a CSV file, for
instance, where you have a header row and want to represent data rows as
objects mapping column names to values:
 */
function parseCSV(input: string): {[columnName: string]: string}[] {
  const lines = input.split('\n');
  const [headerLine, ...rows] = lines;
  const headers = headerLine?.split(',');
  return rows.map(rowStr => {
    const row: {[columnName: string]: string} = {};
    rowStr.split(',').forEach((cell, i) => {
        const columnName = headers?.[i] ?? `column${i}`;
      row[columnName] = cell;
    });
    return row;
  });
}


/**
 * There’s no way to know in advance what the column names are in such a
general setting, so there’s no way to get a more precise type. If the user of
parseCSV knows more about what the columns are in a particular context,
they could use an assertion to get more specific:
 */
interface ProductRow {
  productId: string;
  name: string;
  price: string;
}

declare let csvData: string;
/**
 * Of course, there’s no guarantee that the columns at runtime will actually
match your expectation. 

You might want to write a function that checks the presence of required
 */
const products = parseCSV(csvData) as unknown[] as ProductRow[];


/**
 * But a better way to model dynamic data is by using a Map type, also known
as an associative array 
 */
function parseCSVMap(input: string): Map<string, string>[] {
  const lines = input.split('\n');
  const [headerLine, ...rows] = lines;
  const headers = headerLine?.split(',');
  return rows.map(rowStr => {
    const row = new Map<string, string>();
    rowStr.split(',').forEach((cell, i) => {
      const columnName = headers?.[i] ?? `column${i}`;
      row.set(columnName, cell);
    });
    return row;
  });
}



const rockets = parseCSVMap(csvData);
const superHeavy = rockets[2];
const thrust_kN = superHeavy?.get('thrust_kN');  // 74,500
//    ^? const thrust_kN: string | undefined



// function parseRocket(map: Map<string, string>): Rocket {
//   const name = map.get('name');
//   const variant = map.get('variant');
//   const thrust_kN = Number(map.get('thrust_kN'));
//   if (!name || !variant || isNaN(thrust_kN)) {
//     throw new Error(`Invalid rocket: ${map}`);
//   }
//   return {name, variant, thrust_kN};
// }
// const rockets2 = parseCSVMap(csvData).map(parseRocket);
// //    ^? const rockets: Rocket[]



interface Row1 { [column: string]: number }  // Too broad
interface Row2 { a: number; b?: number; c?: number; d?: number }  // Better
type Row3 =
    | { a: number; }
    | { a: number; b: number; }
    | { a: number; b: number; c: number;  }
    | { a: number; b: number; c: number; d: number };  // Also better




type Vec3D = Record<'x' | 'y' | 'z', number>;
//   ^? type Vec3D = {
//        x: number;
//        y: number;
//        z: number;
//      }



declare function renderAButton(props: ButtonProps): void;
interface ButtonProps {
  title: string;
  onClick: () => void;
}

renderAButton({
  title: 'Roll the dice',
  onClick: () => alert(1 + Math.floor(6 * Math.random())),
  theme: 'Solarized',
// ~~~~ Object literal may only specify known properties…
});



interface ButtonProps {
  title: string;
  onClick: () => void;
  [otherProps: string]: unknown;
}

renderAButton({
  title: 'Roll the dice',
  onClick: () => alert(1 + Math.floor(20 * Math.random())),
  theme: 'Solarized',  // ok
});