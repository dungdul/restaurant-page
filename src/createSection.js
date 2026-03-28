// Helper function to create a section
export default function(titleText, items) {
  const sectionDiv = document.createElement('div');
  sectionDiv.classList.add('section');

  const title = document.createElement('h2');
  title.textContent = titleText;

  const list = document.createElement('ul');

  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  });

  sectionDiv.append(title, list);
  return sectionDiv;
}