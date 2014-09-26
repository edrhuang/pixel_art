window.onload = function() {

	var button = document.getElementById("set-color");
	var brush = document.getElementsByClassName('brush')[0];
	var input = document.getElementById('color-field');

	

	function setColor(){
		var userInput = input.value
		brush.style.backgroundColor = userInput;
		
	}


	function fuck(){
		console.log(input.value)
	}
	
	button.onclick = setColor;
	
	

	// brush[0].style.backgroundColor = "red";
	// button.onclick = setColor(input.value);

	

};