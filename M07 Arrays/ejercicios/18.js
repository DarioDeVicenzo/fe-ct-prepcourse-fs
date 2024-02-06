function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
var arreglo2=[];
var suma=num;

for(var i=0; i<10;i++) {
suma += 2;
arreglo2.push(suma);
//console.log(arreglo2,i,suma);

if(suma === i)  break;

}

if(suma === i) {
  return "Se interrumpió la ejecución";
}
else return arreglo2;

}

module.exports = breakStatement;
