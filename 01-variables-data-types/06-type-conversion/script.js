let amount  = 'hello';

// converting amount is not possible with value hello since it will turn into NaN or not a number
// amount = "10";
// console.log(amount);
amount = parseInt(amount);
console.log(amount);

amount = 15;
anouunt = Number(amount);

console.log(amount);

amount = 12345;
amount = amount.toString();
console.log(amount);

amount = '12345.41';

amount = parseFloat(amount);
console.log(amount);

amount = Math.sqrt(-1);
console.log(amount);

amount = undefined + undefined;
console.log(amount);

// Truthy and Falsy Value
amount = !!"anount";
console.log(amount);