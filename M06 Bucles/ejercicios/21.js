function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
    var potencia2= 1;
  fin=false
  while (fin=true)
 {
  if (potencia2=10) {
    fin=true;
    return false;
  }
  else if (Math.pow(2,potencia2)===numero)  {
    fin =true;
    
    return true;
  }
    potencia2=potencia2+1;
  console.log(potencia2,)
  
 }
}

module.exports = esPotenciaDeDos;
