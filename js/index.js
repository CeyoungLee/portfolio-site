const TXT_HEADER = "header";
const TXT_HOME = "home";
const TXT_ABOUT = "about";
const TXT_WORKS = "works";
const TXT_CONTACTS = "contacts";
const TXT_FOOTER = "footer";
const body = document.querySelector("body");


import * as skip from './skip';
skip.createSkip();
/*
<div id='skip'>
  <p><a href='#header'>menu</a></p>
  <p><a href='#home'>home</a></p>
  <p><a href='#about'>about</a></p>
  <p><a href='#works'>works</a></p>
  <p><a href='#contacts'>contacts</a></p>
  <p><a href='#footer'>footer</a></p>
</div>
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