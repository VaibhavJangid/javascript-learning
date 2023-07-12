// const tinderUser = new Object() // ***** this is an singleton object *****
const tinderUser = {} // **** this is an non-singleton object ****

tinderUser.id = "123abc"
tinderUser.name = "Vaibhav"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// console.log(typeof tinderUser.isLoggedIn);

const regularUser = {
    email : "abc@abc.com",
    fullname : {
        userfullname: {
            firstname: "Vaibhav",
            lastname: "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// joining two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2} **** Wrong Way ****
const obj6 = Object.assign(obj1, obj2) // this is a right way
// console.log(obj6);
// const obj3 = Object.assign({}, obj1, obj2, obj4)              // But this is much better way to  join this object because **** when we join the objects it store it self in an object so it is better to make a empty object where other objects can be store.***

const obj3 = {...obj1, ...obj2, ...obj4}      // most uses method to join objects this "Spread" method, 90% we will be using this method 

// console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));