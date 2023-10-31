const myNums = [1, 2, 3]


// 0 for intial value
// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
const myTotal = myNums.reduce( (acc, curr) => {
    // console.log(`acc: ${acc} and current value: ${curr}`);
    return acc+curr
}, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);