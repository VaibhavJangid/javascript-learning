class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// extends: It is use to coat a layer. like normal user and admin. It extends for admins.
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        // Super: prototype.this.username.call
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}.`);
    }
}

const Vaibhav = new Teacher("Vaibhav", "vaibhav@mail.com", "123")

// Vaibhav.addCourse()

const Gojo = new User('Gojo')
// Gojo.addCourse()
// Gojo.logMe()
// Vaibhav.logMe()

console.log(Vaibhav instanceof User);