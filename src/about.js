export default function () {
  const contentDiv = document.querySelector('#content');

  // Clear existing content
  contentDiv.textContent = '';

  // Hero
  const heroText = document.createElement('h1');
  heroText.textContent = 'About Us';

  const heroDiv = document.createElement('div');
  heroDiv.classList.add('hero');
  heroDiv.appendChild(heroText);

  // Main container
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');

  // Description
  const description = document.createElement('p');
  description.textContent =
    'Savory Haven is a place where great food and warm atmosphere come together. Since opening, we have focused on fresh ingredients, simple recipes, and flavors that feel both familiar and exciting.';

  // Helper function to create info sections
  function createInfoSection(titleText, contentElements) {
    const sectionDiv = document.createElement('div');
    sectionDiv.classList.add('info-section');

    const title = document.createElement('h2');
    title.textContent = titleText;

    sectionDiv.appendChild(title);

    contentElements.forEach(el => sectionDiv.appendChild(el));

    return sectionDiv;
  }

  // Opening Hours
  const hoursList = document.createElement('ul');

  const hours = [
    'Mon - Fri: 11:00 AM - 10:00 PM',
    'Sat: 10:00 AM - 11:00 PM',
    'Sun: 10:00 AM - 9:00 PM',
  ];

  hours.forEach(h => {
    const li = document.createElement('li');
    li.textContent = h;
    hoursList.appendChild(li);
  });

  const hoursSection = createInfoSection('Opening Hours', [hoursList]);

  // Location
  const locationText = document.createElement('p');
  locationText.textContent = '123 Flavor Street, Foodie City, FC 12345';

  const locationSection = createInfoSection('Location', [locationText]);

  // Contact
  const phone = document.createElement('p');
  phone.textContent = 'Phone: (123) 456-7890';

  const email = document.createElement('p');
  email.textContent = 'Email: hello@savoryhaven.com';

  const contactSection = createInfoSection('Contact', [phone, email]);

  // Assemble main
  mainDiv.append(description, hoursSection, locationSection, contactSection);

  // Append to content
  contentDiv.append(heroDiv, mainDiv);
}