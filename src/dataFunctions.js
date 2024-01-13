// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const createCards = (data) => {

  const rootElement = document.getElementById('root');
  const artWorkList = document.getElementById('artWorkList');

  for (let i = 0; i < data.length; i++) {
    const painting = data[i];

    const listItem = document.createElement('li');
    listItem.setAttribute('itemscope', '');
    listItem.setAttribute('itemtype', 'artWork');

    listItem.innerHTML = `
      <img itemprop="image" src="${painting.image}" alt="${painting.name}">
      <dl>
        <dt>Nombre:</dt>
        <dd itemprop="name">${painting.name}</dd>

        <dt>Descripción:</dt>
        <dd itemprop="description">${painting.shortDescription}</dd>

        <dt>Artista:</dt>
        <dd itemprop="artistName">${painting.artistName}</dd>
        
        <dt>Año de creación:</dt>
        <dd itemprop="creationYear">${painting.creationYear}</dd>

        <dt>Corriente:</dt>
        <dd itemprop="movement">${painting.movement}</dd>
      </dl>
    `;
    artWorkList.appendChild(listItem);
  }
    
  return 'createCards';
};

export const anotherExample = () => {
  return [];
};