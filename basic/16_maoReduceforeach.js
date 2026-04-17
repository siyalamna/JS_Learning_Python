const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = myNumber.map( (num) => num + 10)
const newNum = myNumber
.map( (num) => num * 10)
.map( (num) => num + 1)
.filter( (num) => num >= 40)
// console.log(newNum);

// .reduce method()

const myNums = [1, 2, 3, 4]
const myTotal = myNums.reduce( (acc, currval) => {
    // console.log(`acc is: ${acc} and currval is: ${currval}`)
    // return acc + currval
}, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'js course',
        price: 1999
    },
    {
        itemName: 'py course',
        price: 999
    },
    {
        itemName: 'mbl dev course',
        price: 5999
    },
    {
        itemName: 'data science course',
        price: 12999
    }
];

const myTotals = shoppingCart.reduce(function (acc, currval) {
    console.log(`acc is: ${acc} and currval is: ${currval.price}`)
    return acc + currval.price
}, 0)

// const myTotals = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(myTotals);


