function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
  var longi=arrayOfNumbers.length;
  var sum=0;
  for (i=0;i<longi;i++) {
    sum+=arrayOfNumbers[i];
  }

  var opmat=cb(sum);
  return opmat;
}

module.exports = sumarArray;
