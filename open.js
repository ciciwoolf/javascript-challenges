// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Note for F#: The input will be of (int list list) which is a List<List>

// Example Input
// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example Output
// ["Open", "Open", "Senior", "Open", "Open", "Senior"]


function openOrSenior(data){
    
    let result = []

    for (let i = 0; i < data.length; i++){
        let senior = data[i]
        
        for (let j =0; j < senior.length; j++){
            if (senior[0] >= 55 && senior[1] > 7)
            senior[0] = "Senior"
        } else if {
            
        }
    }



    // var cubes = [
    //     [1, 2, 3],
    //     [4, 5, 6],    
    //     [7, 8, 9],
    //    ];
       
    //    for(var i = 0; i < cubes.length; i++) {
    //        var cube = cubes[i];
    //        for(var j = 0; j < cube.length; j++) {
    //            display("cube[" + i + "][" + j + "] = " + cube[j]);
    //        }
    //    }


    //iterate through age first
    //iterate through handicap second

    //if age && handicap greater than 55
    //push new values into array to replace old values

    //return new array
  }




  openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]])