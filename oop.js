const user = {
    username: "abc",
    logIn : true,
    age: 28,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }

}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

// Constructor function
function User(username,logIn,age){
    this.username = username;
    this.logIn = logIn;
    this.age = age;
}
const userOne = new User("abc",true,28);
const userTwo = new User("xyz",false,30);
console.log(userOne); // value overwritten by userTwo
// new = empty obj create
// constructor func called and packed the arguements
// inject arguement to this keyword
// then call