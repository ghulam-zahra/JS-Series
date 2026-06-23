// Stack is used for primitive data types and Heap is used for Non primitive data type
// stack = we fin a copy , Heap = refernce (if we changed a var in heap it is also changed, changes direct applied)
// **************** Stack *******************
let myName = "Alia Butt"
let anotherName = myName;
anotherName = "Ritika"
console.log(anotherName);

// ************** Heap ***************

let userOne = {
    email : "abcd@.com",
    upi: "user@ybl",
}

let userTwo = userOne
userTwo.email = "xyz@.com"
console.log([userOne.email, userOne.email]);
