// ******** Date *****************
let date = new Date()
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString())

let myDate = new Date(2026,0,2)
console.log(myDate.toDateString());

let newDate = new Date('2026-03-23')
console.log(myDate.toDateString());

// **************** Time ****************
let myTime = Date.now()
console.log(myTime)
console.log(newDate.getTime());
console.log(Math.floor(Date.now()/1000));
console.log(myTime.getMonth());
console.log(myTime.getDate());
console.log(myTime.getDay());






