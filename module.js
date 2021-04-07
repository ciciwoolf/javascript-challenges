let funModule = (function(){
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function() {
            return true;
            }
        },
        singMixin: function(obj) {
            obj.sing = function() {
            console.log("Singing to an awesome tune");
            }
         }
        }
  })()

  function Bird() {
    this.name = "Albert";
    this.color  = "blue";
    this.numLegs = 2;
  }
  
  let blueBird = new Bird();
  console.log(blueBird)

  funModule.isCuteMixin(blueBird)
console.log(blueBird.isCute())
