// Object literal

const user = {
    username: "Vaibhav",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Get user details from database");
        // console.log(`Username: ${username}`);
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);
// we get more value in browser when we apply this 'this' in global context but in node we dont get that much values.

/*

 ***** Constructor function *****

 const promiseOne = new Promise()
 const date = new Date()
 
 - Here this 'New' is the Constructor function.

 Step 1 - when ever we use "new" it create empty object (instance).

 Step 2 - Due "new" keyword a Constructor function is called. 
 This pack all the argument give/pass it to us.

 Step 3 - all the arduments get injected in "this.".

 Step 4 - we get all the arguments in function.
 
 */

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Vaibhav", 12, true)

const userTwo = new User("JavaScript", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);

