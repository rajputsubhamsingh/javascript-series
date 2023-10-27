// //var c = 300
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     // console.log("INNER: ", a);
    
// }



// console.log(a);
// console.log(b);
// console.log(c);


// function one(){
//     const username = "shubham"

//     function two(){
//         const website = "youtube"
//         console.log(website);
//         console.log(username);
//     }
//     // console.log(website); // no more scope for website variable
//     two()

// }

// one()

if (true) {
    const username = "shubham"
    if (username === "shubham") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);  // no more scope for website variable
}

// console.log(username);  // no more scope for website variable


// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5) //when we call ,show the error because of hoisting
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))