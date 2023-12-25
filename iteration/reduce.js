// let myNum = [1,2,3];
// const newVal = myNum.reduce( function(acc, currVal) {
//     console.log(`accumulator: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 0);

// // using arrow function

// const newVal2 = myNum.reduce((acc, currVal) =>  (acc + currVal) , 0);
// console.log(newVal2);

const shoppingCart = [
    {
        course: "py course",
        price: 5999
    },
    {
        course: "Jacket ",
        price: 600
    },
    {
        course: "shoe",
        price: 5999
    }
]

let TotalPrice = shoppingCart.reduce( (acc, item) => acc + item.price ,0);
console.log(`Total price is : ${TotalPrice}`);