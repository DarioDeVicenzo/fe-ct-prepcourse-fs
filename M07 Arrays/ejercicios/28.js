function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
 var longi=arr.length;

console.log(arr,longi,arr[0]!=0);
  if ((arr[0]!=0)) {
    return true;}
 else  return false;
  //return false;
}


module.exports = esArrayNoVacio;