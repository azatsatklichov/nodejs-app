interface Person { name: string };

const alice: Person = { name: 'Alice' };
// ^? const alice: Person
const bob = { name: 'Bob' } as Person;
const ole = <Person>{};

// ^? const bob: Person

 