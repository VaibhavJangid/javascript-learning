// Immediately Invoked Function Expression (IIFE)

// We use IIFE to protect our local block from global block pollution. So, that our local block don't get any input from Global block.

// This function will work properly 

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){
    // "named iifi" with function 
    console.log(`DB CONNECTED`);
})();

// ()() => (Defination of Function) (Ececution Call)

( (name) => {
    // "un-name iifi" without naming the function
    console.log(`DB CONNECTED TWO ${name}`);
} )('Vaibhav')

// we can write 2 or more IIFI together by giving a ";" to first one when it completed mean in the end of it.