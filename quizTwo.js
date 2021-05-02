// // //Reverse a string

// const reverseString = (str) => str.split('').reverse().join('');

// console.log(reverseString("I am Cici"));

// // //is it a palindrome? 

// const isPalindrome = function(str) {
//     str = str.replace(/\W/g, "").toLowerCase();
//     return (str == str.split('').reverse().join(''));
// }

// console.log(isPalindrome("anna"));

// //filter numbers out of an array

// const filterNumbersOut = (arr) => arr.filter(a => isNaN(+a))


// num = ["hi", 1, 2]
// console.log(filterNumbersOut(num));

// //factorialize a number

// const factorializeNumber = function(num) {
//     let result = 1; 
//     for (let i = 1; i <= num; i++) {
//         result *=i;
//     }
//     return result;
// }

// console.log(factorializeNumber(5))

//search using findIndex


const search = (arr, searchItem) => arr.findIndex(a => a === searchItem);


arr = ["hola", "hi", "goodbye"]
console.log(search(arr, "hi"))

//closures

const closure = (x) => {
    let a = x;
    return function(y) {       
       return a + y;
    }
}



console.log(closure(2)(2));