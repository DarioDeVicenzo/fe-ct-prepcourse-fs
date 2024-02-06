function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  
  












  
  //CC
var  longi= secuencia.length;
var multi=0;
//console.log(n,secuencia);
if (longi===0 ) multi=undefined;
else{
  for (var i=0;i<longi;i++) {
  //  console.log("if entro",secuencia[i],n,longi,i);
    if (secuencia[i]%n===0){
    //  console.log(secuencia[i],n,longi,i);
      multi=secuencia[i];
          break;
      }
      
  }
}
//console.log(multi,secuencia[i],n,longi,i);
return multi;
  
}

module.exports = encontrarPrimerMultiploDeN;