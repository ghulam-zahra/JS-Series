class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encrytPassword(){
        return `${this.password}abc`
    }
}
const user1 = new user("abc","abc@mail.com",'123')
console.log(user1.encrytPassword())

// Inheritance
class product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class book extends product {
    constructor(name, price, author) {
        super(name, price)
        this.author = author;
    }   
}
const book1 = new product('Atomic Habit' ,'300')
console.log(book1)