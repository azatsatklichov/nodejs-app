//If you want to define a named type in TypeScript, you have two options: Type Aliases or Interfaces

//similarities
type TState = {
    name: string;
    capital: string;
};

//or define an interface or class
interface IState {
    name: string;
    capital: string;
}

const s1: TState = {
    name: 'Wyoming',
    capital: 'Cheyenne',
    population: 578_000
    // ~~~~~~~ Object literal may only specify known properties,
    // and 'population' does not exist in type 'TState'
};

const s2: IState = {
    name: 'Wyoming',
    capital: 'Cheyenne',
    population: 578_000
    // ~~~~~~~ Object literal may only specify known properties,
    // and 'population' does not exist in type 'IState'
};


//You can use an index signature with both interface and type:
type TDict = { [key: string]: string };
interface IDict {
    [key: string]: string;
}

//You can also define function types with either:
type TFn = (x: number) => string;
interface IFn {
    (x: number): string;
}
type TFnAlt = {
    (x: number): string;
};
const toStrT: TFn = x => '' + x; toStrT(343); // OK
const toStrI: IFn = x => '' + x; toStrI(341); // OK
const toStrTAlt: TFnAlt = x => '' + x; // OK


//Both type aliases and interfaces can be generic:
type TBox<T> = {
value: T;
};
interface IBox<T> {
value: T;
}

/**
 * 
An interface can extend a type (with some caveats, explained
momentarily), and a type can extend an interface:
 */
interface IStateWithPop extends TState {
    population: number;
}
type TStateWithPop = IState & { population: number; };
/**
 * Again, these types are identical. The caveat is that an interface can only
    extend object types that could have been defined with interface (even if
    you happened to define them with type). You can’t extend a union type, for
    example. If you want to do that, you’ll need to use type and &.
 */  


//A class can implement either an interface or a simple type:
class StateT implements TState {
name: string = '';
capital: string = '';
}
class StateI implements IState {
name: string = '';
capital: string = '';
}
