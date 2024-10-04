console.log(
    'Cylinder r=1 * h=1',
    'Surface area:', 6.283185 * 1 * 1 + 6.283185 * 1 * 1,
    'Volume:', 3.14159 * 1 * 1 * 1
);
console.log(
    'Cylinder r=1 * h=2',
    'Surface area:', 6.283185 * 1 * 1 + 6.283185 * 2 * 1,
    'Volume:', 3.14159 * 1 * 2 * 1
);
console.log(
    'Cylinder r=2 * h=1',
    'Surface area:', 6.283185 * 2 * 1 + 6.283185 * 2 * 1,
    'Volume:', 3.14159 * 2 * 2 * 1
);

/**
 * Above code is extremely repetitive, as though the same line was copied and pasted, 
 * then modified. It repeats both values and constants.
 * 
 * Also, formulas were error prone. Last example had
an r*h for the surface area instead of an r*r.
 * 
 * Right way is factor out some functions, a constant, and a loop
 */
type CylinderFunction = (r: number, h: number) => number;
const surfaceArea: CylinderFunction = (r, h) => 2 * Math.PI * r * (r + h);
const volume: CylinderFunction = (r, h) => Math.PI * r * r * h;
for (const [r, h] of [[1, 1], [1, 2], [2, 1]]) {
    console.log(
        `Cylinder r=${r} * h=${h}`,
        `Surface area: ${surfaceArea(r, h)}`,
        `Volume: ${volume(r, h)}`);
}


function distance(a: { x: number, y: number }, b: { x: number, y: number }) {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

/**
The simplest way to reduce repetition is by naming your types. Rather than
writing a distance function above  way
*/

interface Point2D {
    x: number;
    y: number;
}
function distance2(a: Point2D, b: Point2D) { /* ... */ }


//Duplicated types aren’t always so easy to spot. Sometimes they can be obscured by syntax

//If several functions share the same type signature, for instance
function get(url: string, opts: Options): Promise<Response> { /* ... */ }
function post(url: string, opts: Options): Promise<Response> { /* ... */ }

//Then factor out a named type for the signatures
type HTTPFunction = (url: string, opts: Options) => Promise<Response>;
const get2: HTTPFunction = (url, opts) => { /* ... */ };
const post2: HTTPFunction = (url, opts) => { /* ... */ };



//duplication in types
interface Person {
    firstName: string;
    lastName: string;
}
interface PersonWithBirthDate {
    firstName: string;
    lastName: string;
    birth: Date;
}

/**
 * You can eliminate the repetition by making one interface extend the other:
 */
interface Person {
    firstName: string;
    lastName: string;
}
interface PersonWithBirthDate extends Person {
    birth: Date;
}

//You can also use the intersection operator (&) to extend an existing type, though this is somewhat less common
type PersonWithBirthDate2 = Person & { birth: Date };


//ore example 
interface Bird {
    wingspanCm: number;
    weightGrams: number;
    color: string;
    isNocturnal: boolean;
}
interface Mammal {
    weightGrams: number;
    color: string;
    isNocturnal: boolean;
    eatsGardenPlants: boolean;
}

/**
 * you might factor out a Vertebrate class with some of the shared
properties
 */
interface Vertebrate {
    weightGrams: number;
    color: string;
    isNocturnal: boolean;
}
interface Bird extends Vertebrate {
    wingspanCm: number;
}
interface Mammal extends Vertebrate {
    eatsGardenPlants: boolean;
}



//You can also go the other direction (not add property but remove or use subset). 
//What if you have a type, State, which represents the state of an entire application, and another, TopNavState. 
interface State {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
}
interface TopNavState {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
    // omits pageContents
}
/**
 * Rather than building up State by extending TopNavState, you’d like to
define TopNavState as a subset of the fields in State. This way you can
keep a single interface defining the state for the entire app.
 */

//You can remove duplication in the types of the properties by indexing into State:
interface TopNavState2 {
    userId: State['userId'];
    pageTitle: State['pageTitle'];
    recentFiles: State['recentFiles'];
};

/**
 * While it’s longer, this is progress: a change in the type of pageTitle in
State will get reflected in TopNavState. But it’s still repetitive. You can do
better with a mapped type:

Mousing over TopNavState, you see exactly the same as the previous one

 */
type TopNavState3 = {
    [K in 'userId' | 'pageTitle' | 'recentFiles']: State[K]
};


/**
 * Mapped types are the type system equivalent of looping over the fields in an array. 
 * This particular pattern is so common that it’s part of the standard library, where it’s called Pick

 */
type Pick<T, K> = { [k in K]: T[k] };

/**
 * (This definition isn’t quite complete. We’ll revisit it in Item 50.) You use it
like this:
 */
type TopNavState = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;

/**
 * Another form of duplication can arise with tagged unions. What if you want
a type for just the tag?
 */
interface SaveAction {
    type: 'save';
    // ...
}
interface LoadAction {
    type: 'load';
    // ...
}
type Action = SaveAction | LoadAction;
type ActionType = 'save' | 'load'; // Repeated types!

/**
 * 
You can define ActionType without repeating yourself by indexing into the
Action union:
 */
type ActionType2 = Action['type'];
// ^? type ActionType = "save" | "load"

/**
 * As you add more types to the Action union, ActionType will incorporate
them automatically. This type is distinct from what you’d get using Pick,
which would give you an interface with a type property:
 */
type ActionRecord = Pick<Action, 'type'>;
// ^? type ActionRecord = { type: "save" | "load"; }

/**
 * If you’re defining a class that can be initialized and later updated, the type
for the parameter to the update method might optionally include most of the
same parameters as the constructor
 */
interface Options {
    width: number;
    height: number;
    color: string;
    label: string;
}
interface OptionsUpdate {
    width?: number;
    height?: number;
    color?: string;
    label?: string;
}
class UIWidget {
    constructor(init: Options) { /* ... */ }
    update(options: OptionsUpdate) { /* ... */ }
}

/**
 * You can construct OptionsUpdate from Options using a mapped type and keyof:
 * 
 * keyof takes a type and gives you a union of the types of its keys:
type OptionsKeys = keyof Options;
// ^? type OptionsKeys = keyof Options
// (equivalent to "width" | "height" | "color" | "label")

 */
type OptionsUpdate = { [k in keyof Options]?: Options[k] };
class UIWidget {
    constructor(init: Options) { /* ... */ }
    update(options: Partial<Options>) { /* ... */ }
}