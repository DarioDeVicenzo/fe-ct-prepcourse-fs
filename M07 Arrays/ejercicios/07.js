function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
 //console.log(array,array.length);
var long = array.length;
var elementostr = strnuevo ="";
var Arreglofinal = nuevoarr=[];

for(var i=0;i<long;i++){
elementostr = array[i].split(' ');

var longele= elementostr.length
nuevoarr=[];
  for (j=0;j<longele;j++){
    nuevoarr.push(elementostr[j].toUpperCase());
//    console.log("car",nuevoarr);
  }
 strnuevo=nuevoarr.join();

Arreglofinal.push(strnuevo);
//console.log("fin",strnuevo,Arreglofinal);
}
return Arreglofinal;
}

module.exports = convertirStringAMayusculas;
