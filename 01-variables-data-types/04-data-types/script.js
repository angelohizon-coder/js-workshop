// Primitive Data Types
// String
// Number
// Boolean
// Null
// Undefined
// Symbol
// BigInt

// Reference Data types
// Reference types
// Object literals, arrays, and functions

let isLoading = true;
console.log(isLoading);

let sym = Symbol('a');
console.log(sym);

console.log(typeof sym)
console.log(typeof isLoading);

let person = {
    firstName: 'Angelo',
    age: 22
};

console.log(person.firstName);
console.log(person);

let numArray = [1,2,3];
console.log(numArray);

// Spread operator
// creates a new copy
let newArray = [...numArray];

// references to numArray
// let newArray = numArray;

newArray.push(10);
console.log(newArray);