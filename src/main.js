// import { anotherExample } from './dataFunctions.js';
import { renderItems } from "./view.js";
import { renderCards } from "./view.js";
import data from "./data/artdata.js";

// Genera las tarjetas a partir de renderItems
const artWorkList = document.getElementById("root");
const shortCards = renderItems(data); // Agrega las tarjetas al elemento artWorkList
artWorkList.appendChild(shortCards);


//Crea la lista de artistas
const artistList = []; //Crear array vacio
for (const artwork of data) {
  const artistName = artwork.facts.artistName;
  if (!artistList.includes(artistName)) {    //Incluye solo los nombres diferentes
    artistList.push(artistName); //Push para agregar en el array
  }
}

//Incluir artistas en las opciones de filtrado
const artistOptions = artistList.map(
  //Una vez obtenidos los nombres de los artistas con map se rellenan las opciones
  (artist) => `<option value="${artist}">${artist}</option>`//Crea cada opcion
);
const artistSelect = document.getElementById("artist-filter");//Inserta las opciones en el html
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
const Movementselect= document.getElementById("artmovent-filter");
Movementselect.innerHTML =
`<option value="">Corrientes</option>

${movementOptions.join("")}
`;

const artmovement = [];
for (const list of data) {
  const artworkMovement = list.name;
  artmovement.push(artworkMovement);
  artmovement.sort();
}
console.log(artmovement);



// console.log(movementOptions);