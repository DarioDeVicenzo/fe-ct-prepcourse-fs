function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var array2=[];
  var long = array.length;
  
  for (var i=0; i <= (long-1); i++)
  {
    if (array[i]%2===0)
    array2.push(array[i]);
  }
return array2;
}

module.exports = filtrarNumerosPares;
