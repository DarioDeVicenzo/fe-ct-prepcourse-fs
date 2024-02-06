function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
 // var obj=objeto;
 var tienePropiedad = objeto.hasOwnProperty(propiedad);

 //var exist= objeto.hasOwnPropiety(propiedad);
 //console.log(objeto,tienePropiedad);
 
    if (tienePropiedad) return true;
  else return false;
}

module.exports = tienePropiedad;
