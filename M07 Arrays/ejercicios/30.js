function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  //console.log(numeros);
  var longi=numeros.length;
  var ini=numeros.shift();
var devol="0";
 //console.log(numeros);
 
       while (numeros[0]!=null){
                  if (numeros.includes(ini)){
                    //console.log(ini,numeros[0]!=null);
                      devol=ini;
                    break;
                    }
                  
                  ini = numeros.shift();

                  if(numeros[0]!=null) {devol= undefined;
                 // console.log('si')
                  }
                  //console.log(ini,devol,numeros[0]===null);
                 }
       

            return devol;

}

module.exports = encontrarElementoRepetido;