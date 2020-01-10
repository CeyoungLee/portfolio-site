export const nav = document.querySelector("#nav");

const NAV_BTN_CLASS = "fa fa-bars";

function paintNavBtn() {
  const navBtn = document.createElement('i');
  navBtn.innerText=" ";
  navBtn.classList.add(NAV_BTN_CLASS);

}

function showList() {
  const navHome = document.createElement("li");
  navHome.innerHTML="HOME";
  nav.appendChild(navHome);
}


export function init() {
  showList();
  paintNavBtn();
  console.log("nav.init");
}
