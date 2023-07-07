// Types of Datatypes

// Primitive Type
// 7 Types: String, Number, Null, Boolean, Symbol(used in large projects and used for giving uniqueness), BigInt (Scintific Values or very large values)

// Number
const score = 100
const scorevalue = 100.5

// boolean
const isLoggedIn = false

// null
const outsideTemp = null

// undefine
let userEmail; // let username = undefine (we can also write it like this)

// symbol
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

// bigInt
const bigNumber = 123156116161n


// Reference Type (Non primitive)
// Arrays, Objects, Functions

// Arrays
const heros = ["shaktiman", "nagraj", "doga"]

// objects (it is define in {})
let myobj = {
    name: "Vaibhav",
    age: 22,
}

// Function
const myfunction = function(){
    console.log("Hello World");
}

// console.log(typeof myfunction);


// **************** MEMORY *******************

// Memory are of two types
// Stack (Primitive) It is a copy of orignal we don't get reference from original value we get it from copy, Heap (Non-Primitive) When we made any chnages in the memory it show changes on orignal memory because we get reference from orignal value.

let myName = "Vaibhav"
let anothername = myName
anothername = "Anuj"

console.log(myName);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}

let userTwo = userOne 

userTwo.email = "vaibhav@ok.com"

console.log(userOne.email);
console.log(userTwo.email);

