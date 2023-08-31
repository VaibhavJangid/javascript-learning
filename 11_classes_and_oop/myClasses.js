// ES6

/*

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const vaibhav = new User("Vaibhav", "va@mail.com", "123")

console.log(vaibhav.encryptPassword());
console.log(vaibhav.changeUsername());

*/

// behind the scene HOW CLASS WORKS

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const ohvaibhav = new User("ohVaibhav", "ohva@mail.com", "123")

console.log(ohvaibhav.encryptPassword());
console.log(ohvaibhav.changeUsername());