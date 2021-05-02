
const factorializeNumber = function(num){
    let result = 1;
    for (let i = 1; i <= num; i++){
        result *=i;
    }
    return result
}


function factorializeNumber(num) {
    let result = 1; 
    for(let i =1; i <= num; i++) {
        result *= i; 
    }
    return result
}

console.log(factorializeNumber(5))