let x;
x = 5 + 5;
console.log(x);

// only applicable to sum
x = 5 + '5';
console.log(x);

x = '5' + 5;
console.log(x);

x = 5 + Number('5');
console.log(x);

x = 5 + null;
console.log(x);

x = Number(true) + 5;
console.log(x);