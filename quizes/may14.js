
fruits = ["apples", "pears", 1, 2, 3];
num = [1,2,3];
str = "anna";
strTwo = "I am Cici";

//Search

// const search = (arr, item) => arr.findIndex(a => a === item);

// console.log(search(fruits, "apples"));

//filter out numbers

// const filter = (arr) => arr.filter(a=> isNaN(+a));
// console.log(filter(fruits));

//Palindromes

// const isPali = (str) => {
//     str = str.replace(/\W/g, "").toLowerCase();
//     return (str === str.split('').reverse().join(''));
// }

// console.log(isPali(str));

//reverse string

// const reverse = (str) => str.split('').reverse().join('');
// console.log(reverse(strTwo));

// //findMiddle
// const findMiddle = (str) => {
//     let middle = Math.floor(str.length/2);
//     return str.length % 2 == 0 ? str.slice(middle-1, middle +1) : str.slice(middle, middle+1);
// }

// console.log(findMiddle("anna"));
// console.log(findMiddle("ana"));

//Map

// const map = (arr) => arr.map(a=> a*2);
// console.log(map(num));


//Promise (basic)

// const Promise = async() => {
//     const res = await fetch ("http://example.api.com");
//     const example = await res.json();
//     return example;
// }

//for of

// for (number of num) {
//     console.log(2 * number);
// }

// const factorialize = (num) => {
//     let result = 1;
//     for (let i =1; i<=num; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorialize(5));

// const closure = (first)=> {
//     let a = first;
//     return (b)=> {
//         return a + b;
//     }
// }

// console.log(closure(2)(3));

//reduce


// num = [1,2,3];
// var sum = num.reduce( function(total, amount){
//     return total + amount
//   });

//   console.log(sum);