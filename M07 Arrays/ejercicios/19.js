function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:

var cont=1;
var arreglo=[];

  for (i=(num+2);i<(num+20);i+=2){
            //if(cont===5) continue;
            
    //else 
    cont+=1;

  //                console.log("1",i,num,cont,arreglo);
arreglo.push(i);
}
//console.log(i,num,cont,arreglo);
return arreglo;
}

module.exports = continueStatement;
