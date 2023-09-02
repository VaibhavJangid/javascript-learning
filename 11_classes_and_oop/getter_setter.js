class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
/*
    get password(){
        return this._password.toUppercase()
    }
    set password(value){
        this._password = value
    }
*/
    get password(){
        return `${this._password}vaibhav`
    }
    set password(value){
        this._password = value
    }
}

const vaibhav = new User ("vaibhav@mail.com", "xyz")
console.log(vaibhav.email);
console.log(vaibhav.password);