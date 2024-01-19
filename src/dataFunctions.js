// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const anotherExample = () => {
  return [];
};
export const filterData  = () =>{
//data, filterBy, value
//Crear filtro por artista
//Crear un array con los artistas para desplegar la lista para seleccionar
//Crear un evento para que al hacer click en el artista recorra la base de datos y cuando encuentre coincidencia despliegue la tarjeta en pantalla
};

export const sortData = (data, sortBy, sortOrder) =>{
  const nombre = [];
for (const list of data) {
  const name = list.name;
nombre.push(list);
nombre.sort();
}
console.log(nombre);
}