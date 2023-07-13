// "{}" This currly brace is used in defineing a object, but the same "{}" currly brace is also used in defineing a scope but it can be call scope if it is used with a "function or if/else statement" then it can be called "SCOPE".

// let a = 10
// const b = 20
// var c = 30 **** var is a classic variable

// console.log(a);
// console.log(b);
// console.log(c);

// The above code is completely correct but problem is in below one where code get leak out from var in scope which should't be happen.

// **** coding enviroment scope is different from browser scope

let a = 300 // **** Global Scope ****

if (true) {
    let a = 10
    const b = 20
    var c = 30
} // the above code is call local scope


// console.log(a);
// console.log(b);
console.log(c);