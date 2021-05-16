// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

//Find length
//Find out if it is odd or even

//Use Math floor to get the 'middle' - The Math.floor() function returns the largest integer less than or equal to a given number.

const getMiddle = (s) => {

    let middle = Math.floor(s.length/2)
    //middle here returns half, but it will be index in the slice method

    return s.length % 2 === 0 ? s.slice(middle-1, middle+1) : s.slice(middle,middle+1) 

}

console.log(getMiddle("apples"))
console.log(getMiddle("tests"))

