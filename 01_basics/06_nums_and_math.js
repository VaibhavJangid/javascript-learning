const score = 400
// console.log(score.typeof);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.2585

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ******************* Maths ******************

// console.log(Math);
// console.log(Math.abs(-4));

// console.log(Math.round(4.6)); // Most commonly used

// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.sqrt(4));
// console.log(Math.min(4, 6, 8, 1));
// console.log(Math.max(4, 6, 8));

console.log(Math.random()); // in .random value are between 0-1 like 0.51651, 0.251516

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);