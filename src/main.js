import { anotherExample } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/artdata.js";

//Genera las tarjetas a partir de render items
const artWorkList = document.getElementById("artWorkList");
const sectionItems = renderItems(data);
artWorkList.appendChild(sectionItems);

//Crea la lista de artistas
const artistList = [];
for (const artwork of data) {
  const artistName = artwork.facts.artistName;
  if (!artistList.includes(artistName)) {//Incluye solo los nombres diferentes
    artistList.push(artistName); //Push para agregar en el array
  }
}
console.log(artistList);

//
const artistOptions = artistList.map((artist) => `<option value="${artist}">${artist}</option>`);
const artistSelect = document.getElementById("artist-filter");
artistSelect.innerHTML = `
  <option value="">Todos los artistas</option>
  ${artistOptions.join("")}
`;