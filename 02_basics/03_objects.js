// singleton => when we make any variable with 'constructor' it will make singleton 

// when we make variables with literals it will not make singleton

// Objects.create

// objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Vaibhav",
    "full name": "Vaibhav Sharma",
    [mySym]: "mykey1", // simple "mySym" will behave like string and [mySyn] will behave like Symbol
    age: 20,
    loacation: "Jaipur",
    email: "vaibhav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// // another method
// console.log(JsUser["email"]);
// // above method to call object is important because we can made any variable in object, and the string variable can't be call by the "." method (shown above)
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);

// how to change object value by overwrite ---->
JsUser.email = "vaibhav@ok.com"

// how to lock the value in objects
// Object.freeze(JsUser)

JsUser.email = "dsa@sa.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Ji");
}
JsUser.greetingTwo = function() {
    console.log(`Hello Ji, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());