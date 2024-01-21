// import { anotherExample } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/artdata.js';

// Genera las tarjetas apartir de renderItems
const artWorkList = document.getElementById("root");
const shortCards = renderItems(data);
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
  (artist) =>`<option value="${artist}">${artist}</option>`
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
