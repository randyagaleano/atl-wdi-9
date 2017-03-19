var pokeNum = Math.floor(Math.random()*(151));
var randomLink = document.getElementById('randomButton');

randomLink.setAttribute('href', '/pokemon/' + pokeNum);



