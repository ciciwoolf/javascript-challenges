let numbers = [1,2,3,4]

// let sum = 0

// numbers.forEach(n => {
//     sum +=n
// })

// console.log(sum)


const sum = numbers.reduce((acc, currentValue) => {
    return acc + currentValue
}, 0)

console.log(sum)

//create the callback function as the first argument, and set the acc to 0 as the second argument. 