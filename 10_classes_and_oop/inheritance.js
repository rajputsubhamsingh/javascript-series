class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const demo = new Teacher('Maa', 'example@gmail.com', '123456')
demo.addCourse()
demo.logMe()

const demo2 = new User('Lucky')
demo2.logMe()

console.log(demo === demo2);
console.log(demo instanceof Teacher);
console.log(demo instanceof User);

console.log(demo2 instanceof User);
console.log(demo2 instanceof Teacher);