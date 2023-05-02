// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

myNewString = myString.split('');
myNewString[0] = myNewString[0].toUpperCase();
myNewString = myNewString.join('');

console.log(myNewString);