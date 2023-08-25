/*

- Promise: It is an 'object'.

- We have to connect 'resolve' and '.then()' with each other so that promise work properly, and we can do that by adding 'resolve()' callback in Promise.

- It is not important to hold Promise in an variable.

- In 'resolve()' we can pass data in '()'.

- when two '.then()' connected with eachother it called as chaining. (in promiseFour)
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

const promiseFour = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "Vaibhav", Password: "123"})
        } else {
            reject('ERROR: Somethingwent wrong')
        }
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error){
            resolve({username: "Anuj", Password: "123"})
        } else {
            reject('ERROR: Anuj where are you?')
        }
    }, 1000)
})

/*
async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}
*/

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

/*

async function getAllUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUser()

*/

/*

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))

*/

fetch('https://api.github.com/users/vaibhavjangid')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))