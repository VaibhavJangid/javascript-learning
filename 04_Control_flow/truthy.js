const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// here it some times show that situation is true and sometimes it shows that the situations is false. This happen because of the javascript, that assume this value is true, same happen in false case.

// if below terms comes in the condition then javascript assume that this value is false.

// falsy value

// false, 0, -0, BigInt 0n(Zero n), ""(empty string), null, undefined, NaN (Not a Number)


// truthy values

// "0", "false" ( zero and false in string), " "(space in string), [] (empty array), {}(empty object), function() {} (empty function)



// how to check is your array empty:

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {} 

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}


// In browser 

// false == 0
// > true

// false == '' (empty string)
// > true

// 0 == '' (empty string)
// > true