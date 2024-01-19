// import { anotherExample } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/artdata.js';


const artWorkList = document.getElementById('artWorkList');
const sectionItems = renderItems(data);
artWorkList.appendChild(sectionItems);

console.log(renderItems(data));

// import showSubmenu() from './index.html';

function showSubmenu() {
  const mainMenu = document.getElementById('mainMenu');
  const selectedValue = mainMenu.options[mainMenu.selectedIndex].value;
    
    // Oculta todas las opciones secundarias
  document.querySelectorAll('.Subopciones').forEach(function (submenu) {
    submenu.style.display = 'none';
});

    // Muestra la opción secundaria correspondiente
  document.getElementById('subMenu' + selectedValue.charAt(selectedValue.length - 1)).style.display = 'block';
}