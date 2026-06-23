let score = 45;
console.log(typeof score);

let name = "zahra";
let score= null;
let Bool = true;
let isLoogedIn = 1;
 console.log([name, typeof name]);

let valueInNumber = Number(name)
console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); //0

let valueInNumber = Number(Bool)
console.log(typeof valueInNumber);
console.log(valueInNumber); // 1 if false then 0

let boolean = Boolean(isLoogedIn)
console.log(boolean); // true

// Primitive Data types
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('345');
const anotherId = Symbol('345')

console.log(id === anotherId) // false bcz if symbol has same value but it shows false

const bigNumber = 3333344444555555666667777777777999999000n

// Reference (Non primitive)
// Array , Objects, Functions
const heros = ["Iqbal", "Liaqat Ali Khan"] // arr
console.log(typeof heros);

let obj = {
    name: "zahra",
    age: 21,
} // objects
console.log(typeof obj);


const myFunc = function(){
    console.log("hi");
    
}// function
console.log(typeof myFunc);




