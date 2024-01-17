// import { anotherExample } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/artdata.js';

const artWorkList = document.getElementById('artWorkList');
const sectionItems = renderItems(data);
artWorkList.appendChild(sectionItems);

console.log(renderItems(data));