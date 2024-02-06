function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
  //var aminuevo= 
 // console.log(objetoUsuario,nuevoAmigo);

  objetoUsuario.amigos.push(nuevoAmigo);
//console.log('sal',objetoUsuario,nuevoAmigo);

  return objetoUsuario;
}

module.exports = agregarAmigo;
