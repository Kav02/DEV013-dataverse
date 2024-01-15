export const renderItems = (data) => {
  console.log(data)
    
  const artRenderedItems = document.createElement('section');
  data.forEach((painting) => {
    
    const listItem = document.createElement('li');
    
    listItem.setAttribute('itemscope', '');//itemscope se utiliza para especificar que el elemento y sus hijos contienen información sobre un solo ítem.
    listItem.setAttribute('itemtype', 'http://schema.org/ArtWork');
    // ` se utiliza para delimitar las plantillas de cadena, y ${}` se utiliza para insertar expresiones en esas plantillas de cadena.
  
    listItem.innerHTML =
          `<dl itemscope itemtype="artWork">
          <dt><img itemprop="image" src="${painting.imageUrl}" alt="${painting.name}"></dd>
          <dt></dt><dd itemprop="name">${painting.name}</dd>
          <dt></dt><dd itemprop="artistName">${painting.facts.artistName}</dd>
          <dt></dt><dd itemprop="artMovement">${painting.facts.artMovement}</dd>
          <dt></dt><dd itemprop="creationYear">${painting.facts.creationYear}</dd>
        </dl>`;
    artRenderedItems.appendChild(listItem); //Esta coloca todos los valores en la pantalla
    //renderedItems.push(listItem);//Push agrega los valores al array
  });
  
  
  
  console.log ();
  return artRenderedItems;
}; 
//crear una funcion para el dialog 
/*listItem.innerHTML =
          `<dl itemscope itemtype="artWork">
          <dt><img itemprop="image" src="${painting.imageUrl}" alt="${painting.name}"></dd>
          <dt></dt><dd itemprop="name">${painting.name}</dd>
          <dt>Artista:</dt><dd itemprop="artistName">${painting.facts.artistName}</dd>
          <dt>Corriente:</dt><dd itemprop="artMovement">${painting.facts.artMovement}</dd>
          <dt>Año de creación:</dt><dd itemprop="creationYear">${painting.facts.creationYear}</dd>
          <dt>Descripción Corta:</dt><dd itemprop="shortDescription">${painting.shortDescription}</dd>
          <dt>Descripción:</dt><dd itemprop="description">${painting.description}</dd>
          <dt>Estilo:</dt><dd itemprop="style">${painting.additionalInformation.style}</dd>
          <dt>Técnica:</dt><dd itemprop="technique">${painting.additionalInformation.technique}</dd>
        </dl>`;*/