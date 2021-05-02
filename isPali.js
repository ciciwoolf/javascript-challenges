
const isPalindrome = function (str) {
    str = str.replace(/\W/g, '').toLowerCase();
    console.log(str)
    return (str == str.split('').reverse().join(''));
  }

  console.log(isPalindrome("Ann a"));