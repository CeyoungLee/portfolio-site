const skip = document.querySelector("#skip");
const nav = document.querySelector("#nav");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const works = document.querySelector("#works");
const contacts = document.querySelector("#contacts");
const footer = document.querySelector("#footer");

const IMG_NUMBER = 1;

function paintImg(imgNumber) {
	const image = new Image();
	image.src = `./src/${imgNumber}.jpg`;
	image.classList.add('bgImage');
	home.prepend(image);
}

function genRandom() {
	const number = Math.floor((Math.random() * IMG_NUMBER) + 1);
	return number;
}

function init() {
	const randomNumber = genRandom();
	paintImg(randomNumber);

}

init();