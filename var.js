console.log("hi")
const accoutId = 13456
let accountEmail = "abcd124@gmail.com"
var accountPass = "ghjkl167"
let accountState;

// var has scope problem so we don't use it. Mstly we use let t declare the variable
// Now change the values of var
// accoutId = 567 not allowed bcz its const
accountEmail = "hsd@gmail.com"
accountPass = "kloi"

console.table([accoutId, accountEmail ,accountPass, accountState])

