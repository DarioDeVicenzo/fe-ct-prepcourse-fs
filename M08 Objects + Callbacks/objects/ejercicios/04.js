function verificarPropiedad(objeto, propiedad) {
  // Verifica si el objeto posee la propiedad recibida.
  // Retorna true si la tiene, sino retorna false.
  // PISTA: Puedes usar el método hasOwnProperty().
  // Tu código:
  var tienePropiedad = objeto.hasOwnProperty(propiedad);
  //var ver2 = objeto.hasOwnProperty('name');

 // console.log(propiedad,objeto,'tie:',tienePropiedad,objeto=== undefined,objeto===null, ver2 );

//if (objeto!= undefined && objeto!=null){

  if (tienePropiedad) return true;
  else return false;
  
//}
  
}

module.exports = verificarPropiedad;
