// reduce

const myNums = [1, 2, 3]

// below code is using scope.

// const myTotal = myNums.reduce(function (accumulator, current_value) {
//     console.log(`accu ${accumulator} and currval: ${current_value}`);
//     return accumulator + current_value
// }, 0)

// below code is using aero function "=>".

// const myTotal = myNums.reduce( (accumulator, current_value) => accumulator + current_value, 0 )

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
        itemName: "mobil dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (accumulator, item) => accumulator + item.price,  0)

console.log(priceToPay);