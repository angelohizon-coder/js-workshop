var x = Math.random()*100+1;
x = Math.floor(x);

var y = Math.random()*50+1;
y = Math.floor(y);

var sum = (x+y).toFixed(2);
var difference = (x-y).toFixed(2);
var product = (x*y).toFixed(2);
var quotient = (x/y).toFixed(2);

console.log("Variables");
console.log(x, y);
console.log("Mathemtical Operators");
console.log(sum, difference, product, quotient);