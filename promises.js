// 3 state    a)pending b)fullfiled c)rejected
// mostly used for async operation
// promise is a object which is used to handle async operation
// promise mostly consumes the async operation and return the result in future
// reduce the callback hell

// promise one for syntax
const promisesOne = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Promise is resolved");
        resolve();
    },1000);
});

promisesOne.then(function(){
    console.log("promis consumed");
    
})
// promise Two using resolve link with then method
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },2000);
}).then(function(){
    console.log("Async task 2 consumed");
})

// promise Three using resolve values 
const promisThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name: "John", age: 30});
    },1000)
}).then(function(user){
    console.log(user);
})

// promise four using resolve and reject method and promise chaining
const promiseFour = new Promise(function(resolve,reject)

{
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "john", password: "12345"})
        } else {
            reject("ERROR: Something went wrong");
        }
    },2000)

}).then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Promise is either resolved or rejected");
});

// promise five using async await method
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Python",library:"Numpy"})
        } else{
            reject('ERROR: Python went wrong');
        }
    },2000)
});
async function consumePromiseFive(){
   try{
    const response = await promiseFive;
    console.log(response);
   } catch(error)
   {
    console.log(error);
   }
}
consumePromiseFive();
