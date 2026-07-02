// Question 1: Create a promise that resolves after 1 second and returns "Welcome Zahra". Use .then to log the result to the console.
const printName = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Welcome Zahra");
    },1000);
}).then(function(data){
    console.log(data);
})

// Question 2: use resolve and reject for vottig program
const voting = new Promise(function(resolve,reject){
    setTimeout(function(){
        let age = 18;
        if(age>= 18){
            resolve("You are eligible to vote");
        }
        else{
            reject("Sorry, you are not eligible to vote");
        }
    },2000)
}).then(function(vote){
    console.log(vote);
}).catch(function(error){
    console.log(error);
})

// Question 3:Pass Fail program using promises
const passFail = new Promise(function(resolve,reject){
    let marks = 70;
    if(marks >= 50){
        resolve("You have passed the exam");
    } else{
        reject("You have failed the exam");
    }
}).then(function(pass){
    console.log(pass);
}) . then(function(pass){
    console.log("Congratulations");
}).catch(function(fail){
    console.log(fail);
});

// Question 4: use try and catch 
const promise = new Promise(function(resolve,reject){
    let error = true;
    if(!error){
        resolve("Promise is resolved");
    } else{
        reject("Promise is rejected");
    }
});
async function consumePromise(){
    try{
        console.log(name);
    } catch(error){
        console.log(error);
    }
}
consumePromise();