// if

if (true){


}
// if there is "true" in boolean then the (for Ex) code from line 4-5 will be performed.

if (false){


}
// if there is "false" in boolean then the (for Ex) code from line 10-11 will not be performed.

// How can comparison can be happen.

// operators
// <, >, <=, >=, ==, !=, ===(it also check value type), !==

const temperature = 40

if ( temperature === 50 ){
    console.log("temperature less than 50");
}

// console.log("temperature is greater than 50");

const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${(power)}`);
// }

// console.log(`User power: ${(power)}`);

// const balance = 1000

// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

 
// && (mpercent) = "and" means if any statemnt in the function is "false" then function will not be performed 
 

const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}



//  "||" (pipe sign) = "or" to check multiple options if anyone is "true" it will perform the function.

if (loggedInfromGoogle || loggedInfromEmail) {
    console.log("User is logged in");
}


