const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is compelete');
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log('Promise Consumed');
})



new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Asyn task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log('Asyn 2 consumed');
})



const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(() => { 
        resolve({username: 'shubham', email: 'singh@gmail.com'})
    }, 1000);
})

PromiseThree.then(function(user){
    console.log(user)
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        // let error = false
        if(!error){
            resolve({username: 'shubham', password: '1234'})
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

promiseFour
.then((user) => {
    console.log(user);
    console.log(user.username);
    // console.log(user.password);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('The promise is either resolve aur rejected.');
})


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = true
        // let error = false 
        if(!error){
            resolve({username: 'JavaScript', password: '1234'})
        }
        else {
            reject('ERROR: JS went wrong - promiseFive')
        }
    }, 1000);
})

// handle with help of async await.

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log("Consumed Promise Five ");
//     console.log(response);
// }


async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log("Consumed Promise Five ");
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive()
 


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(typeof response);
//         const data = await response.json()   // await isliye liye ki jb hm json me convert karte hai time convert hone me time lagta hai isiliye await use kara gaya hai.
//         console.log(data);
//     } catch (error) {
//         console.log('E: ', error);
//     }
// }

// getAllUsers()



fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))