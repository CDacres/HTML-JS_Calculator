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
	        var number = this.value;
	        if (operatorPressed === false) {
	        	num1 = parseFloat(number);
	        	display[0].value = num1;
	        } else {
	        	num2 = parseFloat(number);
	        	display[0].value = num2;
	        }
	    });
	}

	var operatorButtons = document.getElementsByClassName('operator');
	for (var i = 0; i < operatorButtons.length; i++) {
	    operatorButtons[i].addEventListener('click', function (event) {
		    var operator = this.value;
		    if (num1 !== undefined) {
		    calculation = operator;
		    operatorPressed = true;
		    }
	    });
	}

	var equalsButton = document.getElementsByClassName('eq');
	equalsButton[0].addEventListener('click', function (event) {
		var button = this.value;
		if (operatorPressed === true) {
			if (calculation === '+') {
		    	var answer = num1 + num2;
				display[0].value = answer;
			} else if (calculation === '-') {
				var answer = num1 - num2;
				display[0].value = answer;
			} else if (calculation === 'x') {
				var answer = num1 * num2;
				display[0].value = answer;
			} else {
				var answer = num1 / num2;
				display[0].value = answer;
			}
		}

	});

});