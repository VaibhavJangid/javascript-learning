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
// console.log(loginUserMessage());

function calculateCartPrice(val, val2, ...num1){
    return num1
}

// above we have put "val1, val2" so now 100 and 200 values are now in these variables, if we remove them then the all the values will show up.

// console.log(calculateCartPrice(100, 200, 300, 400, 500));

const user = {
    username: "Vaibhav",
    price: 199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`);
}

// handleobject(user)
handleobject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));