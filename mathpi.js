console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descriptor)

const chai = {
    name : 'ginger chai',
    price : 300,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai, "name" , {
    writable : false,
    enumerable: false
})

for(let [key,value] of Object.entries(chai)){
    console.log(`${key} : {value}`);
}