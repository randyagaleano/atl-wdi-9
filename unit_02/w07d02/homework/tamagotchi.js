console.log('tamagotchi file is loaded');
var Tamagotchi = function() {

  this.foodInTummy = 10;
  this.restedness = 10;
  this.health = 10;

  this.cry = function() {
      this.foodInTummy--;
      console.log("The Tamagotchi is crying!!! WAAAH!!!!!!");
      console.log('current food in tummy: ' + this.foodInTummy);
  };
};

//create a new Tamagotchi with `new`
var Tamagotchi1 = new Tamagotchi();
var Tamagotchi2 = new Tamagotchi();

//console log the new Objects to check them out
console.log(Tamagotchi1);
console.log(Tamagotchi2);

//Invoke methods on the constructed objects:
Tamagotchi1.cry();
Tamagotchi2.cry();
//your constructor function here


//create new Tamagotchis


//test out your Tamagotchies below via console.logs
