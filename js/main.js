const skip = document.querySelector("#skip");
const nav = document.querySelector("#nav");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const works = document.querySelector("#works");
const contacts = document.querySelector("#contacts");
const footer = document.querySelector("#footer");

const IMG_NUMBER = 1;

function paintImg(imgNumber) {
	home.style.background=`aquamarine url('./src/${imgNumber}.jpg') no-repeat left top`;
	home.style.backgroundSize=`100% 100%`;
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