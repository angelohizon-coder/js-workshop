let x;

const name = "Angelo";
const age = 23;

x = "Hello my name is " + name + ". I am " + age + " years old";
console.log(x);

// template literals
x = `Hello my name is ${name}. I am ${age} years old.`
console.log(x);

// total count of characters
console.log(x.length);

console.log(x[0]);

// instantiates in a class
x = new String("Angelo");
console.log(x);

// functions that can be used for instanced class x
x = x.__proto__;
console.log(x);

let test = 3;
console.log(test.__proto__);

test = new String("hello world");
test = test.substring(0,4);
console.log(test);

test = new String("hello world");
test = test.slice(0,4);
console.log(test);

test = new String("hello world");
test = test.slice(2,4);
console.log(test);

test = "Hello World";
test = test.trim();
console.log(test);

test = "Hello World"
test = test.replace("World", "John");
console.log(test);

// returns an array
test = new String("hello world");
test = test.split(" ");
console.log(test);

test = new String("hello world");
test = test.split('');
console.log(test);

