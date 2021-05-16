//closure

const add = (first) => {
    let a = first;
    return (b) => {
        return a + b;
    }
}

console.log(add(3)(4));

//Search
array = [5,4,3,2]
const search = (arr, item) => arr.findIndex(a => a === item);

console.log(search(array, 3));

//Palindrome

const isPalindrome = function(str) {
    str = str.replace(/\W/g,"").toLowerCase();
    return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("anna"));

//Find the middle

const findMiddle = function(str) {
    middle = Math.floor(str.length/2);
    return str.length % 2 == 0 ? str.slice(middle-1, middle+1) : str.slice(middle, middle+1);

}

console.log(findMiddle("school"));

//Factorialize
const factorialize = function(num) {
    let result = 1;
    for (let i = 1; i <=num; i++){
        result *= i;
    }
    return result;
}

console.log(factorialize(5));

//Filter Numbers

arrayMix = [1, "a", 3, "b"];

const filterOutNum = (arr) => arr.filter(a => isNaN(+a));

console.log(filterOutNum(arrayMix));


//Reverse a String

const reverse = (str) => str.split('').reverse().join('');

console.log(reverse("I am Cici"));

//Promise

const getAnimal = async () => {
    const res = await fetch('http://api.example.com/animals')
    const animal = await res.json();
    return animal;
  }


  const getAnimal = async () => {
      const res = await fetch('http://api.example.com/animals')
      const animal = await res.json();
      return animal;
  }

  const getAnimal = async () => {
      const res = await fetch('http://api.example.com/animals')
      const animal = await res.json();
      return animal;
  }

  