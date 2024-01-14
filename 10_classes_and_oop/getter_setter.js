// class based getter and setter 

class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

const shubham = new User('singh@112.ai', '1234abd')
console.log(shubham.email);
console.log(shubham.password);