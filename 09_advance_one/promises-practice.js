const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async task is completed');
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log('Promise Consumed');
})



new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Asyn task 2 complete');
        resolve()
    }, 1000);
}).then(function(){
    console.log('Promise 2 consumed');
})

const PromiseThree = new Promise(function(resolve, reject){
    // resolve({username:'Shubham', email:'singhsubham841438@gmail.com'})
    setTimeout(() => {
        resolve({username:'Shubham', email:'singhsubham841438@gmail.com'})
    }, 1000);
})

PromiseThree.then(function(userData){
    console.log(userData);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let err = false
        // let err = true
        if(err){
            reject("Err : Something went wrong here!!!")
        }
        else{
            resolve({firstname:'shubham', lastname: 'singh', email:'singhsubham841438@gmail.com'})
        }
    }, 1000);
})

// promiseFour
// .then(function(data){
//     console.log(data);
// })
// .catch(function(err){
//     console.log(err);
// })

promiseFour
.then(function(data){
    return data;
})
.then(function(userData){
    console.log(userData);
    // console.log(userData.firstname);
    // console.log(userData.lastname);
    // console.log(userData.email);
})
.catch(function(err){
    console.log(err);
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        // let err = false
        let err = true
        if(err){
            reject('Err : something went wrong!!!!!!')
        }
        else{
            resolve({firstname:'Bihari', lastname: 'singh'})
        }
    }, 1000);
})

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log('Consumed Promise Five..');
//     console.log(response);
// }
// consumePromiseFive()


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log('Consumed Promise Five..');
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()



async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(typeof response);
        const data = await response.json()
        // console.log(data);
    } catch (err) {
        console.log('Err:', err);
    }
}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response;
})
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})