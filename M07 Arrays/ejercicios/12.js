function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var suma=0;
  var long = arrayOfNums.length;
      
  for(var i=0;i<long; i++){
        suma+= arrayOfNums[i]
        }
  return suma;
}

module.exports = agregarNumeros;
