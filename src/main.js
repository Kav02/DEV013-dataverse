// import { anotherExample } from './dataFunctions.js';
import { renderItems } from "./view.js";
import { renderCards } from "./view.js";
import data from "./data/artdata.js";

document.addEventListener("DOMContentLoaded", () => {
  // Genera las tarjetas a partir de renderItems
  const artWorkList = document.getElementById("root");
  const shortCards = renderItems(data);
  // Agrega las tarjetas al elemento artWorkList
  artWorkList.appendChild(shortCards);

  // Agrega manejador de eventos a cada tarjeta
  shortCards.querySelectorAll("img").forEach((image) => {
    //Deberia cambiarlo por la tarjeta, no la imagen, pero no se como identificar la tarjeta
    image.addEventListener("click", (event) => {
      // Encuentra la pintura asociada a la imagen
      const painting = data.find(
        (painting) => painting.imageUrl === event.target.src
      );

      // Obtiene la tarjeta detallada para esa pintura
      const longCard = renderCards([painting]);
      // Agrega la tarjeta detallada al elemento detailCard
      const detailCard = document.getElementById("detailCard");
      // Inserta el detailCard antes de la imagen que el usuario hizo clic
      const imageParent = image.parentNode;
      imageParent.insertBefore(detailCard, image);
      detailCard.style.position = "fixed";

      // Establece el contenido del elemento detailCard
      detailCard.innerHTML = longCard.outerHTML;

      // Muestra el pop up
      detailCard.classList.add("show");
    });
  });
});

//Crea la lista de artistas
const artistList = []; //Crear array vacio
for (const artwork of data) {
  const artistName = artwork.facts.artistName;
  if (!artistList.includes(artistName)) {    //Incluye solo los nombres diferentes
    artistList.push(artistName); //Push para agregar en el array
  }
}
console.log(artistList);

//Incluir artistas en las opciones de filtrado
const artistOptions = artistList.map(
  //Una vez obtenidos los nombres de los artistas con map se rellenan las opciones
  (artist) => `<option value="${artist}">${artist}</option>`//Crea cada opcion
);
const artistSelect = document.getElementById("artist-filter");//Inserta las opciones en el html
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
