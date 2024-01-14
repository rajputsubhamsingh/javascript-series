// object based getter and setter

const User = {
    _email: 'h@hc.com',
    _password: 'abc@12',

    get email(){
        return this._email.toUpperCase()
    },
    
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);