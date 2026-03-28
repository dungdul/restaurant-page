import logo from './images/restaurant-plate-svgrepo-com.svg';

export default function() {
  const contentDiv = document.querySelector('#content');

  // Clear existing content
  contentDiv.textContent = '';

  // Hero
  const iconImg = new Image();
  iconImg.src = logo;
  iconImg.classList.add('hero-logo');
  const heroTextDiv = document.createElement('div');
  heroTextDiv.classList.add('hero-text');
  heroTextDiv.textContent = 'Welcome to Savory Haven';
  const heroDiv = document.createElement('div');
  heroDiv.classList.add('hero');
  heroDiv.append(iconImg, heroTextDiv);

  // Main
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');
  mainDiv.textContent = 'At Savory Haven, we believe great food brings people together. Founded in 2015, our restaurant blends modern culinary techniques with timeless recipes. Our chefs are passionate about using locally sourced ingredients to create dishes that are both comforting and innovative.';

  // Append these elements to content
  contentDiv.append(heroDiv, mainDiv)
}