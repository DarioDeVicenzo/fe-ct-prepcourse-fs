function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  var longit=numeros.length;
  
  var ini=numeros[0]+1;
 // console.log(longit);

  if (longit===0) return null;
  else{
        for (var i=1; i<longit;i++){
          if (ini!=numeros[i]) break;
          
          ++ini;
  //      console.log(ini,i,numeros[i]);
                  
      }
        if (i===longit) return null;
        else return ini;

  }
}

module.exports = encontrarNumeroFaltante;