let x; 

const num = new Number(500.59959595);
x = num.toString().length;

console.log(x);

// limits the number of decinals
// x = num.toFixed(2);

// limits the number of values showcased
// x = num.toPrecision(10);

x = Number.MIN_VALUE;
console.log(x);

