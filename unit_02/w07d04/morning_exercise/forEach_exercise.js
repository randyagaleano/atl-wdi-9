var words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];
words.map(function(x) {
	return x.toUpperCase()
});

var squareMe = [0, 1, 10, 24, 595];
squareMe.forEach(function(n, index, squareMe) {
	squareMe[index] = n*n;
});

var numbers = [5,7,9,12,20];
var sum = 0
numbers.forEach(function(num) {
	sum += num
});

var products = [
  { name: 'flower vase',   price: 75 },
  { name: 'lamp',  price: 85 },
  { name: 'jar of honey',   price: 95 },
  { name: 'seashell frame', price: 65 },
  { name: 'lumber',  price: 55 }
];

products.forEach(function(n, index, products) {
	products[index] = n.price;
});
console.log(products.sort())





































