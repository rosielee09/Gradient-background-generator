
let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');
let button = document.querySelector('button');



function setGradient() {
	body.style.background = 
	"linear-gradient(to right," 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

//when click, random color works
function clickRandom() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();

}

//generating random color in hex
function randomColor() {
	const randomColor =  (Math.random() * 0xfffff * 1000000 ).toString(16);
    return '#' + randomColor.slice(0, 6);
}



setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", clickRandom);