import createSection from './createSection.js';

export default function () {
  const contentDiv = document.querySelector('#content');

  // Clear existing content
  contentDiv.textContent = '';

  // Hero
  const heroText = document.createElement('h1');
  heroText.textContent = 'Our Menu';

  const heroDiv = document.createElement('div');
  heroDiv.classList.add('hero');
  heroDiv.appendChild(heroText);

  // Menu container
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('section-container');

  // Data (small set)
  const starters = [
    'Tomato Basil Soup $6',
    'Garlic Bread $5',
  ];

  const mains = [
    'Grilled Chicken $14',
    'Seared Salmon $18',
  ];

  const desserts = [
    'Chocolate Cake $7',
    'Ice Cream $4',
  ];

  // Create sections
  const startersSection = createSection('Starters', starters);
  const mainsSection = createSection('Main Courses', mains);
  const dessertsSection = createSection('Desserts', desserts);

  // Append sections to menu
  menuDiv.append(startersSection, mainsSection, dessertsSection);

  // Append everything to content
  contentDiv.append(heroDiv, menuDiv);
}