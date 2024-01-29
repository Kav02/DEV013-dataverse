// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const anotherExample = () => {
  return [];
};

//data, filterBy, value
//Crear filtro por artista en main

//Crear un desplegable recorriendo la información del artdata buscando los artistas para desplegar la lista para que el usario seleccione
//Crear un evento para que al hacer click en el artista recorra la base de datos y cuando encuentre coincidencia despliegue la tarjeta en pantalla
//  1-Buscar en cada tarjeta el nombre del artista y cuando coincide despliega la tarjeta en pantalla, mostrando todas las que tienen coincidencia
//  2-Al dar click en el botón limpiar regresa a "home"
//  3- Ordenar (desarrollar aparte)
//Crear orden

//};

export const filterData = (data, filterBy, value) => {
  /*Crear filtro por artista en main
Crear un desplegable recorriendo la información del artdata buscando los artistas para desplegar la lista para que el usario seleccione*/
  //Crear un evento para que al hacer click en el artista recorra la base de datos y cuando encuentre coincidencia despliegue la tarjeta en pantalla
  //  1-Buscar en cada tarjeta el nombre del artista y cuando coincide despliega la tarjeta en pantalla, mostrando todas las que tienen coincidencia
  const paintingsperFilter = [];
  for (const painting of data) {
    if (painting.facts[filterBy] === value) {
      paintingsperFilter.push(painting);
    }
  }
  return paintingsperFilter;
}

//-------------------------------------------------

export const sortData = (data, sortBy, sortOrder) => {
  const nombre = [];
  for (const list of data) {
    const name = list.name;
    nombre.push(list);
    nombre.sort();
  }
  console.log(nombre);
};
