testNum = "4556364607935616";

    let res = Array.from(testNum)
    console.log(res)  

     res.splice(res.length-4, 4, "#", "#","#","#")    
    console.log(res)

    let newArr = res.join('')
    console.log(newArr)