fruits = ["apples", 1, "pears", 3, "figs"];
num = [1,2,3]; 

//1. search

const search = (arr, item) => arr.findIndex(a => a === item);

console.log(search(fruits, "apples"));

//2. filter out the numbers, create a new array

const filterOutNum = (arr) => arr.filter(a => isNaN(+a));

console.log(filterOutNum(fruits));

//3. is it a palindrome? 

const isPalindrome = (str) => {
    str = str.replace(/\W/g,'').toLowerCase();
    return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("anna"));

//4. reverse the string

const reverse = (str) => str.split('').reverse().join('');

console.log(reverse("I am Cici"));

//5. find the middle

const findMiddle = (str) => {
    let middle = Math.floor(str.length/2);

return str.length % 2 === 0 ? str.slice(middle -1, middle+1) : str.slice(middle, middle + 1);
}

console.log(findMiddle("ana")); //nn
console.log(findMiddle("apples")); //p

//6. map

const mapped = (arr) => arr.map(a => a *2);

console.log(mapped(num));

//7. Promise

const Promise = async() => {
    const res = await fetch("http://www.example.api.com");
    const example = res.json();
    return example;
}

//8. for of 

for(item of fruits) {
    console.log("I love " + item);
}

//9. factorialize

const factorialize = (x) => {
    let result = 1;
    for (let i = 1; i <= x; i++) {
        result *= i;
    }
    return result;
}

console.log(factorialize(5));

//10. closure 

const closure = (first) => {
    let a = first;
    return (b) => {
        return a + b;
    }
}

console.log(closure(2)(2));

//11. reduce

const euros = [29.76, 41.85, 46.5];

const sum = (arr) => arr.reduce((total, amount) => total + amount); 

console.log(sum(euros));