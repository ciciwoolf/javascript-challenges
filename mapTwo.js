var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  let newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++){
    newArray.push(callback(this[i])); //we push the callback onto each item for the array in question ('this'). 
    //console.log(newArray)
  }
  // Only change code above this line
  return newArray;
  //console.log(newArray)
};

var new_s = s.myMap(function(item) {
    //console.log(item)
  return item * 2;
});

console.log(new_s)