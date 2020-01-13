
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