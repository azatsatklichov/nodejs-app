const [first, ...restOfItems] = [10, 20, 30, 40];

const [bir, ...galany] = ["bir", "iki", "uc", "dort"];
console.log(galany)
console.log()

const data = {
  temp1: '001',
  temp2: '002',
  firstName: 'John',
  lastName: 'Doe',
};
console.log()
console.log(data)
const { temp1, temp2, ...person } = data;

console.log()
console.log(temp1)
console.log(temp2)
console.log(person)

console.log()
const newArray = [...restOfItems];
console.log(newArray)
const newObject = {
  ...person,
};


console.log()
console.log(newObject)
