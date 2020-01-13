import body from 'index';
const TXT_SKIP = "skip";
//const body = document.querySelector("body");


export function createSkip() {
  const skip = document.createElement("div");
  body.appendChild(skip);
  skip.setAttribute("id",TXT_SKIP);
  console.log("done");
}