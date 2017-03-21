console.log('tamagotchi file is loaded');
var Tamagotchi = function(name, creatureType) {

	this.foodInTummy = 10;
	this.restedness = 10;
	this.health = 10;
	this.name = name;
	this.creatureType = creatureType;

	this.cry = function() {
		this.foodInTummy--;
		console.log(this.name + " the " +this.creatureType +  " is crying!!! WAAAH!!!!!! Current food in tummy: " + this.foodInTummy);
	};
	this.puke = function() {
		this.foodInTummy--;
		console.log(this.name + " the "+this.creatureType + " puked! Wahhhh! " + this.name + " now has " +this.foodInTummy + " food in tummy!");
	};
	this.yawn = function() {
		this.restedness--;
		console.log(this.name + " the "+this.creatureType + " is getting tired... Finally..." + this.name + " has current restedness of  " +this.restedness + ".");
	};

	this.start = function() {
		console.log("Get ready to care for " +this.name + "!");
		var self = this;

		this.hungerTimer = setInterval(function() {
			self.cry();
		}, 6000);
		this.yawnTimer = setInterval(function() {
			self.yawn();
		}, 10000);
		this.sickTimer = setInterval(function() {
			self.puke();
		}, 2000);
	};
	this.stop = function() {
		console.log('stopping' + this.name);
		clearInterval(this.hungerTimer);
		clearInterval(this.yawnTimer);
		clearInterval(this.sickTimer);
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

