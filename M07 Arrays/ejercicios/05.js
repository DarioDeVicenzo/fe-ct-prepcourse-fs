function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:














  
  //cc
  var longi = array.length;
  
  for (var i=0 ; i<longi ; i++)
  {
    var stri = array[i];
    if(array[i].length>5) break;
  }
 if (i===longi) return undefined; 
 else return  stri;
}

module.exports = obtenerPrimerStringLargo;
