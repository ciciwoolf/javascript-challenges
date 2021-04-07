
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/


let testArr = [1,6,6,4,5,3,2]

function getSecondLargest(nums) {   

    let uniqueNums = [...new Set(nums)];
    console.log(uniqueNums)

    let newArr = uniqueNums.sort((a, b) => {return b-a});
   

    let secondLargest = newArr[1];
    

    return secondLargest;
 }
 
console.log(getSecondLargest(testArr))