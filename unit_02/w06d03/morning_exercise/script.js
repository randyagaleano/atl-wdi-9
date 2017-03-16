//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  var smallBarrel = 60;
  var largeBarrel = (total - (small * smallBarrel)) / large;

return largeBarrel;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
	var circ = 24901;
	var mpg = milesPerGallon;

	var totalGallons = circ/mpg;
	var totalCost = totalGallons * fuelPrice;

	return totalCost;
};

//*************************
// Problem 3:
// GROG

// a&c = gallons . b&d = percentage
var calcFruitJuice = function(a, b, c, d){
	var costco = (b / 100) * a;
	var kirkland = (d / 100) * c;

	var totalJuice = a + b;
	var pureJuice = costco + kirkland;

	var answer = totalJuice/pureJuice;
	return answer;
};
// Run like this??? 
console.log(calcFruitJuice(3, 20, 2, 55));


//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
