var css = document.querySelector('h3')
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var color3 = document.querySelector('.color3');
var body = document.getElementById('gradient');
var button = document.getElementById('random');


function setGradient() {
	body.style.background =
		"linear-gradient(to right," + color1.value + ", " + color2.value + ", " + color3.value + ")";

		css.textContent = body.style.background + ", "
}

function randomColor() {
	var color = "#" + Math.floor(Math.random()*16777215).toString(16);
	return color;
		
}

function colorGenerator() {
	color1.value = randomColor();
	color2.value = randomColor();
	color3.value = randomColor();

	setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);

button.addEventListener("click", colorGenerator);