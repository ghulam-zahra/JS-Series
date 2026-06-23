let arr = [2,3,4,5,6]
let arr1= new Array("apple", "banana","orange")
console.log(arr);
console.log(arr[2]);
arr.push(7);
console.log(arr)
arr.pop()
console.log(arr);
arr.unshift(1) // insert value at index 0
arr.shift() // delete value at index 1
arr.includes(9) 
console.log(arr.indexOf(6))

const arrrr = arr.join()
console.log(arrrr)
console.log(typeof arrrr) // convrt the array into string

// slice, splice
console.log("A" , arr)

const myn1 = arr.slice(1,3)
console.log(myn1) // donot change the original array
console.log("B" , arr)


const myn2 = arr.splice(1,3)
console.log(myn2)// change the original arra. Print only those element which are not include in the splice
console.log("C" , arr)

// ********* Array Functions **********

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros)
console.log(marvel_heros[3][2])

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);
