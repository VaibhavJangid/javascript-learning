// old way of doing/defining getter and setter
// previously there was np classes

function User(email, password){
    this._email = email;
    this.password = password;

    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, "password", {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const boo = new User("boo@gmail.com", "ooBoo")

console.log(boo.email);