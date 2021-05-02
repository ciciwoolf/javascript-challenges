const removeNums = (arr) => arr.filter(a => isNaN(+a));

arr = ["a", 1, "hola"];

console.log(removeNums(arr));

