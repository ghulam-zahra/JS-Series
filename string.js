// concatenation
console.log("hello " + "world");

const name = "wajeeha"
const repoCount = 50
// console.log(name + repoCount + "Value"); not a good method
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

// How to declare a String
const gameName = new String("temple run")
console.log(gameName);
// Methods
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(1,3)
console.log(anotherString);

const anotherString2 = "            hi        ";
console.log(anotherString2);
console.log(anotherString2.trim());
console.log(anotherString2.trimStart());
console.log(anotherString2.trimEnd());

const url = "https://hitesh.com/hitesh%20chouhjfy"
console.log(url.replace('%20', '-'));
console.log(url.includes('hitesh'))


console.log(gameName.split(' '))


