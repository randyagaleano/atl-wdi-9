// 1.)
var maxOfTwoNumbers = function (a, b) {
  if (a > b) 
    console.log(a + " is the larger number.")
  else 
    console.log(b + " is the larger number.")
}

// 2.)
var maxOfThreeNumbers = function (a, b, c) {
  if  (a > b > c )
    console.log(a + " is the larger number.");
  else if (b > c > a)
    console.log(b + " is the larger number.");
  else
    console.log(c + " is the larger number.");
}






// 3.)
var isCharacterAVowel = function (letter) {
  if (  letter === "a" || 
	  	letter === "e" || 
	  	letter === "i" || 
	  	letter === "o" || 
	  	letter === "u")
	  	{
    console.log("This is a vowel.");
  }
  else {
    console.log("This is not a vowel.");
  }
};





// 4.)
function sumArray(array) {
  for (var i = 0, sum = 0; i<array.length; sum += array[i++]);
  return sum;
}
function multArray(array) {
  for (var i = 0, mult = 1; i<array.length; mult *= array[i++]);
  return mult;
}

// 5.)
function howMany () {
  console.log(arguments.length)
}

// 6.)
function wordReverse (stringToReverse) {
  var arrayOfWords = stringToReverse.split('');
  var reversedWords = arrayOfWords.reverse();
  return reversedWords.join('');
}

// 7.) 
mine
function findsLongestWords(words) {
  longest = 0;
  for (var i = 0; i < words.length; i++)
    if (words[i] > longest) {
      longest = words[i].length
    }
    return longest;
}

// 8.)
function filterLongWords (array1, i) {
  var newArray = [];
  for (var x = 0; x < array1.length; x++) {
  	if (array1[x].length > i) {
  		newArray.push(array1[x]);
  	}
  }
  return newArray;
}







