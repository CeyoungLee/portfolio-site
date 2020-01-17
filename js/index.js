const TXT_SKIP = "skip";
const TXT00 = "header";//nav
const TXT01 = "main";//sections
const TXT02 = "footer";
const BODY_NUMBER=3;

const TXT10 = "home";
const TXT11 = "about";
const TXT12 = "works";
const TXT13 = "contact";
const MENU_NUMBER = 4;
const body = document.querySelector("body");

function skipCreate() {
  const skip = document.createElement("div");
  body.appendChild(skip);
  skip.setAttribute("id", TXT_SKIP);
}

function skipAssign() {
  const skip = document.getElementById(TXT_SKIP);
  for (let i = 0; i < MENU_NUMBER; i++) {
    let TXT_I = eval(`TXT1${i}`);
    eval(`let skipP${i} = document.createElement(\'p\');
      let skipA${i} = document.createElement(\'a\');
      skip.appendChild(skipP${i});
      skipP${i}.appendChild(skipA${i});
      skipA${i}.setAttribute(\"href\", \"#${TXT_I}\");
      skipA${i}.innerHTML = \"${TXT_I}\".toUpperCase();
    `);
  }
}

function skipComplete() {
  skipCreate();
  skipAssign();
}

function headerMainFooterCreate() {
  console.log('header making start');
  let TXT_I;
  for (let i = 0; i < BODY_NUMBER; i++) {
    function headerFooter(i) {
      TXT_I = eval(`TXT0${i}`);
      console.log(TXT_I);
      eval(`
        const ${TXT_I} = document.createElement(\'${TXT_I}\');
        body.appendChild(${TXT_I});
        ${TXT_I}.setAttribute("id", \'${TXT_I}\');
      `);
    }
    headerFooter(i);
  }

  for(let i = 0; i<MENU_NUMBER; i++){
    function sectionCreate(i){
      TXT_I = eval(`TXT1${i}`);
      console.log(TXT_I);
      eval(`
        const sec${TXT_I} = document.createElement(\'section\');
        const sec${TXT_I}h1 = document.createElement('h1');
        main.appendChild(sec${TXT_I});
        sec${TXT_I}.appendChild(sec${TXT_I}h1);
        sec${TXT_I}h1.innerHTML = \'${TXT_I}\';
        sec${TXT_I}.setAttribute("id", \'${TXT_I}\');
        sec${TXT_I}.setAttribute("class", \'section${i+1} section\');
      `);
    }
    sectionCreate(i);
  }


}


function init() {
  skipComplete();
  headerMainFooterCreate();
}

init();


/*
<header id="header">
  <nav>
    <ul>
    </ul>
  </nav>
</header>
<main>
  <section id="home" class="section section1">
    <div>
      <h1 class="heading">home</h1>
    </div>
  </section>
  <section id="about" class="section section2">
    <div>
      <h1 class="heading">about</h1>
    </div>
  </section>
  <section id="works" class="section section3">
    <div>
      <h1 class="heading">works</h1>
    </div>
  </section>
  <section id="contacts" class="section section4">
    <div>
      <h1 class="heading">contacts</h1>
    </div>
  </section>
</main>
<footer id="footer" class="footer">
  <div>
    <h1 class="heading">footer</h1>
  </div>
</footer>
 */