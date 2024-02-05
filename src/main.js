import { filterData, sortData, computeStats } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/artdata.js";

// Genera las tarjetas a partir de renderItems
const artWorkList = document.querySelector("#root");

let currentData = [...data];
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

//Incluir lista en las opciones de filtrado
const artistOptions = artistList.map(
  //Una vez obtenidos los nombres de los artistas con map se rellenan las opciones
  (artist) => `<option value="${artist}">${artist}</option>` //Crea cada opcion
);
const artistSelect = document.querySelector("#artist-filter"); //Inserta las opciones en el html
artistSelect.innerHTML = `
  <option disabled selected>Artistas</option>
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
const movementSelect = document.getElementById("artmovement-filter");
movementSelect.innerHTML = `<option disabled selected>Corrientes</option>
${movementOptions.join("")}`;

//Función de filtrar
//Por artista
document
  .querySelector("#artist-filter")
  .addEventListener("change", function (event) {
    const artistDisplay = event.target.value;
    document.querySelector("artmovement-filter").value = "Corrientes";
    document.querySelector("alphabetical-order").value = "Ordenar";
    const artistCards = filterData(data, "artistName", artistDisplay);
    currentData = [...artistCards];
    const filteredCards = renderItems(artistCards);
    const clearScreen = document.querySelector("root");
    clearScreen.innerHTML = "";
    clearScreen.appendChild(filteredCards);
  });
//Por movimiento
movementSelect.addEventListener("change", function () {
  //change:se dispara cuando hay una alteración para <select> al valor de un elemento es confirmada por el usuario.
  document.getElementById("artist-filter").value = "Artistas"; //Resetear filtro artistas
  document.getElementById("alphabetical-order").value = "Ordenar";
  const selectedArtMovement = movementSelect.value; // Filtrar y mostrar las tarjetas correspondientes
  const filterMovement = filterData(data, "artMovement", selectedArtMovement);
  currentData = [...filterMovement];
  const filteredCards = renderItems(filterMovement);
  const rootfilterMovement = document.getElementById("root");
  rootfilterMovement.innerHTML = ""; // .innerHTML = "" :se limpia el contenedor antes de agregar nuevas tarjetas
  rootfilterMovement.appendChild(filteredCards); // Agregar las tarjetas filtradas al contenedor
});

//Botón limpiar
function clear_filters() {
  const clearScreen = document.getElementById("root");
  clearScreen.innerHTML = "";
  clearScreen.appendChild(shortCards);
  document.getElementById("artist-filter").value = "Artistas";
  document.getElementById("artmovement-filter").value = "Corrientes";
  document.getElementById("alphabetical-order").value = "Ordenar";
}
const buttonClear = document.querySelector('[data-testid="button-clear"]');
buttonClear.addEventListener("click", clear_filters);

//Ordenar alfabeticamente
document
  .querySelector("#alphabetical-order")
  .addEventListener("change", function (event) {
    const sortOrder = event.target.value;
    const sortItems = sortData(currentData, "Ordenar", sortOrder);
    const sortedCards = renderItems(sortItems);
    const rootSorted = document.getElementById("root");
    rootSorted.innerHTML = ""; // .innerHTML = "" :se limpia el contenedor antes de agregar nuevas tarjetas
    rootSorted.appendChild(sortedCards);
  });

//ESTADISTICA
const dataEstadistic = computeStats(data);
const selectEstadistic = document.getElementById("movementEstadistic");
document.querySelector("#button-stats").addEventListener("click", function () {
  if (selectEstadistic.style.display === "flex") {
    selectEstadistic.style.display = "none";
    // selectEstadistic.innerHTML = "";
  } else {
    selectEstadistic.style.display = "flex";
    const stats = document.getElementById("stats");
    const graphs = document.getElementById("graphs");
    if (stats.childElementCount === 0) {
      Object.entries(dataEstadistic).forEach(([key, value]) => {
        const cardEsta = document.createElement("div");
        cardEsta.id = "cardEsta";
        cardEsta.innerHTML = `${key}: ${value} %`;

        const graph = document.createElement("div");
        graph.id = "graph";
        graph.innerHTML = graphIcon(value);

        stats.appendChild(cardEsta);
        graphs.appendChild(graph);
      });
    }
  }
});

function graphIcon(count) {
  let icon = "";
  for (let i = 0; i < count; i++) {
    icon += `<span class = "dots">■</span>`;
  }
  return icon;
}
// const iconContainer = document.getElementById("iconContainer");
// iconContainer.innerHTML = graphIcon();

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
