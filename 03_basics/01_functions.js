function sayMyName() {
    console.log("V");
    console.log("A");
    console.log("I");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("V");
}

// sayMyName()              // **** "sayMyName" => reference, "sayMyName()" => execution ****

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
    
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumber(2, 2)

// console.log("Result: ", result);

function loginUserMessage(username = "You"){
    // if(username === undefined) this one and below one are same but below one is used in react 
    if(!username){
        console.log("Please enter a username!");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vaibhav"));
console.log(loginUserMessage());
