//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// 1.) Define the function 
// 2.) Create empty array
// 3.) For each string in original array
// 4.) find the length
// 5.) and push the length to the new array as a number
// 6.) Return the new array

// your code here
function lengths(arrayOfStrings) {
  
  var arrayOfNumbers = [];

  for (var i = 0; i < arrayOfStrings.length; i++) {
    
    var lengthOfString = arrayOfStrings[i].length;
    
    // arrayOfNumbers.push(lengthOfString);
    arrayOfNumbers[i] = arrayOfStrings.length;
  }
    return arrayOfNumbers;
}



// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here
function transmogrified(base1, base2 , exponent) {
  var product = (base1*base2);
  var answer = (product ** exponent);
  // Math.pow(product, exponent);
  return answer;
}

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here
// 1.) define a function called wordReverse
// 2.) define 1 perameter called stringToReverse
// 3.) turn the string into an array of single words
// 4.) create an empty array to store the reversed array
// 5.) working backwards through the original array, place them into the empty array
// 6.) return the reversed array
function wordReverse (stringToReverse) {
  var arrayOfWords = stringToReverse.split(' ');
  
  var reversedWords = [];
  reversedWords = arrayOfWords.reverse();
  return reversedWords.join(' ');
}

or

function wordReverse (stringToReverse) {
  var arrayOfWords = stringToReverse.split(' ');
  var reversedWords = arrayOfWords.reverse();
  return reversedWords.join(' ');
}

or 

function wordReverse (stringToReverse) {
	var reversedString = stringToReverse
		.split(' ')
		.reverse()
		.join(' ');
	return reversedString();
}




