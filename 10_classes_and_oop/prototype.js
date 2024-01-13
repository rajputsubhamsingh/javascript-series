// // let myName = "Shubham       "
// // let mychannel = "chai        "

// // console.log(myName.trueLength);

// let myHeros = ["thor", "spiderman"]

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spiderman power is ${this.spiderman}`);
//     }
// }

// Object.prototype.shubham = function(){
//     console.log(`shubham is present in all object`);
// }

// Array.prototype.heyShubham = function(){
//     console.log(`shubham say hello`);
// }

// heroPower.shubham()
// myHeros.shubham() 
// myHeros.heyShubham()

// // heroPower.heyShubham()


// inheritance

const User = {
    name: 'manish',
    email: 'mainsh@gmail.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// console.log(TASupport);
// console.log(TASupport.__proto__);

Teacher.__proto__ = User

// console.log(Teacher);
// console.log(Teacher.__proto__);



// modern syntax for inheritance

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiaurcode          "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"shiva   ".trueLength()
"shivam".trueLength()






// for(let i = 65; i<=90; i++){
//     console.log(String.fromCharCode(i));
//     // console.log(String.fromCodePoint(i));
// }