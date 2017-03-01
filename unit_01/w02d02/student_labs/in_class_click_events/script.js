window.onload = function() {
	// BUTTON 1 ALERT
	var button1 = document.querySelector('#button1');
	button1.addEventListener('click', function() {
		alert("You have clicked button one!")
	});
	// BUTTON 2 APPEND
	var button2 = document.querySelector('#button2');
	var p = document.createElement('p');
	p.innerHTML = "A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).";
	button2.addEventListener('click', function() {
		document.getElementById('information').appendChild(p);
	});

	// BUTTON 3 APPEND
	var button3 = document.querySelector('#button3');
	button3.addEventListener('click', function () {
		document.getElementById('information').removeChild(p);
	});

}
