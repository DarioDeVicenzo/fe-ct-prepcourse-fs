function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var ele1=array[0];
 var si =false;
 
 //var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

 var si =  array.every((num) => { return num === ele1} );
// console.log(si,ele1, array.every((num) => { return num === ele1}));
 return si;
}

module.exports = todosIguales;
