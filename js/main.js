document.addEventListener('DOMContentLoaded', function (event) {
	console.log('The DOM is ready!');

	var display = document.getElementsByClassName('display');
	var operatorPressed = false;
	var num1;
	var num2;
	var calculation;

	var numButtons = document.getElementsByClassName('number');
	for (var i = 0; i < numButtons.length; i++) {
	    numButtons[i].addEventListener('click', function (event) {
	        number = this.value;
	        if (operatorPressed === false) {
	        	num1 = number;
	        	display[0].value = num1;
	        } else {
	        	num2 = number;
	        	display[0].value = num1;
	        }
	    });
	}

	var numOperators = document.getElementsByClassName('operator');
	for (var i = 0; i < numOperators.length; i++) {
	    numOperators[i].addEventListener('click', function (event) {
		    operator = this.value;
		    if (num1 !== undefined) {
		    calculation = operator;
		    operatorPressed = true;
		    }
	    });
	}
});