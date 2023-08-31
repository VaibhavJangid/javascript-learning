/*

jis ne call kiya wahi "this" h.

*/

// let myName = "Vaibhav    "
// let myLastName = "Sharma    "

// console.log(myName.trueLength);

let myHeros = ["Spidy", "thor", "lohamanav"]

let heroPower = {
    Spidy: "web",
    thor: "hammer",
    lohamanav: "iron",

    getSpiderPower: function(){
    //console.log(`Spidy power is ${this.Spidy}`); 
    }
}

Object.prototype.Vaibhav = function(){
    //console.log(`Vaibhav is present in all objects.`);
}

Array.prototype.heyVaibhav = function(){
    //console.log(`Vaibhav says "Hello".`);
}

// heroPower.Vaibhav
// myHeros.Vaibhav()
// myHeros.heyVaibhav()
// heroPower.heyVaibhav() => this "object" have no access of prototype becasue it was given to the "Array".


// **** Inheritance ****

const User = {
    name: "Vaibhav",
    email: "VS@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}


// legasy
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(Teacher, TeachingSupport)

let anotherUsername = "Vaibhav Sharma    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`); obselete property
    console.log(`True name is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"Vaibhav".trueLength()
"ohvaibhav".trueLength()