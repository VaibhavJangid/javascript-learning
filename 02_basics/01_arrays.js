// array

const myArr = [0, 1, 2, 3, 4, 5]

const myHero = ["Superman", "Batman", "Ironman", "Spiderman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myHero[1]);

// Array method

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));   // if the value is not present in the array it will show "-1". If the value is present in the array it will show its posotion

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// Slice, Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)  // Splice manipulate the orignal Array
console.log("C ", myArr);
console.log(myn2);