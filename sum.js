numbers = [1,2,5,6,7,8]

function sum(numbers) {
    let smallest = Number.MAX_VALUE;
    console.log(smallest)
    let secondSmallest = Number.MAX_VALUE;
    
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]==smallest){
          secondSmallest=smallest;
        } else if (numbers[i] < smallest) {
            secondSmallest = smallest;
            smallest = numbers[i];
        } else if (numbers[i] < secondSmallest) {
            secondSmallest = numbers[i];
        }
    
    }
    
    return smallest + secondSmallest
} 

console.log(sum(numbers))

module.exports = sum;



