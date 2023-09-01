// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// Here above we are taking an example where we are trying to get the value of "PI".
// We get the value of "PI" is 3.141132 something like this and which is constant.
// And by applying below method we get to know that we can't change the value of "PI" because it is hard coded in c++.

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);


// And here we are tryinging to hard code the value of below variable.
// JavaScript give us limited access to control the value of our variable, and define the property of variable.

const gojo = {
    name: "Netflix",
    price: 299,
    isAvailable: true,

    buyNetflix: function(){
        console.log("Code fatt gya!");
    }
}

console.log(gojo);


Object.defineProperty(gojo, "name", {
    // Writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(gojo, "name"));

for (const [key, value] of Object.entries(gojo)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}