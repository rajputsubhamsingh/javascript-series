let newDate = new Date();

console.log(newDate);

console.log(newDate.toString());
console.log(newDate.toJSON());
console.log(newDate.toLocaleDateString());
console.log(newDate.toLocaleString());
console.log(newDate.toLocaleTimeString());

let myCreatedDate = new Date(2023, 0 , 23);
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp); 