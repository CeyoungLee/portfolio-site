const skip = document.querySelector("#skip");
const about = document.querySelector("#about");
const works = document.querySelector("#works");
const contacts = document.querySelector("#contacts");
const footer = document.querySelector("#footer");

//home
export const home = document.querySelector("#home");

const IMG_NUMBER = 1;

function paintImg(imgNumber) {
  home.style.background=`aquamarine url('./src/${imgNumber}.jpg') no-repeat left top`;
  home.style.backgroundSize=`100% 100%`;
}

function genRandom() {
  return Math.floor((Math.random() * IMG_NUMBER) + 1);
}

export function homeInit() {
  const randomNumber = genRandom();
  paintImg(randomNumber);
  console.log("home.init");
}
homeInit();


//nav

export const nav = document.querySelector("#nav");
const navUl=document.childNodes;

const NAV_BTN_CLASS = "fa fa-bars";

function paintNavBtn() {
  const navBtn = document.createElement('i');
  navBtn.innerText=" ";
  navBtn.classList.add(NAV_BTN_CLASS);

}

function showList() {
  const navHome = document.createElement("li");
  navHome.innerHTML="HOME";
  navUl.appendChild(navHome);
}


export function navInit() {
  showList();
  paintNavBtn();
  console.log("nav.init");
}
navInit();