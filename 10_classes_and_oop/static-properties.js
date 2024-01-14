// class User{
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`Username: ${this.username}`);
//     }

//     static createId(){
//         return `123`
//     }
// }

// const shubh = new User('shubhSingh')
// // console.log(shubh.createId());

// class Teacher extends User{
//     constructor(username, email){
//         super(username)
//         this.email = email
//     }
// }

// const demo = new Teacher('B.tech', '123456@gmail.com')
// demo.logMe()
// console.log(demo.createId());



class Example {
    constructor(carname, color, price){
        this.carname = carname
        this.color = color
        this.price = price
    }

    carFeatures(){
        console.log(`${this.carname} : color(${this.color}) = price : ${this.price}`);
    }
}

class Mustang extends Example {
    constructor(carname, color, price){
        super(carname, color, price)
    }
}

const car = new Example('Mustang', 'gray and black', '$12')
car.carFeatures()

const MustangCar = new Mustang('Q800A', 'red', '12crore')
MustangCar.carFeatures()