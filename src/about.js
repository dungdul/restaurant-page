import createSection from "./createSection.js";

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
  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('section-container');

  // Opening Hours
  const hours = [
    'Mon - Fri: 11:00 AM - 10:00 PM',
    'Sat: 10:00 AM - 11:00 PM',
    'Sun: 10:00 AM - 9:00 PM',
  ];

  const hoursSection = createSection('Opening Hours', hours);

  // Location
  const locationText = '123 Flavor Street, Foodie City, FC 12345';

  const locationSection = createSection('Location', [locationText]);

  // Contact
  const phone = 'Phone: (123) 456-7890';

  const email = 'Email: hello@savoryhaven.com';

  const contactSection = createSection('Contact', [phone, email]);

  // Assemble main
  aboutDiv.append(hoursSection, locationSection, contactSection);

  // Append to content
  contentDiv.append(heroDiv, aboutDiv);
}