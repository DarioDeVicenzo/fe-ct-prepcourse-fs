function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
var array2=[];
  var long = array.length;
     var total=0; 
  for(var i=0;i<long; i++){
        total = (array[i]*i);
        array2.push(total);
      }
  return array2;
}

module.exports = multiplicarElementosPorIndice;
