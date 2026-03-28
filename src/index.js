import renderHomePage from './home.js';
import renderMenuPage from'./menu.js';
import renderAboutPage from './about.js';
import './styles.css';

function addEventListeners() {
  const homebutton = document.querySelector('#home-button');
  const menuButton = document.querySelector('#menu-button');
  const aboutButton = document.querySelector('#about-button');

  homebutton.onclick = renderHomePage;
  menuButton.onclick = renderMenuPage;
  aboutButton.onclick = renderAboutPage;
}

addEventListeners();
renderAboutPage();