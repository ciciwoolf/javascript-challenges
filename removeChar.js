function removeChar(str){
    
    let newArray = str.split('')
    newArray.pop()
    console.log(newArray)

    newArray.unshift()
    console.log(newArray)

    let result = newArray.join('')
    console.log(result)

    return result
   };

   removeChar('eloquent')