$(function() {

	console.log("I work");

	var value;
	var timer;

	//on click start display, count up every 1 second
	$("#start").click(function(){
		console.log("start button clicked");

		// every second call updateDisplay
		timer = setInterval(updateDisplay, 1000);
	});

	$("#stop").click(function() {
		console.log("stop button clicked");
		clearInterval(timer);
	});

	$("#reset").click(function() {
		console.log("reset button clicked");
		value = 0;
		$("#stopwatch").find(".value").text(value);
		clearInterval(timer);
	});

	$("#countdown").click(function() {
		console.log("countdown button clicked");
		timer = setInterval(countdown, 1000); 
	})

	function updateDisplay() {
	    var value = parseInt($('#stopwatch').find('.value').text(), 10);
	    value++;
	    $('#stopwatch').find('.value').text(value); }

	function countdown() {
		var value = parseInt($('#stopwatch').find('.value').text(), 10);
		value--;
		$('#stopwatch').find('.value').text(value); }
});
