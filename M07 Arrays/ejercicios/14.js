function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  var tot=1;
//console.log(arguments);
  if (arguments===0 || arguments.length===0) {tot=0;
  //console.log('salio 0',tot)
  }
  //else  if (arguments===1) tot=arguments;
  else  if (arguments===1) tot=1;
  else {
        for (var i=0; i< arguments.length;i++) {
          tot = tot* arguments[i];
    //  console.log(arguments[i],tot,i);

        }
}

//console.log(tot,'salio');
return tot; 
}

module.exports = multiplicarArgumentos;
