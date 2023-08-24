/*
- Promise: It is an 'object'.
- We have to connect 'resolve' and '.then()' with each other so that promise work properly, and we can do that by adding 'resolve()' callback in Promise.
- It is not important to hold Promise in an variable.
- In 'resolve()' we can pass data in '()'.
*/

// creating promise

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // Database calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete.");
        resolve()
    },1000)
})

// promiseOne.then() = this '.then()' has connection with 'resolve', and this '.then()'has a callback means 'function'.
// - We have to connect 'resolve' and '.then()' with each other so that promise work properly, and we can do that by adding 'resolve()' callback in Promise. And this whole process is known as CONSUPTION.

promiseOne.then(function () {
    console.log("Promise consumed!");
})

new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)

}).then(function () {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function (){
        resolve({username: "Vaibhav", email: "vaibhav@vaibhav.com"})
    }, 1000)
})

promiseThree.then(function (user){
    console.log(user);
})