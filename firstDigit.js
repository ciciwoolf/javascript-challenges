function firstDigit(str) {

    const strNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const chars = str.split ('')

    for (const char of chars) {
        if (strNums.includes(char)) {
            return char
        }
    }
}

console.log(firstDigit('dj5kjfdsa900'))