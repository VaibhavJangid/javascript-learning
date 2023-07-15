const user = {
    username: "Vaibhav",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website.`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// **** Global object in browser is "Window Object" ****

// function chai() {
//     let username = "Vaibhav"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Vaibhav"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "Vaibhav"
    console.log(this);
}

// chai()

// ********* Arrow Function *********


// Basic Arrow Function                     // here we have strictly use "return" function if we use these "{}" curly bracese

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implisit Arrow Function

// const addTwo = (num1, num2) => num1 + num2

// if we use "()" then we don't have to use "return". Mostly use in react

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Vaibhav"})

console.log(addTwo(2, 2));

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()