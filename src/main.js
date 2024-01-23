// import { anotherExample } from './dataFunctions.js';
import { renderItems } from "./view.js";
import { renderCards } from "./view.js";
import data from "./data/artdata.js";

document.addEventListener("DOMContentLoaded", () => {
  // Genera las tarjetas a partir de renderItems
  const artWorkList = document.getElementById("root");
  const shortCards = renderItems(data); // Agrega las tarjetas al elemento artWorkList
  artWorkList.appendChild(shortCards);

  // Crea la tarjeta detallada
  shortCards.querySelectorAll("img").forEach((image) => {
    image.addEventListener("click", (event) => {
      // Encuentra la pintura asociada a la imagen
      const painting = data.find(
        (painting) => painting.imageUrl === event.target.src
      );
      const longCard = renderCards([painting]); // Obtiene la tarjeta detallada para esa pintura
      const detailCard = document.getElementById("detailCard"); // Obtiene el elemento detailCard del html
      const closeButton = document.createElement("button");
      closeButton.id = "close-button";
      closeButton.textContent = "Cerrar";
      closeButton.addEventListener("click", function () {
        detailCard.classList.add("close");
        setTimeout(() => {
          detailCard.classList.remove("close");
          detailCard.style.display = "none";
        }, 1000);
      });
      longCard.appendChild(closeButton);
      detailCard.innerHTML = longCard.outerHTML;
      detailCard.classList.add("show");
           
      console.log(longCard);
      console.log(closeButton);
    });
  });
});
//Obtener el boton y funcion de cerrar



/*window.addEventListener("click", e =>{
 if (e.target !== detailCard) {
if (detailCard.classList.contains("show")) {
    closeCard();
 }
});*/

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
