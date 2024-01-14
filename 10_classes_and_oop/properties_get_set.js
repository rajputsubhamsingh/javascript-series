// function based getter and setter
// method of getter and setter 
// this is function based modern syntax

function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const demo = new User('shuham@1234.ai', '12qwert')
console.log(demo.email);
console.log(demo.password);