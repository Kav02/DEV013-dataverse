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

  // Agrega manejador de eventos a cada imagen
  shortCards.querySelectorAll("img").forEach((image) => {
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
