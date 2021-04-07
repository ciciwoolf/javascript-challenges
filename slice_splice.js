var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

console.log(citrus) //slices array to return only orange lemon



var fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.splice(2, 0, "Lemon", "Kiwi"); //starting at index 2, taking out 0 elements, push in "lemon" and "kiwi"

//Unfortunately, splice changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.

console.log(fruit)