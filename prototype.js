// JS default behavior is the prototype behavior
// JS ma hr ek cheez object ha mtlb k array str func sb object ha ya alg bat ha k kuch properties accessible ni hoti
// obj ka prototype null hota ha
function multiple(num){
    return num*8
}
multiple.power = 2
console.log(multiple.power) 
console.log(multiple.prototype)

function createUser(username , score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.print = function(){
    console.log(this.username , this.score)
}
const chai =new createUser("chai" , 50)
const tea =new createUser("tea" , 230)
chai.print()