// return masked string
testNum = "4556364607935616";

// function maskify(cardNumber) {
//     let res = Array.from(cardNumber)
//     console.log(res)  

//      res.splice(res.length-4, 4, "#", "#","#","#")    
//     console.log(res)

//     let newArr = res.join('')
//     return newArr
// }

function maskify(cc) {
    cc = cc.split("");
    for(let i = 0; i < cc.length - 4; i++){
      cc[i] = "#";
  }
  
  cc = cc.join("");
  return cc
  }

 console.log(maskify(testNum))

// module.exports = maskify;

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.


//initialize empty string
//splice