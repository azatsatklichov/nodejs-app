/**
 * A mapped type is a generic type which uses a union of 
 * PropertyKeys (frequently created via a keyof) to iterate through 
 * keys to create a type:
 * 
 * In this example, OptionsFlags will take all the properties from the type Type and change their values to be a boolean.
 */
type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};

type Features = {
    darkMode: () => void;
    newUserProfile: () => void;
};

type Actions = {
    accelerate: () => void;
    break: () => void;
};

//just mouse hover over
type FeatureOptions = OptionsFlags<Features>;
type ActionOptions = OptionsFlags<Actions>;



/**
 * Mapping Modifiers
There are two additional modifiers which can be applied during mapping: readonly and ? which affect mutability and optionality respectively.

You can remove or add these modifiers by prefixing with - or +. If you don’t add a prefix, then + is assumed.
 */
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]-?: Type[Property];
    //readonly [Property in keyof Type]+?: Type[Property];
};

type LockedAccount = {
    readonly id: string;
    readonly name: string;  
    //addr: string;  
};

type UnlockedAccount = CreateMutable<LockedAccount>;


//optional 
// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
};

type User = Concrete<MaybeUser>;
//Key Remapping via 
//https://www.typescriptlang.org/docs/handbook/2/mapped-types.html

 