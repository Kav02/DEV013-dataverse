import { filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/artdata.js";

// Genera las tarjetas a partir de renderItems
const artWorkList = document.querySelector("#root");
const shortCards = renderItems(data); // Agrega las tarjetas al elemento artWorkList
artWorkList.appendChild(shortCards);

//Crea la lista de artistas
const artistList = []; //Crear array vacio
for (const artwork of data) {
  const artistName = artwork.facts.artistName;
  if (!artistList.includes(artistName)) {
    //Incluye solo los nombres diferentes
    artistList.push(artistName); //Push para agregar en el array
    artistList.sort();
  }
}
//Incluir artistas en las opciones de filtrado
const artistOptions = artistList.map(
  //Una vez obtenidos los nombres de los artistas con map se rellenan las opciones
  (artist) => `<option value="${artist}">${artist}</option>` //Crea cada opcion
);
const artistSelect = document.querySelector("#artist-filter"); //Inserta las opciones en el html
artistSelect.innerHTML = `
  <option disable selected>Artista</option>
  ${artistOptions.join("")}`;

//Crea la lista de Corrientes
const movementList = []; //Crear array vacio
for (const artwork of data) {
  const movement = artwork.facts.artMovement;
  if (!movementList.includes(movement)) {
    //Incluye solo las corrientes diferentes
    movementList.push(movement); //Push para agregar en el array
    movementList.sort();
  }
}
// Incluir lista en las opciones de filtrado
const movementOptions = movementList.map(
  (move) => `<option value="${move}">${move}</option>`
);
const movementSelect = document.getElementById("artmovent-filter");
movementSelect.innerHTML = `<option value="">Corrientes</option>
${movementOptions.join("")}`;

//Función de filtrar
//Obtener el artista seleccionado
document.querySelector("#artist-filter")
  .addEventListener("change", function (event) {
    const artistDisplay = event.target.value;
    const artistCards = filterData(data, "artistName", artistDisplay);
    const filteredCards = renderItems(artistCards);
    const clearScreen = document.getElementById("root");
    clearScreen.innerHTML= "";
    clearScreen.appendChild(filteredCards); 
  });

//Botón limpiar
function clear_filters() {
  const clearScreen = document.getElementById('root');
  clearScreen.innerHTML= ""; 
  clearScreen.appendChild(shortCards);
  document.getElementById("artist-filter").value = 'Artista';
  document.getElementById("movement-filter").value = 'Corriente';
}
const buttonClear = document.querySelector('[data-testid="button-clear"]');
buttonClear.addEventListener("click", clear_filters);

/*No se está usando
const artName = [];
for (const list of data) {
  const artworkName = list.name;
  artName.push(artworkName);
  artName.sort();
}
console.log(artName);*/

/*const artMovement = [];
for (const list of data) {
  const artworkMovement = list.artMovement;
  artMovement.push(artworkMovement);
  artMovement.sort();
}
console.log(artMovement);*/
