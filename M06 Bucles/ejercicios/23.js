function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
 var cont=0;
 var total=num;
  do {
    total = total+5;
    cont = cont+1;
  } while (cont<8);

  return total;
}

module.exports = doWhile;