//Reverse a string

const reverseString = (str) => str.split('').reverse().join('');

console.log(reverseString("I am Cici Woolf"));

//Factorialize a number

const factorializeNumber = function(num) {
    let result = 1;
    for (let i = 1; i <=num; i++) {
        result *=i;
    }
    return result;
}

console.log(factorializeNumber(6));

//Is it a palindrome?

const isPalindrome = (str) => {
    str = str.replace(/\W/g, "").toLowerCase();
    return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("anna"));
console.log(isPalindrome("Ci ci "));

//Closure

const closure = (first) => {
    let a = first;
    return (b) => {
        return a + b;
    }
}

console.log(closure(2)(3));

//findMiddle

const findMiddle = (str) => {
    let middle = Math.floor(str.length/2);
    return str.length % 2 === 0 ? str.slice(middle-1, middle+1) : str.slice(middle, middle +1);
}

console.log(findMiddle("apples")) //pl
console.log(findMiddle("fives")) //v

const search = (arr, item) => arr.findIndex(a => a === item);

array = ["orange", "apple"];

console.log(search(array, "apple"));

const filterNumbers = (arr) => arr.filter(a => Number.isNaN(+a));

words = ["Hello", 5, "Hola", 7]

console.log(filterNumbers(words));