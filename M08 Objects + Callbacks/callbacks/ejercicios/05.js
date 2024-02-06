function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  var longi=array.length;
  for (i=0;i<longi;i++) {
    cb(array[i]);
  };

}

module.exports = forEach;
