function caseInsensitivePalindrome(str) {
    const caselessStr = str.toLowerCase();
    // const reversedCaselessStr = caselessStr.split('').reverse().join(''); 
    let reversedCaselessStr = '';
    
    for(let i = caselessStr.length - 1; i >= 0; i--) {
        reversedCaselessStr += i
    }
    
    return caselessStr === reversedCaselessStr;
}

console.log(caseInsensitivePalindrome('abcd'))

