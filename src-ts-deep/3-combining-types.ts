interface Person {
    name: string;
}
interface Lifespan {
    birth: Date;
    death?: Date;
}

type PersonSpan = Person & Lifespan;
const p:PersonSpan = {name:'Alan', birth: new Date()};
//p. ///like declaration merging,... 


type PersonUnion = Person | Lifespan;
const u:PersonUnion =  {birth: new Date()};
//u.



/**
 * The & operator computes the intersection of two types. What sorts of values
belong to the PersonSpan type? On first glance, the Person and Lifespan
interfaces have no properties in common, so you might expect it to be the
empty set (i.e., the never type). But type operations apply to the sets of
values (the domain of the type), not to the properties in the interface. And
remember that values with additional properties still belong to a type. So a
value that has the properties of both Person and Lifespan will belong to
the intersection type:
 * 
 */
const ps: PersonSpan = {
    name: 'Alan Turing',
    birth: new Date('1912/06/23'),
    death: new Date('1954/06/07'),
}; // OK


/**
 * The intuition about intersecting properties is correct, but for the union of
two interfaces, rather than their intersection:
 */
type K = keyof (Person | Lifespan);
// ^? type K = never

/**
 * 
There are no keys that TypeScript can be certain will be present on a value
in the union type, so keyof for the union must be the empty set (never). Or,
more formally:
// Disclaimer: these are relationships, not TypeScript code!


keyof (A&B) = (keyof A) | (keyof B)
keyof (A|B) = (keyof A) & (keyof B)
 */
 

class Mobile { //... 
}
class Tablet { //... 
}        


//union types used for parameters and return types
function getReport1(id: number | string) {
        //TBD         
} 

//intersection types
function getReport2(id: Mobile & Tablet) { //all properties must match
        //TBD         
}
