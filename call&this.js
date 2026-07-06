function setUsername(username){
    this.username = username
}

function createUser(username,email,password){
    setUsername.call(this.username)

    this.email = email
    this.password = password
}

const user  = new createUser('JohnDoe', 'johndoe@example.com', 'password123')
console.log(user) 