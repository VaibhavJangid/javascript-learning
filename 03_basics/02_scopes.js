 // "{}" This currly brace is used in defineing a object, but the same "{}" currly brace is also used in defineing a scope but it can be call scope if it is used with a "function or if/else statement" then it can be called "SCOPE".

// let a = 10
// const b = 20
// var c = 30 **** var is a classic variable

// console.log(a);
// console.log(b);
// console.log(c);

// The above code is completely correct but problem is in below one where code get leak out from var in scope which should't be happen.

// **** coding enviroment scope is different from browser scope

// let a = 300 **** Global Scope ****

if (true) {
    let a = 10
    const b = 20
    var c = 30
} // the above code is call block scope


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Vaibhav"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
   
    two()
}

// one()

if (true) {
    const username = "Viabhav"
    if (username === "Vaibhav") {
        const website = " youtube"
        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username)

// ****************** intersting *****************

console.log((addone(5)));

function addone(num){
    return num + 1
    
}

// in above case we our code is working properly when we "log" it before declearing the function.

addTwo(5)
const addTwo = function(num){
    return num + 2
}

// But in this code our code showing error because of the hoisting problem which is occuring because we have given function in a variable.
