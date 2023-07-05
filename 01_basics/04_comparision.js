// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

//*** Most confusing conversions because of "==" and "<, >, >=, =<" work differently and difference between data type. *** //

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0); // always false
console.log(undefined > 0); // always false
console.log(undefined < 0); // always false

// === strict check

console.log("2" === 2);