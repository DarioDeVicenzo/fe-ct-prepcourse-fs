function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:v
  //var ver=objeto[propiedad] ;
  var tienePropiedad = objeto.hasOwnProperty(propiedad);

 // console.log(objeto,propiedad,valor, 'tiene',tienePropiedad);

  if (tienePropiedad)  { objeto[propiedad] = valor;    
  //console.log(objeto,'entro',propiedad,valor);
  }
  else{
    objeto[propiedad]=valor;
    //console.log(objeto,'entroelse',propiedad,valor);
  }
//console.log(objeto);
return objeto;
}

module.exports = actualizarValorPropiedad;
