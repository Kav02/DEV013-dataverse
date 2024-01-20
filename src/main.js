// import { anotherExample } from './dataFunctions.js';
import { renderItems } from "./view.js";
import data from "./data/artdata.js";

//Genera las tarjetas a partir de renderItems
const artWorkList = document.getElementById("root");
const shortCards = renderItems(data);

// Agrega las cartas filtradas al elemento artWorkList
artWorkList.appendChild(shortCards);

//Crea la lista de artistas
const artistList = []; //Crear array vacio
for (const artwork of data) {
  const artistName = artwork.facts.artistName;
  if (!artistList.includes(artistName)) {
    //Incluye solo los nombres diferentes
    artistList.push(artistName); //Push para agregar en el array
  }
}
console.log(artistList);

//Incluir lista en las opciones de filtrado
const artistOptions = artistList.map(
  (artist) => `<option value="${artist}">${artist}</option>`
);
const artistSelect = document.getElementById("artist-filter");
artistSelect.innerHTML = `
  <option value="">Todos los artistas</option>
  ${artistOptions.join("")}
`;

const artName = [];
for (const list of data) {
  const artworkName = list.name;
  artName.push(artworkName);
  artName.sort();
}
console.log(artName);

// const liElements = artRenderedItems.querySelectorAll("li");
// //artWorkList.appendChild(artRenderedItems);
// console.log(artRenderedItems.children);

// // Crea un nuevo array con los datos que deseas extraer
// const shortCards = [];

// for (const liElement of liElements) {

//   const picture = liElement.querySelector("dd[itemprop='imageUrl']").textContent;
//   const name = liElement.querySelector("dd[itemprop='name']").textContent;
//   const artist = liElement.querySelector("dd[itemprop='artistName']").textContent;
//   const year = liElement.querySelector("dd[itemprop='creationYear']").textContent;
//   const shortDescription = liElement.querySelector("dd[itemprop='shortDescription']").textContent;
//   shortCards.push ( {
//     picture,
//     name,
//     artist,
//     year,
//     shortDescription,
//   });
//   console
// }
