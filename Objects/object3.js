// class ek object hai aur 
// object jo hai class se bana ek entity hai 

 
// class RailwayForm{
//     submit(){
//         console.log(this.name + ' form submitted');
//     }
//     cancel(){
//         console.log(this.name + ' form cancel');
//     }
//     fill(name){
//         this.name = name
//     }
// }

// let sohan = new RailwayForm()
// sohan.fill('sohan')
// let rohan = new RailwayForm()
// rohan.fill('rohan')

// sohan.submit()
// rohan.submit()
// rohan.cancel()



// constructor
// constructor tab call hota hai jb kisi class ka object banate hai 
class RailwayForm{
    constructor(name){
        this.name = name
    }
    submit(){
        console.log(this.name + ' form submitted');
    }
    cancel(){
        console.log(this.name + ' form cancel');
    } 
}

let sohan = new RailwayForm('sohan') 
let rohan = new RailwayForm('rohan')

sohan.submit()
rohan.submit()
rohan.cancel()