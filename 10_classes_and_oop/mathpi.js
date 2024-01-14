// getOwnPropertyDescriptor  iska use kisi object ke property ke bare me janne ke liye kiya jata hai 

// Object.getOwnPropertyDescriptor(Math)

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

const chai = {
    name: 'ginger chai',
    price: 230,
    isAvailable: true,

    orderChai: function(){
        console.log('chai nhi ready hai ho..');
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, "name", {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    // console.log(`${key} : ${value}`);

    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}

