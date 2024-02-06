function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var array2=[];
  array2 =array.map(element => {return element*2});

return array2;
}

module.exports = duplicarElementos;
