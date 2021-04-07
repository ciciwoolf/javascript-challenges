function Bird() {
    this.name = "Albert";
    this.color  = "blue";
    this.numLegs = 2;
  }
  
  let blueBird = new Bird();

  console.log(blueBird.name)

  function Wolf() {
    this.name = "Lukos"
    this.color = "Brown"
    this.age = 10
  }

  let timberWolf = new Wolf()
  timberWolf.name = "Barney"
  console.log(timberWolf.name + "---" + timberWolf.color)

