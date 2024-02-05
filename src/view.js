export const renderItems = (data) => {
  const artCard = document.createElement("ul"); //itemscope se utiliza para especificar que el elemento y sus hijos contienen información sobre un solo ítem.
  artCard.setAttribute("itemscope", "");
  data.forEach((painting) => {
    const listItem = document.createElement("li");
    listItem.setAttribute('itemtype', "");

    /* ` se utiliza para delimitar las plantillas de cadena, y ${}` se utiliza para insertar expresiones en esas plantillas de cadena.
    dt: description term y dd: description details. El dt está vacio porque no queremos mostrar el nombre de la caracteristica solo el dato*/
    listItem.innerHTML = `<dl id="cardContainer">
    <dt><img itemprop="image" src="${painting.imageUrl}" alt="${painting.name}"></dd>
          <dt class="contenedor1"></dt><dd itemprop="name">${painting.name}</dd>
          <dt class="contenedor1"></dt><dd itemprop="artistName">${painting.facts.artistName}</dd>
          <dt class="contenedor1"></dt><dd itemprop="artMovement">${painting.facts.artMovement}</dd>
          <dt class="contenedor1"></dt><dd itemprop="creationYear">${painting.facts.creationYear}</dd>
          <dt class="contenedor1"></dt><dd itemprop="shortDescription">${painting.shortDescription}</dd>
        </dl>`;
    // Crea la tarjeta detallada
    listItem.querySelector("img").addEventListener("click", () => {
      const longCard = renderCards([painting]); // Obtiene la tarjeta detallada para esa pintura
      const detailCard = document.getElementById("detailCard"); // Obtiene el elemento detailCard del html
      const closeButton = document.createElement("button");
      closeButton.id = "close-button";
      closeButton.textContent = "Cerrar";
      longCard.appendChild(closeButton);
      detailCard.innerHTML = longCard.outerHTML;
      detailCard.classList.add("show");
      detailCard
        .querySelector("#close-button")
        .addEventListener("click", () => {
          detailCard.classList.add("close");
          setTimeout(() => {
            detailCard.classList.remove("close");
            detailCard.innerHTML = "";
            detailCard.classList.remove("show");
          }, 100);
        });
    });
    artCard.appendChild(listItem); //Esta coloca todos los valores en la tarjeta
  });
  return artCard;
};
export const renderCards = (data) => {
  const longCard = document.createElement("ul");
  longCard.setAttribute("itemscope", "");
  data.forEach((painting) => {
    const listCard = document.createElement("li");
    listCard.setAttribute('itemscope', '');
    listCard.setAttribute("itemtype", "");
    listCard.innerHTML = `<dl id="ContenedorDetails">
    <dt><img itemprop="imageDetails" src="${painting.imageUrl}" alt="${painting.name}"></dd>
          <dt></dt><dd itemprop="nameDetails">${painting.name}</dd>
          <dt></dt><dd itemprop="artistNameDetails" class="contenedor2">Artista: ${painting.facts.artistName}</dd>
          <dt></dt><dd itemprop="artMovementDetails" class="contenedor2">Corriente: ${painting.facts.artMovement}</dd>
          <dt></dt><dd itemprop="creationYearDetails" class="contenedor2">Año: ${painting.facts.creationYear}</dd>
          <dt></dt><dd itemprop="descriptionDetails">${painting.description}</dd>
          <dt></dt><dd itemprop="styleDetails" class="contenedor3">Estilo: ${painting.additionalInformation.style}</dd>
          <dt></dt><dd itemprop="techniqueDetails" class="contenedor3">Técnica: ${painting.additionalInformation.technique}</dd>
          <dl>`;
    longCard.appendChild(listCard); //Esta coloca todos los valores en la tarjeta
  });
  return longCard;
};

//Generar la tarjeta con estadística
export const renderStats = (percentages) => {
  for (const artMovement in percentages) {
    const listMove = document.createElement("li");
    listMove.textContent = `${artMovement}: ${percentages[artMovement]}`;
  }
};
