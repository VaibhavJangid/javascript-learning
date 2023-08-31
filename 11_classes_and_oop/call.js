function SetUsername(username){
    // complexe DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    
    this.email = email
    this.password = password
}

const vai = new createUser("chai", "chai@fb.com", "123")

console.log(vai);