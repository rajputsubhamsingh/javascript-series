const user = {
    username: 'shubham',
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log('Got user details from database');
        // console.log(`username : ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

// const userOne = User('shubhamsingh', 123, true)
// const userTwo = User('pappu', 3, false)
// console.log(userOne);

// yaha userTwo me pass value userOne ke value ko override kar de rha hai 
// isiliye hm constructor ka use karte hai jo ki hme har bar ek naya instance ka 
// copy deta hai jisse value override nhi hoti hai.


const userOne = new User('shubhamsingh', 123, true)
const userTwo = new User('pappu', 3, false)
// console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);


// new keyword use karte hai to ek empty object create hota hai jise hm instance bolte hai
// ek constructor function call hota hai new keyword ke karan (ye kya karta hai uske andar jitne arguments sb ko pack karke de deta hai aur this keyword sbko usme inject karta hai.)
 

