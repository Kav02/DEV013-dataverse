

export const filterData = (data, filterBy, value) => {
  /*Filtro por artista creado en main
Crear un desplegable recorriendo la información del artdata buscando los artistas para desplegar la lista para que el usario seleccione*/
  //Evento para que al hacer click en el artista filtre la base de datos y cuando encuentre coincidencia despliegue la tarjeta en pantalla
  //  Filtra haciendo una búsqueda en cada tarjeta el nombre del artista y cuando coincide despliega la tarjeta en pantalla, mostrando todas las que tienen coincidencia
  return data.filter((painting) => painting.facts[filterBy] === value);
};
  

export const sortData = (data, sortBy, sortOrder) => {
  const sortedCard = [];
  for (const list of data) {
    sortedCard.push(list);
  }
  if (sortOrder === "asc") {
    sortedCard.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  } else {
    sortOrder === "desc";
    sortedCard.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }
  
  return sortedCard;
  
};

export const computeStats = (data) => {
  const movementTotal=data.length;
  const Estadistic= data.reduce((acumulador,movementCount)=>{
    acumulador[movementCount.facts.artMovement]=(acumulador[movementCount.facts.artMovement]||0)+1;
    return acumulador;
  },
  {});
  const percentage = {};
  for (const Move in Estadistic) {
    percentage[Move] = Number((Estadistic[Move] / movementTotal) * 100);
  }
  return percentage;
};




















/*No se está usando
const artName = [];
for (const list of data) {
  const artworkName = list.name;
  artName.push(artworkName);
  artName.sort();
}
console.log(artName);*/
