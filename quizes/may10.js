//1. Closure

const closure = (first) => {
    let a = first;
    return (b) => {
        return a + b;
    }
}

console.log(closure(1)(3));
//expected output: 4

//2. is it a palindrome?

const isPalindrome = (str) => {
    str = str.replace(/\W/g, "").toLowerCase();
    console.log(str);
    return str == str.split('').reverse().join('');
}

console.log(isPalindrome('anna'));
//expected output: Boolean true

//3. Map - map() method creates a new array after appylying a function to each element of original array

arr = [1,2,3];

const mapped = (nums) => nums.map(item => item *2);

console.log(mapped(arr));

//4. search

searchArray = [5,4,3,2]
const search = (arr, item) => arr.findIndex(a => a === item);

console.log(search(searchArray, 3));
//2

//5. factorialize number

const factorialize = (num) => {
    let result = 1;

    for (let i = 1; i<=num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorialize(5));
//120

//6. Promise - a piece of code that runs asynchronously, waiting for data usually. It can have three states pending, fulfilled or rejected.

const getJoke = async () => {
    const res = await fetch('http://api.icndb.com/jokes/random')
    const joke = await res.json();
    return joke;
  }

  //7. filter out numbers

  let redArray = ["red", 3, "blue", 5];

  const filterOut = (arr) => arr.filter(a => isNaN(+a));

  console.log(filterOut(redArray));

  //8. filter out odd numbers

  const filterOdd = (arr) => arr.filter(a => a % 2 === 0);

  console.log(filterOdd(redArray));

  //9. Find the middle

  const findMiddle = (str) => {
      let middle = Math.floor(str.length/2);
      console.log(middle);
      return str.length % 2 === 0 ? str.slice(middle-1, middle+1): str.slice(middle, middle +1);
  }

  console.log(findMiddle("anna"));

//10. reduce

arr = [1,2,3]

const reduce = arr.reduce((total, amount) => total + amount);
console.log(reduce)
  

