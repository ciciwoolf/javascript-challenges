//1 Reverse a String

const reverseString = function(str) {
    return str
    .split('')
    .reverse()
    .join('')
}

console.log(reverseString("I am Cici"));

//factorialize a number

const factorializeNum = function(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorializeNum(5));

//filter numbers

const filterNumbers = (arr) => arr.filter(a => isNaN(+a));

arr = [1,"hi", "hiya", 3, 4, 5];

console.log(filterNumbers(arr));

//is it a palindrome? 

const isPalindrome = function(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("anna"));
console.log(isPalindrome("Paul"));

//find an item

const search = (arr, item) => arr.findIndex(a => a ===item);

array = [1,2,3,4,5];

console.log(search(array, 5));