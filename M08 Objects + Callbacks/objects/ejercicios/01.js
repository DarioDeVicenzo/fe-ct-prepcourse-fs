const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
// var propi2= Object.prototype.hasOwnProperty.call(valor, propi);
  var propi=objeto[propiedad];
//  console.log(objeto,propiedad,propi,propi2);
//  console.log(objeto,propiedad,propi);console.log(objeto,propiedad,propi);
  var tienePropiedad = objeto.hasOwnProperty(propiedad);

// console.log('ver',tienePropiedad);
if (tienePropiedad) { 
//console.log('imp',propi);
return (propi);
}
else return undefined;
};

module.exports = obtenerValorPropiedad;
