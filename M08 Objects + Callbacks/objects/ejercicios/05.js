const listarPropiedades = (objeto) => {
  // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Tu código:
var arreglo=[];
 
  arreglo= Object.keys(objeto) ;
//  console.log(arreglo);
  return arreglo;

};

module.exports = listarPropiedades;
