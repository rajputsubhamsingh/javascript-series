// const myArr = [1,2,3,4,5]
// myArr.push(10)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(12)
// console.log(myArr);

// myArr.shift()
// console.log(myArr);
 
// console.log(myArr.includes(3));
// console.log(myArr.includes(30));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);



const arr1 = ['shubham', 'pappu', 'shivam']
const arr2 = ['rema', 'shipu', 'deepu']

// arr1.push(arr2);
// console.log(arr1);

// arr1.concat(arr2)
// console.log(arr1);

// const newarr01 = [...arr1, ...arr2]
// console.log(newarr01);


// const anotherArr = [1,2,[3,4,5,6,7],6,9,8,[3,4,8,1,2,[0,3,1,2]]]

// const real_another_array = anotherArr.flat(Infinity)
// console.log(real_another_array);



console.log(Array.isArray('shubham'));
console.log(Array.from('shubham'));
console.log(Array.from({name: 'shubham'}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));