class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // static: it stops to access the property of where it has been used.
    static createId(){
        return `123`
    }
}

const Gojo = new User("Gojo")
// console.log(Gojo.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone@mail.com")
// console.log(iphone.createId())