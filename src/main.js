// import { anotherExample } from './dataFunctions.js';
import { renderItems } from "./view.js";
import data from "./data/artdata.js";
import {filterData} from "./dataFunctions.js";

// Genera las tarjetas a partir de renderItems
const artWorkList = document.getElementById("root");
const shortCards = renderItems(data); // Agrega las tarjetas al elemento artWorkList
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

//Incluir lista en las opciones de filtrado
const artistOptions = artistList.map(
  (artist) => `<option value="${artist}">${artist}</option>`
);
const artistSelect = document.getElementById("artist-filter");
artistSelect.innerHTML = `
  <option value="">Artistas</option>
  ${artistOptions.join("")}
`;

const artName = [];
for (const list of data) {
  const artworkName = list.name;
  artName.push(artworkName);
  artName.sort();
}
console.log(artName);


//Crea la lista de Corrientes
const MovementList = []; //Crear array vacio
for (const artwork of data) {
  const Movement = artwork.facts.artMovement;
  if (!MovementList.includes(Movement)) {
    //Incluye solo las corrientes diferentes
    MovementList.push(Movement); //Push para agregar en el array
  }
}
console.log(MovementList);

// Incluir lista en las opciones de filtrado
const movementOptions = MovementList.map( Move =>`<option value="${Move}">${Move}</option>`);
const movementSelect= document.getElementById("artmovent-filter");
movementSelect.innerHTML =
`<option value="">Corrientes</option>

${movementOptions.join("")}
`;

const movement = [];
for (const list of data) {
  const artworkMovement = list.name;
  movement.push(artworkMovement);
  movement.sort();
}
console.log(movement);

//OBTENER FILTRADO POR CORRIENTES

//extraer o agruparlas las tarjetas con la corriente selecciona
//sin recargar la pagina , volver a la pagina vacia
//colocar las tarjetas seleccionadas

movementSelect.addEventListener("change", function () {   //change:se dispara cuando hay una alteración para <select> al valor de un elemento es confirmada por el usuario.
  const selectedArtMovement = movementSelect.value;
  // Filtrar y mostrar las tarjetas correspondientes
  const filterMovement = filterData(data, "artMovement", selectedArtMovement);

  const filteredCards = renderItems(filterMovement);

  const rootfilterMovement = document.getElementById("root");
  rootfilterMovement.innerHTML = "";      // .innerHTML = "" :se limpia el contenedor antes de agregar nuevas tarjetas
  // Agregar las tarjetas filtradas al contenedor
  rootfilterMovement.appendChild(filteredCards);
});
