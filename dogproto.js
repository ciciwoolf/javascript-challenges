function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    constructor: Dog, //remember to include this to keep it defined as constructor
    numLegs:4,
    eat: function(){
      console.log("nom nom nom")
    },
    describe: function(){
      console.log("My name is " + this.name)
    }
  };

  let Lukos = new Dog("Lukos")

  console.log(Lukos.describe())

  console.log(Dog.prototype.isPrototypeOf(Lukos))