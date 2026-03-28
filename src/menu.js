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
  menuDiv.classList.add('menu');

  // Helper function to create a section
  function createMenuSection(titleText, items) {
    const sectionDiv = document.createElement('div');
    sectionDiv.classList.add('menu-section');

    const title = document.createElement('h2');
    title.textContent = titleText;

    const list = document.createElement('ul');

    items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} — $${item.price}`;
      list.appendChild(listItem);
    });

    sectionDiv.append(title, list);
    return sectionDiv;
  }

  // Data (small set)
  const starters = [
    { name: 'Tomato Basil Soup', price: 6 },
    { name: 'Garlic Bread', price: 5 },
  ];

  const mains = [
    { name: 'Grilled Chicken', price: 14 },
    { name: 'Seared Salmon', price: 18 },
  ];

  const desserts = [
    { name: 'Chocolate Cake', price: 7 },
    { name: 'Ice Cream', price: 4 },
  ];

  // Create sections
  const startersSection = createMenuSection('Starters', starters);
  const mainsSection = createMenuSection('Main Courses', mains);
  const dessertsSection = createMenuSection('Desserts', desserts);

  // Append sections to menu
  menuDiv.append(startersSection, mainsSection, dessertsSection);

  // Append everything to content
  contentDiv.append(heroDiv, menuDiv);
}