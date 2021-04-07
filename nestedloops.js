//nested loops

//Using nested loops to print out addresses on a street. We need to print out the building number, then the flat number. Each building has exactly 3 flats in it.

const buildings = 4


for(let i=0; i<buildings; i++) {
   
    for(let j=0; j<3; j++) {
        console.log('Building ' + (i+1) + ' flat ' + (j +1))
    }
}