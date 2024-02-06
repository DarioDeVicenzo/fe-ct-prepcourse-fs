function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var  total=1;
  let i;
 if (a>b)
 {
  [a,b]=[b,a];
 }

 for ( i = a; i <= b; i++) {
 total*= i;
   }

 return total;
}

module.exports = productoEntreNúmeros;