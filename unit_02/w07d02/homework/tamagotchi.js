console.log('tamagotchi file is loaded');
var Tamagotchi = function(name, creatureType) {

	this.foodInTummy = 10;
	this.restedness = 10;
	this.health = 10;
	this.name = name;
	this.creatureType = creatureType;

	this.cry = function() {
		this.foodInTummy--;
		console.log(this.name + " the " +this.creatureType +  " is crying!!! WAAAH!!!!!!");
		console.log('current food in tummy: ' + this.foodInTummy);
	};
	this.puke = function() {
		this.foodInTummy--;
		console.log(this.name + " the "+this.creatureType + " puked! Wahhhh! " + this.name + " now has " +this.foodInTummy + " food in tummy!");
	};
	this.yawn = function() {
		this.restedness--;
		console.log(this.name + " the "+this.creatureType + " is getting tired... Finally..." + this.name + " has current restedness of  " +this.restedness + ".");
	};
};

//create a new Tamagotchi with `new`
var earl = new Tamagotchi();
	earl.name = 'Earl';
	earl.creatureType = 'Eagle';
var shirley = new Tamagotchi();
	shirley.name = "Shirley";
	shirley.creatureType = 'Shark';
//console log the new Objects to check them out
console.log(earl);
console.log(shirley);

//Invoke methods on the constructed objects:
earl.cry();
earl.puke();
earl.yawn();
//your constructor function here


//create new Tamagotchis


//test out your Tamagotchies below via console.logs
