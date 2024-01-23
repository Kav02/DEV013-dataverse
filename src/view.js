export const renderItems = (data) => {

  const artCard = document.createElement("ul"); //itemscope se utiliza para especificar que el elemento y sus hijos contienen información sobre un solo ítem.
  artCard.setAttribute("itemscope", "");

  data.forEach((painting) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("itemtype", "");

    /* ` se utiliza para delimitar las plantillas de cadena, y ${}` se utiliza para insertar expresiones en esas plantillas de cadena.
    dt: description term y dd: description details. El dt está vacio porque no queremos mostrar el nombre de la caracteristica solo el dato*/
    listItem.innerHTML = `<dl>
    <dt><img itemprop="image" src="${painting.imageUrl}" alt="${painting.name}"></dd>
          <dt></dt><dd itemprop="name">${painting.name}</dd>
          <dt></dt><dd itemprop="artistName">${painting.facts.artistName}</dd>
          <dt></dt><dd itemprop="artMovement">${painting.facts.artMovement}</dd>
          <dt></dt><dd itemprop="creationYear">${painting.facts.creationYear}</dd>
          <dt></dt><dd itemprop="shortDescription">${painting.shortDescription}</dd>
        </dl>`;
    // Crea la tarjeta detallada
    listItem.querySelector('img').addEventListener('click', ()=> {
      const longCard = renderCards([painting]); // Obtiene la tarjeta detallada para esa pintura
      const detailCard = document.getElementById("detailCard"); // Obtiene el elemento detailCard del html
      const closeButton = document.createElement("button");
      closeButton.id = "close-button";
      closeButton.textContent = "Cerrar";
      longCard.appendChild(closeButton);
      detailCard.innerHTML = longCard.outerHTML;
      detailCard.classList.add("show");
      detailCard.querySelector('#close-button').addEventListener('click',()=>
      {
        detailCard.classList.add("close");
        setTimeout(() => {
          detailCard.classList.remove("close");
          detailCard.innerHTML = '';
          detailCard.classList.remove ("show");
        }, 500);
      });        
    });
    artCard.appendChild(listItem); //Esta coloca todos los valores en la tarjeta
    
  });
  console.log();
  return artCard;
};
export const renderCards = (data) => {
  const longCard = document.createElement("ul"); 
  longCard.setAttribute("itemscope", "");

  data.forEach((painting) => {
    const listCard = document.createElement("li");
    listCard.setAttribute("itemtype", "");
    listCard.innerHTML = `<dt><img itemprop="imageDetail1" src="${painting.imageUrl}" alt="${painting.name}"></dd>
          <dt></dt><dd itemprop="name">${painting.name}</dd>
          <dt></dt><dd itemprop="artistName">${painting.facts.artistName}</dd>
          <dt></dt><dd itemprop="artMovement">${painting.facts.artMovement}</dd>
          <dt></dt><dd itemprop="creationYear">${painting.facts.creationYear}</dd>
          <dt></dt><dd itemprop="shortDescription">${painting.shortDescription}</dd>
          <dt>Descripción:</dt><dd itemprop="description">${painting.description}</dd>
          <dt>Estilo:</dt><dd itemprop="style">${painting.additionalInformation.style}</dd>
          <dt>Técnica:</dt><dd itemprop="technique">${painting.additionalInformation.technique}</dd>
        `;
    longCard.appendChild(listCard); //Esta coloca todos los valores en la tarjeta
    console.log(longCard)
  });

  console.log();
  return longCard;
};
