export const home = document.querySelector("#home");

const IMG_NUMBER = 1;




function paintImg(imgNumber) {
  home.style.background=`aquamarine url('./src/${imgNumber}.jpg') no-repeat left top`;
  home.style.backgroundSize=`100% 100%`;
}

function genRandom() {
  return Math.floor((Math.random() * IMG_NUMBER) + 1);
}

export function init() {
  const randomNumber = genRandom();
  paintImg(randomNumber);
  console.log("home.init");
}


