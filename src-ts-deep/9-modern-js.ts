/**
 * 
Enums
Many languages model types that can take on a small set of values using
enumerations or enums. TypeScript adds them to JavaScript:
 */
enum Flavor {
    Vanilla = 0,
    Chocolate = 1,
    Strawberry = 2,
}
let flavor = Flavor.Chocolate;
// ^? let flavor: Flavor
Flavor // Autocomplete shows: Vanilla, Chocolate, Strawberry
Flavor[0] // Value is "Vanilla"


