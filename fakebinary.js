function fakeBin(x){  

    let array = x.split('')

for (let i = 0; i <array.length; ++i) {
    if (array[i] < 5) {
      array.splice(i,1, '0')
    } else {
       array.splice(i,1, '1')
    }   
  }
  return array.join('')
}

console.log(fakeBin('666'))

