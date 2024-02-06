function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var array2=[];

  array.forEach(element => { 
    if (element>10) array2.push(element);
    
  });
  
  if (array2.length===0) return 0;
  else return array2.length;
}

module.exports = contarElementosMayoresA10;
