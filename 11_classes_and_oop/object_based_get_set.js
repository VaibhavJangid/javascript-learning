// another way of defining getter and setter.
// very rare**
// Object based

// *** don't use same name in variable and settor, because when we do that they get in a race, where they both try to setup the same name of variable which fillup call stack memory and give an error.

// gettor and settor overwrite the process of taking and taking back to the memory.

const User = {
    _email: 'v@vs.com',
    _password: "xyz",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this.email = value
    }
}

const jaja = Object.create(User)
console.log(jaja.email);