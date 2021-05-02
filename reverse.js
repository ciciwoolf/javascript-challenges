

// const reverseString = (str) => str.split('').reverse().join('');

const reverseString = function(str) {
    return str
    .split('')
    .reverse()
    .join('');
}

let str = "Hi how are you";
console.log(reverseString(str));

