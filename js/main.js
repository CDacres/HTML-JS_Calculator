document.addEventListener('DOMContentLoaded', function (event) {
	console.log('The DOM is ready!');

	var myButton = document.getElementById('my-button');

	myButton.addEventListener('click', function (event){

		console.log('Help me! I\'ve been clicked!');

	});

});