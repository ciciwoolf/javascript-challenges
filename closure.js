
const closure = function (first) {
    let a = first;
    return (b) => a*b;
}

console.log(closure(2)(3));

const closureSecond = function (x) {
    let a = x;
    return function(b) {
        a + b;
    } 
        
}

console.log(closureSecond(2)(2));

