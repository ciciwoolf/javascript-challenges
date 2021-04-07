function maxMultiple(divisor, bound) {
    const remainder = bound % divisor;
 
    
    return bound - remainder;
}

console.log(maxMultiple(2,4)) //returns 4
console.log(maxMultiple(4,15)) //returns 12
console.log(maxMultiple(21,5)) //returns 0, no multiples of 21 into 5