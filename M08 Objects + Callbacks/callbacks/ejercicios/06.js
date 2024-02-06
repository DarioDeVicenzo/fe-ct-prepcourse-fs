function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  var longi=array.length;
  var arreglo2=[];
  var call=0;
  //console.log (array,longi);
  
  for (i=0;i<longi;i++) {
    call=cb(array[i]);
    arreglo2.push(call);
  };
  return arreglo2;
}

module.exports = map;
