function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var i=0;
  var suma =0;

  resultadosTest.forEach(element => {
    suma += element;
    i++;
   
  });
  

return (suma/i);
}


module.exports = promedioResultadosTest;
