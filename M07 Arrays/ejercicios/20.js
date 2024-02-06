function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
var suma=0;
var longi=numeros.length;

for(var i=0;i<longi;i++){
  if (numeros[i]%2!=0)
  continue;
else  suma +=1;
}
return suma;
}

module.exports = contarParesConContinue;
