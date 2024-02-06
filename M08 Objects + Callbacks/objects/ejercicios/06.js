const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var cont=0;
  //console.log(objeto);
 //console.log( Object.keys(objeto));
//var prop =  objeto.
  for(var prop in objeto) {
    cont +=1;
  //  console.log(cont,'cinta');
  }
  return cont;
};

module.exports = contarPropiedades;
