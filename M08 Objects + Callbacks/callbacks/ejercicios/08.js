const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  var longi=array.length;
  console.log(longi);
  for (i=0;i<longi;i++) {
    var busca= callback(array);
   if (busca!=0) return busca;
   else return "No se encontró el elemento";
  };
  
};

module.exports = buscarElemento;
