function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
  var recu = objetoMisterioso['numeroMisterioso'];
  var multi=recu*5;
  return multi;
}

module.exports = multiplicarNumeroDesconocidoPorCinco;
